import React, { Component } from "react";
export default class App extends Component {
    state = {
        text: ""
    }
    render() {
        let { txt } = this.state;
        return (
            <div>
                <h3>App组件</h3>
                <p>fetch通过静态mock获取的数据：{txt}</p>
            </div>
        );
    }
    componentDidMount() {
        // fetch获取文本内容：
        fetch("../mock/data.html")
            .then(response => {// 获取指定数据
                console.log("1 text类型数据：", response);
                return response.text();// 返回的是文本类型
            })
            .then(txt => {
                console.log("1：", txt);
                this.setState({ txt })
            }).catch(error => { alert(error, message) });
    }
}