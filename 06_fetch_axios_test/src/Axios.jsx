import React, { Component } from "react";
import axios from "axios";
import "./mock/data"
export default class Axios extends Component {
    state = {
        datas: [],
    }
    // 点击获取数据
    getData = () => {// 也可以在componentDidMount里面自动进行获取
        let {datas} = this.state;
        axios("data.php")
        .then(res=>{
            datas=res.data.data
            this.setState({datas});
        })
    }

    render() {
        let { datas } = this.state;
        return (
            <div>
                <h3>Axios组件：axios不带参数请求mockjs的json数据</h3>
                <button onClick={this.getData}>点击获取学生数据</button>
                <ul>
                    获得到的json数据进行遍历：
                    {
                        datas.map(value => {
                            return (
                                <li key={value.id}>
                                    编号：{value.id}
                                    姓名：{value.name}
                                    年龄：{value.age}
                                    性别：{value.sex}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
    // componentDidMount(){
    //     axios("data.php")
    //     .then(res=>{
    //         let datas = res.data.data;
    //         this.setState({datas});
    //     })
    // }
}