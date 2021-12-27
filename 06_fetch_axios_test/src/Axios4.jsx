// 通过远程接口进行登录
import React, { Component } from "react";
import axios from "axios";
import "./css/public"
export default class Axios4 extends Component {
    state = {
        msg: "",
        style: { display: "block" },
        hide: { display: "none" }
    }

    // 点击登录事件
    login = () => {
        let userName = this.refs.userName.value;
        let pwd = this.refs.pwd.value;
        let obj = { userName: userName, pwd: pwd };
        console.log(userName, pwd);
        axios.post("/check", obj)
            .then(res => {
                if(res.data.status ==="10001"){
                    this.setState({
                        msg:res.data.msg,
                        style:{display:"none"},
                        hide:{display:"block"}
                    });
                }else{
                    this.setState({
                        msg:res.data.msg,
                    })
                    setTimeout(()=>{
                        this.setState({msg:""})
                    },2000);
                }
            })
    }

    render() {
        let { msg, style, hide } = this.state;
        let { login } = this;
        return (
            <div>
                <h3>Axios4组件：远程接口进行登录</h3>
                <form style={style}>
                    用户：<input type="text" ref="userName" /><br />
                    密码：<input type="password" ref="pwd" /><br />
                    <input type="button" value="登录" onClick={login} />
                    <span>{msg}</span>
                </form>
                <p style={hide}>登陆成功</p>
            </div>
        );
    }
}