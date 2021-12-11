import React, { Component } from "react";// 应用react模块
import axios from "axios";// 映入axios对象
import style from './less/public';
import img1 from "./img/1.jpg";

// react类组件
export default class App extends Component {// 创建一个类，继承Component的属性和方法
    render() {// 创建一个函数，但是不调用
        return (// 函数内返回一个组件
            <div className={style.specil}>
                <h3 id={style.app}>App组件中的webpack-dev-server</h3>
                <img src={img1}/>
                <span className={style.one}>这里面是应用的字体样式</span>
            </div>
        )
    }
    componentDidMount() {// 这个函数会在render函数调用后，自动调用，因为它是生命周期方法
        // axios：可以看成封装好的axios，返回Promise对象——类似于ajax
        // 引入axios模块
        axios.get("/data.php")
        .then(res => {// res是响应对象
            console.log(res.data);// reg.data返回的是json转完的js对象
        })
    }
}