//登陆的路由组件
import React,{Component} from 'react'
import   './style.less'
import logo from '../../assets/img/logo.png'
import {Form,Button,Input,message} from 'antd'
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import {Login} from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import localData from '../../utils/localStorage'
import {Redirect} from "react-router-dom";
export default class LoginDom extends Component{
   onFinish = async (values) => {//async写在距离await最近的函数的左侧
       // Login(values).then(response => {//promise写法
       //     console.log(response.data)
       // }).catch(err => {
       //
       // })
       //  console.log('Success:', values);
       // try{
       const response = await Login(values)//async 和await写法指的是请求有没有200
           console.log('请求成功',response)//不代表登陆成功或者失败//只有上面成功了才会执行这个语句
       if(response.success){//登陆成功
           message.success('成功')
           memoryUtils.user = response.data ? (response.data.user || {}) : {}
           localData.saveUser('user',response.data.user || {})
           //跳转页面
           this.props.history.replace('/admin')//用replace是为了不让其回退到login界面
       }else{//登陆失败
           message.error('失败,用户名或密码不正确')
       }
       // }
       // catch(error){
       //     console.log('请求失败',error)//说明请求接口直接报错，不是200，是404，401，500之类
       // }


    };
    onFinishFailed = ({values, errorFields, outOfDate})=>{
        console.log(values)
    }
    render(){
        const layout = {
            labelCol: { style:{width:'80px'} },
            wrapperCol: { style:{width:`calc(100%-80px)`} },
        };
        const user = memoryUtils.user
        if(user&&user.id){
            //自动跳转到登陆（在render中）中
            return <Redirect to='/admin'/>
        }
        return(
            <div className='login'>
                <div className='top'>
                    <img src={logo} className='logo' alt=''></img>
                    <span className='span'>react项目</span>
                </div>
                <div className='center'>
                    <div className='title'>
                        用户登陆
                    </div>
                    <div className='form'>
                        <Form {...layout} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                        <Form.Item
                            label='用户名'
                        name="loginId"
                        rules={[
                            {
                                required: true,
                                message: '请输入你的用户名!',
                            },
                        ]}
                        >
                            <Input prefix={<UserOutlined style={{color:"rgba(0,0,0,0.25)"}}/>}/>
                        </Form.Item>
                        <Form.Item
                            label='密码'
                        name="loginPwd"
                        rules={[
                            {
                                required: true,
                                message: '请输入你的密码!',
                            },
                        ]}
                        >
                            <Input.Password prefix={<LockOutlined style={{color:"rgba(0,0,0,0.25)"}}/>}/>
                        </Form.Item>
                        <Form.Item className='button'>
                        <Button type="primary" htmlType="submit">
                        登陆
                        </Button>
                        </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}