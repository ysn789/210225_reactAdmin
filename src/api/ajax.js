//能发送异步ajax请求的函数模块
//封装axios库
//函数的返回值是一个promise对象
//统一处理请求异常
import axios from 'axios'
import {message} from 'antd'
export default function ajax({url,data={},method='GET'}){
    return new Promise((resolve,reject)=>{
        //执行ajax
        //失败
        //成功
        let promise = ''
        if(method === 'GET'){//发get请求
            promise = axios.get(url,{
                params:data//指定请求参数，必须名为params
            })
        }else if(method === 'POST'){//发post请求
            promise =  axios.post(url,data)//请求参数名必须为data
        }
        promise.then(response =>{
            resolve(response.data)
        }).catch(err => {
            message.error('出错了',err.message)
            reject(err)
        })
    })

}