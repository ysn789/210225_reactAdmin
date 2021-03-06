//应用的根组件
import React,{Component} from 'react'
// import {Button,message} from 'antd'//组件名首字母必须大写
import {BrowserRouter,Route,Switch} from 'react-router-dom'//路由组件
import Login from './pages/login'
import Admin from './pages/admin'

export default class App extends Component{
    render(){
        return(
                <BrowserRouter>
                    <Switch>
                        <Route path='/login' component={Login}>
                        </Route>
                        <Route path='/' component={Admin}>
                        </Route>
                    </Switch>
                </BrowserRouter>
        )
    }
}