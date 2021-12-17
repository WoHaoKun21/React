// 自动时间
import React, { Component } from "react";
export default class App4 extends Component {
    constructor() {
        super();
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    Timer() {
        let myDate = new Date();
        let hours = myDate.getHours();
        let minutes = myDate.getMinutes();
        let seconds = myDate.getSeconds();
        this.setState({
            hours: hours >= 10 ? hours : "0" + hours,
            minutes: minutes >= 10 ? minutes : "0" + minutes,
            seconds: seconds >= 10 ? seconds : "0" + seconds
        });
    }

    // 挂载
    render() {
        let { hours, minutes, seconds } = this.state;
        return (
            <div>
                <h3>App4组件</h3>
                <p>时间：{hours}:{minutes}:{seconds}</p>
            </div>
        );
    }
    // 挂载后
    componentDidMount(){
        this.Timer();
        setInterval(() => {
            this.Timer();
        }, 1000);
    }
}