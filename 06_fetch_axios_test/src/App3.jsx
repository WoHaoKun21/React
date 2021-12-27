import React, { Component } from "react";
export default class App3 extends Component {
    state={
        msg:"",
        style:{display:"block"},
        tips:{
            color:"#f00",
            fontSize:"12px"
        }
    }
    // 点击进入登录页面
    login = ()=>{
        // 1、获取要发送的数据
        let userName = this.refs.userName.value.trim();
        let pwd = this.refs.pwd.value.trim();
        // 2、获取要发送的数据
        let params = new URLSearchParams();// URL查询编码
        params.append("userName",userName);
        params.append("pwd",pwd);
        console.log(params);
        // params:{userName:userName,pwd:pwd}
        fetch("/data",{
            method:"POST",
            body:params,
            headers:{"content-type":"application/x-www-form-urlencoded"}
        })
        .then(res=>{
            return res.json();
        })
        .then(json=>{
            console.log(json);
            if(json.status === "10001"){
                this.setState({
                    msg:json.msg,
                    style:{display:"none"},
                    tips:{}
                })
            }else{
                this.setState({
                    msg:json.msg,
                    style:{display:"block"}
                });
                setTimeout(()=>{
                    this.setState({msg:""});
                },3000);
            }
        });
    }
    // 获取焦点后清除提示
    handelFocus=()=>{
        this.setState({
            msg:""
        });
    }
    render() {
        let {msg,style,tips}=this.state;
        return (
            <div>
                <h3>App3组件：POST方法登录</h3>
                <div ref="tips" style={tips}>{msg}</div>
                <form style={style}>
                    用户：<input type="text" ref="userName" onFocus={this.handelFocus} /><br />
                    密码：<input type="password" ref="pwd" onFocus={this.handelFocus} /><br />
                    <input type="button" value="登录" onClick={this.login} />
                </form>
            </div>
        );
    }
}