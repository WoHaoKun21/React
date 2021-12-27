// axios使用Promise的all方法发送多个请求
import React, { Component } from "react";
import axios from "axios";
import "./mock/data1";
import "./mock/data2";
import "./css/style";
export default class Axios5 extends Component {
    state = {
        data1: [],
        data2: [],
        loading1: true,
        loading2: true,
    }
    render() {
        let { data1, data2, loading1, loading2 } = this.state;
        let loadings1 = loading1?"loading":"";
        let loadings2 = loading2?"loading":"";
        return (
            <div>
                <h3>Axios5组件：使用Promise的all API发送多个请求</h3>
                人员信息：
                <ul key="1" className={loadings1}>
                    {
                        data1.map(data => {
                            return (
                                <li key={data.id}>
                                    学号：{data.id}
                                    &nbsp;&nbsp;姓名：{data.name}
                                    &nbsp;&nbsp;年龄：{data.age}
                                    &nbsp;&nbsp;性别：{data.sex}
                                </li>
                            );
                        })
                    }
                </ul>
                物品信息：
                <ul key="2" className={loadings2}>
                    {
                        data2.map(data => {
                            return (
                                <li key={data.id}>
                                    商品编号：{data.id}
                                    &nbsp;&nbsp;物品：{data.pcodName}
                                    &nbsp;&nbsp;价格：{data.price}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
    componentDidMount() {
        let obj = { name: "迪迦", age: 21 }
        axios.all([axios.post("data1.php", obj), axios.get("data2.php")])// 同时发送多个请求，可以用于页面初始化
            .then(axios.spread((data1, data2) => {
                this.setState({
                    data1: data1.data.data,
                    data2: data2.data.data,
                    loading1: false,
                    loading2: false
                })
            }))
    }
}