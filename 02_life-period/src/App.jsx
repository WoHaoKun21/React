import React, { Component } from "react";

export default class App extends Component {
    render() {
        let obj = {
            status: "10001",
            msg: "OK",
            data: [
                { id: 1001, name: "迪迦", sex: "男", age: 21 },
                { id: 1002, name: "戴拿", sex: "男", age: 20 },
                { id: 1003, name: "盖亚", sex: "男", age: 23 },
                { id: 1004, name: "阿古茹", sex: "男", age: 25 }
            ]
        }
        return (
            <div>
                <h3>App3组件</h3>
                <ul>
                    {
                        obj.data.map((value) => {
                            return (
                                <li key={value.id}>
                                    学号：{value.id}-
                                    姓名：{value.name}-
                                    性别：{value.sex}-
                                    年龄：{value.age}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    };
}