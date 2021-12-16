// // 加载Dev配置 = dev专有配置 + base公共配置
// const dev = require("./webpack.config.dev");
// // 加载prod配置 = prod专有配置 + base公共配置
// const prod = require("./webpack.config.prod");
// process是nodejs内置对象——管理进程的对象
const Target = process.env.NODE_ENV;// 系统变量
// 运行npm run dev      Target的值就是"dev"
// 运行npm run build    Target的值就是"build"
if (Target === "dev") {
    // 导出dev配置
    module.exports = dev = require("./webpack.config.dev");
}
if (Target === "build") {
    // 导出prod配置
    module.exports = prod = require("./webpack.config.prod");
}