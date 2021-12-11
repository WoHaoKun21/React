import React, { Component } from 'react';
import One from "./css/one.css";
// 默认输出：   创建App类，并且继承指定父元素的类“Component”
export default class App extends Component {
    render() {// 这里的render，是生命周期的方法
        let link = <a href="http://www.baidu.com">百度</a>;
        let name = "石鹏飞";
        let S1 = {
            color:"#f00",
            fontSize:"25px",
            textAlign:"center",
            border:"1px solid #090"
        }
        return (
            // jsx——>babel-loader——>虚拟DOM——>真实DOM
            <div className={One.specil}>
                <h1 align="center">App1组件</h1>
                { link },,,,,,,,,
                <h5>我的名字：{ name=="石鹏飞" ? "迪迦奥特曼":"石鹏飞" }</h5>
                <hr />
                <label htmlFor="userName">用户名</label>
                <input type="text" id='userName' defaultValue={ false }/>
                <p style={S1}>今天的努力会成就明天得自己</p>
                <p style={{fontSize:"30px",color:"#090",backgroundColor:"pink"}}>不能假装努力，因为你永远无法欺骗结果</p>
            </div>
        )
    }
}
