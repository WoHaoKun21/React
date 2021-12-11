// 使用ES5的导出方式
const path = require("path");
const base = require("./webpack.config.base");
const { merge } = require('webpack-merge');
// merge({entry:{},output:{},{module:{}}})
module.exports = merge(base, {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true// 是否开启模块化
                    }
                }]
            },
            {
                test: /\.less$/,
                use: [{// 从下往上执行
                    loader: "style-loader"// 最后将css插入到style标签里面去
                }, {
                    loader: "css-loader",// 允许import来进行载入，并将css文件合并成一个
                    options: {
                        modules: true// 是否开启模块化
                    }
                }, {
                    loader: "less-loader"// 将less文件转换为css文件
                }]
            },
            {
                test: /\.scss$/,
                use: [{// 从下往上执行
                    loader: "style-loader"// 最后将css插入到style标签里面去
                }, {
                    loader: "css-loader",// 允许import来进行载入，并将css文件合并成一个
                    options: {
                        modules: true// 是否开启模块化
                    }
                }, {
                    loader: "sass-loader"// 将.scss文件转换为css文件
                }]
            }
        ]
    },
    mode: "development",
    devServer: {// webpack-dev-server配置项
        contentBase: path.join(__dirname, "dist"),// 指定webpack-dev-server网站根目录——等价于XAMPP的根目录(htdocs)
        compress: true,// 是否进行压缩所有来自项目路径下“dist/”目录的文件
        port: 9000,// 指定端口，默认是8080，为了防止和其他服务器端口冲突——改为900
        proxy: {// 代理
            "/data": {// 请求地址——接口文档上的真实接口地址
                "target": "http://www.bjlink32.com/data.php",// 开发测试服务器的接口地址
                "changeOrigin": true,// 是否开启跨域
                "pathRewrite": { "^/data": "" }//重写，如果接口文档没有写“/”的话，那么这里就进行重写
            }
        },
        overlay:{
            warnings:true,
            errors:true
        }
    },
    // 支持热重载
    devtool:"source-map"    // 用来开发调试——不用的时候关闭，因为体积太大
});
