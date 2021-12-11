                                // webpack.config.json默认配置文件的配置练习一、
// const path = require("path");
// // webpack.config.json配置项——使用ES5写法
// module.exports = {
//     entry:{},// 入口配置项
//     output:{},// 打包出口配置
//     plugins:[],//插件配置项
//     module:{
//         rules:[// loader配置项
//             {loader配置项},
//             {loader配置项}
//         ]
//     },
//     mode:"",// mode配置项，分别是：开发环境(development)和生产环境(Produce)
//     devServer:{}// 开发服务器配置项
// }


                                // webpack.config.json默认配置文件的配置项练习
const path = require("path");
module.exports = {
    entry:{},// 入口配置项
    output:{},// 打包出口配置项
    plugins:[],// 插件配置项
    rules:[ // loader配置项
        {loader配置项},
        {loader配置项}
    ],
    mode:"",// mode配置项，开发环境(development)和生产环境(Produce)
    devServer:{}// 开发服务器配置项
}

// 这里面练习的是webpack.config.json的配置文件的配置项——————使用ES来写：因为nodejs有的版本对ES6的支持也不好，所以决定用ES5
// module.exports：导出
// entry:入口配置项,程序的入口,通过那个文件进行打包
// output:出口文件,打包好的文件存储到那个文件夹下面
// plugins:插件,除了loader之外的功能都由plugins完成
// rules:loader配置项
// loader:加载器，转换器——less转换为css
// mode：模式：①：development、Produce、none三种情况
// devServer：将来开发测试服务器配置
