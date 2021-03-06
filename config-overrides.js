//babel打包配置文件，配置按需加载，按需打包，全局主题配置
const {override, fixBabelImports,addLessLoader}= require('customize-cra')

module.exports = override(//按需打包，按需加载
    //针对antd实现按需打包，根据import来打包（使用babel-plugin-import）
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        style:true,
        // style:'css'//自动打包相关的样式，比如引入了一个组件，那么就打包那个组件对应的样式
    }),
    //使用less-loader对源码中的less的变量进行重新指定
    addLessLoader({//全局主题配置
        javascriptEnabled: true,
        modifyVars:{'@primary-color':'#1DA57A'}//改了less文件里primary-color的值
        })
)