
// Mock响应模板
Mock.mock('check.php', 'post', function(options) {
	console.log("options请求信息",options);
    //options  请求的方法GET/POST 请求接口地址/拦截的地址 check.php 请求的数据
    var data=JSON.parse(options.body);
    console.log("data",data);
	var userName=data.userName;
	var pwd=data.pwd;
	if(userName=="tom" && pwd=="123"){
        return Mock.mock({"status":10001,"message":"登录成功"});
	}else{
		return Mock.mock({"status":30001,"message":"用户名或密码错误"});
		}
});