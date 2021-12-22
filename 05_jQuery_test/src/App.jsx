import React, { Component } from "react";
import $ from "jquery";
// // 加载mock数据
// import "./mock/data";
import "./css/style";
export default class App extends Component {
    state = {
        data: [],
        loading:false
    }
    render() {
        let { data, loading } = this.state;
        let className = loading?"loading":"";
        return (
            <div>
                <h3>App组件</h3>
                <button id="bt1">点击获取数据</button>
                <div>
                    <ul className={className}>
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
            this.setState({loading:true});
            $.ajax({
                url: "data.php",
                type: "GET",
                dataType: "json",
                success: (data) => {
                    this.setState({
                        data:data.data,
                        loading:false
                    })
                }
            })
        })
    }
}