import two from "./two";
import "./css/one.css";
const { merge } = require("webpack-merge");// 加载合并模块
// import "@babel/polyfill";// 引入polyfill模块，用来支持ES5语法使用Promise对象API
let x = "学生详细信息："
console.log(`${x}姓名：${two.name} 性别：${two.sex} 年龄：${two.age}`);

// 箭头函数
const test = (num) => {
    return num + 105;
}
console.log(test(two.age));

// 需要专门的语法插件,才能转换为ES5才能让浏览器支持
// 添加装饰器语法——ES5没有，转换不成ES5，需要解决————>安装指定插件(@babel/plugin-proposal-decorators)
function testable(target) { // target是要装饰的类——下面调用的时候会变成MyTestableclass
    target.isTestable = true;// getMyTestableclass类添加属性isTestable，并把true赋值
    target.study = () => { console.log("添加的属性"); }
}
@testable // 调用testable函数
class MyTestableclass { }// 创建一个类，并传给函数的形参
console.log("装饰器语法：", MyTestableclass.isTestable);// 输出这个类的isTestable属性
MyTestableclass.study();

console.log("--------------------------promise");

// ES5中没有generator对象，generator函数转换完毕，runtime浏览器环境也不会支持——没有这个对应API
// 解决：polyfill 提供regenerator-runtime模块用于提供功能实现，自己封装了一个Promise、generator、await、async，用来模仿
const delay = new Promise(resolve => console.log("new Promise()"));
function* hellowWordGenerator() {
    yield "hello";
    yield "word";
    return "ending";
}
let hw = hellowWordGenerator();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log("----------------------------------------");
const base = { entry: "tom", output: "输出文件", plugin: "插件" };
const obj2 = { modules: "模块", sno: 10001 };
console.log(Object.assign(base, obj2));
console.log(merge(base, obj2));
