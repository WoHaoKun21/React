import { render } from "less";
import React from "react";
const App5 = React.createClass({
    getInitialState:function(){// 给一个state初始值
        return {
            name:"迪迦",
            txt:" ",
            pwd:" "
        }
    },
    // 自己创建的改变事件
    handleUse:function(e){
        console.log(e);
        this.setState({// 文本框里面的字符串赋值给this.state.txt
            // 问题：如何获取文本框中的字符串？
            // 首先获得文本框DOM对象
            txt:e.target.value
        });
    },
    // 自己创建的改变事件
    handlePwd:function(e){
        console.log(e)
        this.setState({// 文本框里面的字符串赋值给this.state.txt
            // 问题：如何获取文本框中的字符串？
            // 首先获得文本框DOM对象
            pwd:e.target.value
        });
    },
    render:function(){
        return(
            <div>
                <h3>App5组件</h3>
                <p>this.state.tx的值，用户：{this.state.txt}&lt;——为空</p>
                <p>this.state.tx的值，密码：{this.state.pwd}&lt;——为空</p>
                <p>this.state.name的值：{this.state.name}</p>
                用户：<input type="text" onChange={this.handleUse} /><br /> 
                密码：<input type="password" onChange={this.handlePwd} />
            </div>
        );
    }
});
export default App5;