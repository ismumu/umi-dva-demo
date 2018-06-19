
import { Component } from 'react';
import { Link } from 'dva/router';

import menusJson from './menusJson';

import {
    Menu,
} from 'antd';



export default class Menus extends Component {
    render () {

        let { routes } = this.props;

        let item = [];
        menusJson.forEach((menuData) => {
            routes.forEach((routeData) => {
                if ( menuData.path === routeData.path ) {
                    item.push(
                        <Menu.Item key={routeData.path}>
                            <Link to={routeData.path}>{menuData.name}</Link>
                        </Menu.Item>
                    )
                }
            })
            
        })

        return (
            <Menu theme="dark" mode="inline">
                {item}
            </Menu>
        )
    }
}