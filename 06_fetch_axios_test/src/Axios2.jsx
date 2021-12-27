import axios from "axios";
import React, { Component } from "react";
import "./mock/data";
export default class Axios2 extends Component {
    state = {
        datas: []
    }
    render() {
        let { datas } = this.state;
        return (
            <div>
                <h3>get方法带参数请求php接口</h3>
                <ul>
                    {
                        datas.map(value => {
                            return (
                                <li key={value.id}>
                                    编号：{value.id}
                                    &nbsp;&nbsp;姓名：{value.name}
                                    &nbsp;&nbsp;年龄：{value.age}
                                    &nbsp;&nbsp;性别：{value.sex}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
    componentDidMount() {
        // 第一种写法：
        // axios("data.php?name=基德")
        //     .then(res => {
        //         this.setState({ datas: res.data.data });
        //     })

        // 第二种写法：
        axios("data.php", {// 因为添加了mockjs数据，按理说会被拦截，但是并没有拦截
            // 原因：因为拦截的只是“data.php”，但是因为附带数据的缘故会变为：“data.php?name=迪迦”，所以不被拦截
            params: { name: "迪迦" }
        })
            .then(res => {
                this.setState({ datas: res.data.data });
            })
    }
}