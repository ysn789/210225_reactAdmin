import React from 'react'
import './style.less'
//头部的组件
export default class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                <div className='header-content'>
                    头部内容
                </div>
            </div>
        )
    }
}