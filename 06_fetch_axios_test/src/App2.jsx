import React, { Component } from "react";
export default class App2 extends Component {
    state = {
        json: []
    }
    render() {
        let { json } = this.state;
        return (
            <div>
                <h3>App2组件</h3>
                <ul>fetch通过静态组件获取到的json数据：
                    {json.map(value => {
                        return (
                            <li key={value.id}>
                                学号：{value.id}
                                &nbsp;&nbsp;姓名：{value.name}
                                &nbsp;&nbsp;年龄：{value.age}
                                &nbsp;&nbsp;性别：{value.sex}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
    componentDidMount() {
        fetch("./mock/data.json")
            .then(response => {
                console.log("response：", response);
                // 因为获得的是json数据所以需要返回json对象
                return response.json();// 返回的是一个promise对象
            })
            .then(json => {
                console.log(json);// 打印获取到的数据
                this.setState({ json: json.data })
            })
    }
}