//后台管理的路由组件
import React,{Component} from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils'
import { Layout } from 'antd';
import LeftNav from "../../components/left-nav";
import HeaderDom from "../../components/header";
import Home from "../home";
import ClassManage from "../classManage";
import Product from "../product";
import Bar from '../echart/bar'
import Line from "../echart/line";
import Pie from "../echart/pie";
import './style.less'
// import localData from '../../utils/localStorage'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import Login from "../../api";

const { Header, Sider, Content,Footer } = Layout;

export default class Admin extends Component{
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render(){
        const user = memoryUtils.user
        if(!user||!user.id){
            //自动跳转到登陆（在render中）中
            return <Redirect to='/login'/>
        }
        return(
            <div className='admin'>
            <Layout style={{minHeight:'100vh'}}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <LeftNav collapsed={this.state.collapsed}/>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: '0 10px' }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        <HeaderDom/>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                        }}
                    >
                        {/*路由*/}
                        <div>
                            <Switch>
                                <Route path='/home' component={Home}>
                                </Route>
                                <Route path='/product' component={Product}>
                                </Route>
                                <Route path='/classManage' component={ClassManage}>
                                </Route>
                                <Route path='/bar' component={Bar}>
                                </Route>
                                <Route path='/line' component={Line}>
                                </Route>
                                <Route path='/pie' component={Pie}>
                                </Route>
                                <Redirect to='/home'/>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
            </div>
        )
    }
}