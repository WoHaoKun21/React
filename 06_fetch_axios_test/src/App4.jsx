import React, { Component } from "react";
export default class App4 extends Component {
    state = {
        msg: "",
        style: { display: "block" },
        color: { color: "#f00", fontSize: "12px" }
    }

    // 点击登录
    login = () => {
        let form = document.querySelector("form");
        fetch("/data", {
            method: "POST",
            body: new FormData(form),
        })
            .then(res => {
                return res.json();// json格式
            })
            .then(json => {
                if (json.status === "10001") {
                    this.setState({
                        msg: json.msg,
                        style: { display: "none" },
                        color: {}
                    })
                } else {
                    this.setState({
                        msg: json.msg
                    })
                    setTimeout(() => { this.setState({ msg: "" }) }, 2000)
                }
            })
    }

    render() {
        let { msg, style, color } = this.state;
        let { login } = this;
        return (
            <div>
                <h3>App4组件：post发送formData数据</h3>
                <form style={style}>
                    用户：<input type="text" name="userName" /><br />
                    密码：<input type="password" name="pwd" /><br />
                    <input type="button" onClick={login} value="登录" />
                </form>
                <div style={color}>{msg}</div>
            </div>
        );
    }
}