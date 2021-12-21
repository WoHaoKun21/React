import React, { Component } from "react";
import $ from "jquery";
export default class App extends Component {
    state = {
        data: []
    }
    render() {
        let { data } = this.state;
        return (
            <div>
                <h3>App组件</h3>
                <button id="bt1">点击获取数据</button>
                <div>
                    <ul>
                        {
                            data.map(value => {
                                return (
                                    <li key={value.id}>
                                        学号：{value.id}
                                        &nbsp;&nbsp;&nbsp;&nbsp;姓名：{value.name}
                                        &nbsp;&nbsp;&nbsp;&nbsp;性别：{value.sex}
                                        &nbsp;&nbsp;&nbsp;&nbsp;年龄：{value.age}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
    componentDidMount() {
        $("#bt1").click(() => {
            $.ajax({
                url: "./json/data.json",
                type: "GET",
                dataType: "json",
                success: (data) => {
                    this.setState({
                        data:data.data
                    })
                }
            })
        })
    }
}