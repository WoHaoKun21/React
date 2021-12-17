import React, { Component } from "react";
export default class App3 extends Component {
    constructor() {
        super();
        this.state = {
            name: "迪迦",
            txt: ""
        }
    }
    // ES6生命周期方法
    // 第一阶段：初始化阶段：getDefaultProps和getInitialState两种方法取消了
    // 1、挂载前的操作：componentWillMount、在React@17.0版本以后使用的是UNSAFE_componentWillMount
    // 2、挂载：render
    handelClick() {
        this.setState({
            txt:this.refs.values.value
        })
    }
    render() {
        let { name, txt } = this.state;
        return (
            <div>
                <h3>App3组件</h3>
                <p>名字：{name}</p>
                <input type="text" ref="values" />
                <button onClick={this.handelClick.bind(this)}>点击获取文本框里面的内容</button>
                <p>文本框的内容：{txt}</p>
            </div>
        );
    }
    // 3、挂载后的操作：componentDidMount
    // 第二阶段：更新阶段：this.props/this.state更新
    // 4、props更新：componentWillReceiveProps 在React@17.0版本以后使用UNSAFE_componentWillReceiveProps
    // 之后在进入shouldComponentUpdate阶段
    // state更新直接进入shouldComponentUpdate阶段
    // 5、判断是否进入更新阶段：shouldComponentUpdate
    // 6、将要更新：componentWillUpdate     在React@17.0版本使用UNSAFE_componentWillUpdate
    // 7、更新后：componentDidUpdate
    // 8、卸载操作：componentWillUnmount

}