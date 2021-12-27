import Mock from 'mockjs'
// 设置4秒后再响应
Mock.setup({ timeout: 4000 });  
// Mock响应模板
Mock.mock('data2.php', function (options) {
    return Mock.mock({
        "data|1-6": [{   // 随机生成1到6个数组元素
            'id|+1': 88,    // 属性值自动加 1，初始值为88
            'pcodName|1':["笔记本","手机","台式电脑","电脑桌"],
            'price|1':[3000,4000,8000,500]
        }]
    });
});