import React from "react";

const App = React.createClass({
    getInitialState:function(){
        return {
            hours:0,
            minutes:0,
            seconds:0
        }
    },
    showTime:function(){
        let myDate = new Date();
        let hours = myDate.getHours();
        let minutes = myDate.getMinutes();
        let seconds = myDate.getSeconds();
        this.setState({
            hours:hours<10?"0"+hours:hours,
            // 也可以
            minutes:minutes<10?"0"+minutes:minutes,
            seconds:seconds<10?"0"+seconds:seconds
        });
    },
    render:function(){
        console.log("render 调用")
        // 将初始化后的数据解构赋值
        let {hours,minutes,seconds} = this.state;
        return(
            <div>
                <h3>App7组件</h3>
                <p>获取当前时间：</p>
                <span>当前时间：{hours}:{minutes}:{seconds}</span><br />
                {/* <button onClick={this.showTime}>点击获取当前时间</button> */}
            </div>
        );
    },
    componentDidMount:function(){
        // 这里是挂载后的操作！！！！
        this.showTime();
        setInterval(()=>{// 箭头函数自带bind(this)
            this.showTime();
        },1000);

        // // 使用匿名函数：会报错，因为this会默认指向wendow——修改：
        // setInterval(function(){
        //     this.showTime();
        // }.bind(this)// 改变this指向就可以使用匿名函数
        // ,1000);
    }
});
export default App;