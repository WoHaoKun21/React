// 使用ES5的导出方式
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require("./webpack.config.base");
const { merge } = require('webpack-merge');
// webpack内置插件，对js进行压缩
const TerserPlugin = require("terser-webpack-plugin");
// 第三方包：对CSS进行压缩的
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = merge(base, {
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name]_[hash].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: false// 是否开启模块化
                    }
                }]
            },
            {
                test: /\.less$/,
                use: [{// 从下往上执行
                    loader: MiniCssExtractPlugin.loader// 最后将css插入到style标签里面去
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
                    loader: MiniCssExtractPlugin.loader// 最后将css插入到style标签里面去
                }, {
                    loader: "css-loader",// 允许import来进行载入，并将css文件合并成一个
                    options: {
                        modules: true// 是否开启模块化
                    }
                }, {
                    loader: "sass-loader"// 将.scss文件转换为css文件
                }]
            },
        ]
    },
    mode: "production",
    optimization:{// webpack配置项：文件压缩、优化
        minimize:true,// 使用TerserPlugin 压缩js，默认false
        minimizer:[// 自定义TerserPlugin压缩
            new TerserPlugin({
                cache:true,// 是否开启缓存、优化速度
                parallel:true// 是否开启多线程，利用多核CPU的优势来进行打包
            }),
            new OptimizeCSSAssetsPlugin()// CSS压缩
        ]
    }
});
