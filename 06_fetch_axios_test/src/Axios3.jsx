import axios from "axios";
import React, { Component } from "react";
import "./mock/data1";
export default class Axios2 extends Component {
    state = {
        datas: []
    }
    render() {
        let { datas } = this.state;
        return (
            <div>
                <h3>post方法带参数请求php接口</h3>
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
        axios.post("data1.php",{// 至于这个为是什么被拦截了，是因为post方法会将数据放到body中传给后台并不会改变拦截地址：“data1.php”
            name:"迪迦",
            age:16
        })
        .then(res=>{
            this.setState({datas:res.data.data});
        })
    }
}