
import { Component } from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import { Link } from 'dva/router';

// nprogress
// import 'nprogress/nprogress.css'
// import NProgress from 'nprogress';


import styles from './index.less';


import {
    Layout,
    Icon,
    BackTop,
    Menu,
} from 'antd';

const { Header, Content, Footer, Sider } = Layout;


@connect(({ umiDvaGlobal }) => ({ umiDvaGlobal }))

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

        const { umiDvaGlobal, children } = this.props;

        return (
            <Layout className={styles.layout}>
                <Sider
                    collapsible
                    collapsed={umiDvaGlobal.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className={styles.logo}>umi dva demo</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="index">
                            <Link to="/">Index</Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">About</Link>
                        </Menu.Item>
                    </Menu>
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




