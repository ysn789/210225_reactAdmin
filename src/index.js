//入口js文件
import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import memoryUtils from './utils/memoryUtils'
import localData from './utils/localStorage'
memoryUtils.user = localData.getUser('user')
//读取local中保存的user，保存到内存中
//将app组件标签渲染到index页面的div上
ReactDOM.render(<App />,document.getElementById('root'))