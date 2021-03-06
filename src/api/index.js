//包含应用中所有接口请求函数的模块
//每个函数的返回值都是promise
import request from './ajax'
// export function Login(data){
//    return request({
//        url:'',
//        data:{},
//        method:'POST'
//    })
// }
//admin 123456
const baseUrl = ''
export const Login = (data)=> request({
    url:baseUrl+'/auth/login',
    data:data,
    method:'POST'
})