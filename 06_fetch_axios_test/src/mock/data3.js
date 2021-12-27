import { param } from 'jquery';
import Mock from 'mockjs'
// 设置4秒后再响应
Mock.setup({ timeout: "1000-4000" });
// Mock响应模板
Mock.mock('data3.php', 'post', function (options) {
    console.log(options.body);// 结果：'name=%E8%B5%B5%E5%AD%90%E9%BE%99&age=42'
    // 对面发送过来的是urlencoded数据所以接受的方法为：
    // // 方法一、是用split进行获取用户及年龄
    // let name = decodeURI(options.body.split("&")[0].split("=")[1]);// 获取的是用户名
    // let age = decodeURI(options.body.split("&")[1].split("=")[1]);// 获取的是年龄
    // 方法二、使用params，代替上面的写法
    let params = new URLSearchParams(options.body);
    let name = params.get("name");
    let age = params.get("age");
    console.log(params);
    return Mock.mock({
        "data|1-6": [{   // 随机生成1到6个数组元素
            'id|+1': 88,    // 属性值自动加 1，初始值为88
            'name|1': [name, 'tom', "jarry", "susan"],
            'age|1': [age, 19, 18, 17],   // 18至28以内随机整数, 0只是用来确定类型
            'sex|1': ['男', "女"]
        }]
    });
});