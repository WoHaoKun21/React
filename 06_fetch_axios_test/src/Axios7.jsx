// 使用“axios-jsonp-pro”
import React, { Component } from 'react'
import axios from 'axios-jsonp-pro';
export default class Axios7 extends Component {
    state = {
        name: "",
        age: "",
        sex: ""
    }
    render() {
        let { name, age, sex } = this.state;
        return (
            <div>
                <h3>使用axios-jsonp-pro</h3>
                <p>姓名：{name}&nbsp;&nbsp;年龄：{age}&nbsp;&nbsp;性别：{sex}</p>
            </div>
        )
    }
    componentDidMount(){
        axios.jsonp("http://www.bjlink32.com/data10.php")
        .then(res=>{
            console.log(res);
            this.setState({
                name:res.name,
                age:res.age,
                sex:res.sex
            })
        })
    }
}
