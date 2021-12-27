import React, { Component } from "react";
import axios from "axios";
import "./mock/data3";
import "./css/style";
export default class Axios6 extends Component {
    state = {
        data: [],
        loading: true
    }
    render() {
        let { data, loading } = this.state;
        let style = loading?"loading":"";
        return (
            <div>
                <h3>Axios6组件：发送urlencoded数据，获取json数据</h3>
                <h4>获取到的数据：</h4>
                <ul className={style}>
                    {
                        data.map(value => {
                            return (
                                <li key={value.id}>
                                    学号：{value.id}
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
    componentDidMount(){
        let params = new URLSearchParams();
        params.append("name","赵子龙");
        params.append("age",42);
        // axios({
        //     url:"data3.php",
        //     method:"POST",
        //     data:params
        // })
        axios.post("data3.php",params)// 等价于上面的写法
        .then(res =>{
            this.setState({
                data:res.data.data,
                loading:false
            })
        })
    }
}