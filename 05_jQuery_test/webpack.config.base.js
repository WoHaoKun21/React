// 使用ES5的导出方式
const path = require("path");
// 引入html-webpack-plugin插件
const htmlWebpackPlugin = require("html-webpack-plugin");// html文件生成模块
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackBar = require("webpackbar");// 引入进度条显示
// const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    // 入口文件
    entry: {
        index: "./src/index.js",// 在当前项目中让polyfill生效
    },
    // 打包目录及文件
    output: {// 输出打包文件位置，及文件名
        // path打包目录
        path: path.resolve(__dirname, "dist"),// 相当于：F:\web前端三层练习\webpack4\demo3\dist
        // 打包文件——最后要生成的文件名
        // filename: "[name]_[hash].main.js"// [hash]:代表随机的字符串——不管几个文件，他的hash值都一样
        filename: "js/[name]_[chunkhash].main.js"// [chunkhash]：不同的入口，会生成不同的hash值
        // filename: "[name]_[contenthash].main.js"// [contenthash]：文件内容不变，contenthash的值不变，文件内容发生改变，contenthash的值就会发生改变
    },
    plugins: [
        new htmlWebpackPlugin({// 使用引入的模块new一个对象——目的：在dist目录下创建html文件
            title: "首页",// 文档的title标题会被“首页替换”
            filename: "index.html",// 拷贝到dist目录下的名字
            template: "./public/index.html",// 源文件
            chunks: ["index"]// 需要引入的入口模块，就是当前页面的entry下的名字,如果不写的话，会默认一次全部加载
        }),
        new CleanWebpackPlugin(),
        new WebpackBar(),// 进度条显示
        // new CopyPlugin([{
        //     from: __dirname + '/src/json',
        //     to: __dirname + '/dist/json'
        // }])
    ],
    module: {
        rules: [
            {
                // 正则表达式.test()，匹配返回true，不匹配返回false
                test: /\.jsx?$/,// babel-loader处理的文件扩展名
                exclude: /(node_modules|bower_components)/,// 忽略目录
                use: {// 转换规则
                    loader: "babel-loader",// loader名称
                    // options: {// 语法库  ES6语法库           react语法库
                    //     presets: ["@babel/preset-env", "@babel/preset-react"]
                    // }
                }
            },
            {
                test: /\.(png|jpe?g|gif)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {// url-loader里面的选项
                            limit: 8192,// 8字节以下的图片进行打包，再插入到js/css中——限制
                            publicPath: "./../img",// 我们最终引用的文件路径
                            outputPath: "img/"// 将图片输出到什么文件下
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,// 要检测的对象
                loader: "file-loader",// 使用file-loader来进行操作
                options: {// 选项
                    name: "[name].[ext]",// 不更改文件名
                    publicPath: "./../fonts",// 文件引用的路径
                    outputPath: "fonts/"// 将服务器端字体放在指定文件下面
                }
            }
        ]
    },
    resolve: {
        // 扩展名，可以省略的扩展名
        extensions: ['.js', '.jsx', '.less', '.scss', '.css']
    }
}
