import React from "react";
const App6 = React.createClass({
    getInitialState:function(){
        return {
            name:"迪迦",
            txt:""
        }
    },
    // 自己创建的函数
    all:function(){
        // 点击按钮获取文本框的数据
        // 如何点击按钮获取文本框DOM对象
        // react提供了一个属性：this.refs,存储所有ref属性值对应的DOM对象
        // this.refs {myInput:DOM对象}
        console.dir(this.refs.myInput);
        this.setState({
            txt:this.refs.myInput.value
        });
    },
    render:function(){
        return (
            <div>
                <h3>App6组件</h3>
                <input type="text" ref="myInput" />
                <button onClick={this.all}>点击获取文本框数据</button>
                <p>名字：{this.state.name}</p>
                <p>文本框的数据-简介：{this.state.txt}</p>
            </div>
        )
    }
});
export default App6;