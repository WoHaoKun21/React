import axios from "axios";
import React, { Component } from "react";
export default class App extends Component {
    render() {
        // 创建一个数组
        let arr = ["迪迦", "戴拿", "盖亚", "阿古茹"];
        return (
            // 这里面存放的是元素标记——只能有一个根目录
            <div>
                <div>App2组件</div>
                <span>jsx模板会将arr数组自动遍历：</span><br />
                自动遍历后的ul数组：
                <ul>
                    {
                        arr.map((value, index) => {
                            return (
                                <li key={index}>{value}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    };
    componentDidMount(){
        axios.get("/data.php")
        .then(res => {// res是响应对象
            console.log(res.data);// reg.data返回的是json转完的js对象
        })
    }
}