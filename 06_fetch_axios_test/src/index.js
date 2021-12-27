import React from "react";
import ReactDOM from "react-dom";
import App from "./Axios7";
ReactDOM.render(// 调用App函数，这里的render：是把我们App渲染完生成的DOM对象innerHTML到我们的挂载点中
    // <App name="石鹏飞" />,// 渲染App组件，相当于new App()
    // 也可以写成：
    <App/>,
    document.getElementById("app")
    // 相当于：app.innerHTML = <div><h3>App组件</h3></div>
)