(function () {
    let $ = {};
    // addEvent事件：
    function addEvent(elem, eventType, func) {
        try {
            if (elem != null && typeof elem == "object") {// 如果检测到对象不为空，并且是对象则执行当前语句,则执行if语句，否则执行else语句
                if (window.addEventListener) {// 如果addEventListener在窗口能运行
                    elem.addEventListener(eventType, func);
                } else {
                    elem.attachEvent(eventType, func);
                }
            } else {
                // 如果对象为空，或者元素不是对象，则抛出一个错误
                throw new Error("传入的元素为空，或者不是对象");
            }
        } catch (e) {
            alert(e.message);
        }
    }


    // // ajax事件：
    // param = {
    //     url: "目标地址",
    //     type: "发送数据的方法",
    //     data: "要发送的数据",
    //     contentType: "数据编码",
    //     dataType: "接收的数据类型",
    //     success: function (data/*接收到的数据*/) { },// 成功后的回调函数
    //     error: function (message) { },// 失败后的回调函数
    //     completed: function () { }// ajax请求完成后的回调函数
    // }
    function ajax(param) {
        try {// 对传入的数据进行监控
            if (typeof param == "object" && param) {
                // 1、创建ajax对象
                let xmlHttp = new XMLHttpRequest();
                // 2、设置要发送的数据：data，不需要进行设置
                // 3、设置请求数据的方法和目标地址
                xmlHttp.open(param.type, param.url);
                // 错误后的回调函数
                xmlHttp.onerror = function (e) {
                    if (param.error && typeof param.error == "function") {
                        param.error(e);
                    }
                }
                // ajax请求完成后出发——Ajax排队
                xmlHttp.onloadend = function () {
                    if (param.completed && typeof param.completed == "function") {
                        param.completed();
                    }
                }
                // 4、设置发送数据的数据编码
                //  4.1：GET方法带参数——有数据才会设置
                if (param.type == "GET" && param.data) {
                    xmlHttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                }
                //  4.2:POST方法带参数——有两种情况：发送json数据和urlencoded数据
                switch (param.contentType) {// 检测数据编码
                    case "urlencoded":
                        xmlHttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                        break;
                    case "json":
                        xmlHttp.setRequestHeader("content-type", "application/json");
                        break;
                }
                // 5、监控ajax请求过程
                xmlHttp.onreadystatechange = function () {
                    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                        let data = null;// 创建一个变量用来接收数据
                        switch (param.dataType) {// 根据数据类型，对获得的数据进行转换成js对象
                            case "html":
                                data = xmlHttp.responseText;
                                break;
                            case "xml":
                                data = xmlHttp.responseXML;
                                break;
                            case "json"://如果是json数据学要进行转码成js对象
                                try {
                                    data = JSON.parse(xmlHttp.responseText);
                                } catch (e) {
                                    alert("json格式不正确");
                                }
                                break;
                            default:
                                data = xmlHttp.responseText;
                        }
                        param.success(data);// 将获取到的数据“data”传入success成功后的回调函数里面
                    }
                }
                // 6、发送请求——有两种：post发送数据和get发送数据
                if (param.type == "POST" && param.data) {// 如果发送的请求为post方法，并且有数据
                    xmlHttp.send(param.data);// 将用户传来的数据放在里面进行发送
                } else {// 否则就是get方法
                    xmlHttp.send();// get方法发送数据不需要将数据发到里面
                }

            } else {
                alert("传入的数据不是对象，或者为空");
            }
        } catch (error) {
            alert(error.message);
        }
    }
    $.ajax = ajax;
    $.addEvent = addEvent;
    window.$ = $;
})()