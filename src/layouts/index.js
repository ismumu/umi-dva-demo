
import { Component } from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';

// nprogress
// import 'nprogress/nprogress.css'
// import NProgress from 'nprogress';


import Meuns from '../components/menu/index';


import styles from './index.less';


import {
    Layout,
    Icon,
    BackTop,
} from 'antd';

const { Header, Content, Footer, Sider } = Layout;


@connect(({ umiDvaGlobal, loading }) => ({ umiDvaGlobal, loading }))

class App extends Component {

    componentDidUpdate(prevProps) {

        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }

    }

    // 折叠左侧菜单
    onCollapse = () => {
        const { umiDvaGlobal, dispatch } = this.props;
        dispatch({
            type: 'umiDvaGlobal/changeState',
            payload: {
                collapsed: !umiDvaGlobal.collapsed,
            }
        })
    }

    render() {

        const { umiDvaGlobal, children, route } = this.props;
        return (
            <Layout className={styles.layout}>
                <Sider
                    collapsible
                    collapsed={umiDvaGlobal.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className={styles.logo}>umi dva demo</div>
                    <Meuns routes={route.routes} />
                </Sider>

                <Layout>
                    <Header className={styles.header}>

                        <Icon
                            className={styles.trigger}
                            type={umiDvaGlobal.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.onCollapse}
                        />
                    </Header>

                    <Content className={styles.contentWrap}>
                        <div className={styles.content}>
                            {children}
                        </div>
                    </Content>

                    <Footer className={styles.footer} >Contact Email：ismmm@qq.com</Footer>
                </Layout>
                <BackTop />
                <div className={styles.progressIndicator} style={{ 'width': umiDvaGlobal.progressWidth + '%' }}></div>
            </Layout>
        )

    }
}

export default withRouter(App);




