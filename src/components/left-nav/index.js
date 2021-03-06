import React from 'react'
import {  Menu } from 'antd';
import logo from '../../assets/img/logo.png'
import {Link} from 'react-router-dom'
import MenuData from '../../config/menu.config'


//左侧导航的组件
import './style.less'

const { SubMenu } = Menu;

export default class LeftNav extends React.Component{
    //map方法的使用
    // getMenuDom = (menuData)=>{
    //     return menuData.map(item => {
    //         if(!item.children){
    //             return(
    //                 <Menu.Item key={item.key} icon={item.icon}>
    //                     <Link to={item.key}>
    //                             <span>
    //                                 {item.title}
    //                             </span>
    //                     </Link>
    //                 </Menu.Item>
    //             )
    //         }else{
    //             return(
    //                 <SubMenu key={item.key} icon={item.icon} title={item.title}>
    //                     {this.getMenuDom(item.children)}
    //                 </SubMenu>

    //             )
    //         }
    //     })
    // }
    //reduce方法的使用
    getMenuDom = (menuData)=>{
        return menuData.reduce((pre,item) => {//pre是上一次返回的结果，item是当前走到的数据
            if(!item.children){
                  pre.push((<Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>
                                <span>
                                    {item.title}
                                </span>
                        </Link>
                    </Menu.Item>))
            }else{
                pre.push((
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {this.getMenuDom(item.children)}
                    </SubMenu>
                ))
            }
            return pre
        },[])//[]是最终返回的值，初始值应该是空数组
    }
    render(){
        return(
            <div className='left-nav'>
                <div className='left-nav-header'>
                    <img src={logo} alt='' className='logo'/>
                    {this.props.collapsed ?  null : <span>react项目</span>}
                </div>
                <div className='left-menu'>
                    <Menu
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        theme="dark"
                    >
                        {this.getMenuDom(MenuData)}
                    </Menu>
                </div>
            </div>
        )
    }
}