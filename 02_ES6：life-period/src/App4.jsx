// 事件绑定事件
import React from "react";
// this.state发生改变
const App4 = React.createClass({// 调用React下的createClass创建App4组件
    // 继承了父类的三个属性和十个方法：
    // 父类：就是React
    getInitialState: function () {
        return {
            name: "石鹏飞"
        }
    },
    // 改变this.state的值
    change:function(){
        // 通过setState来进行改变
        this.setState({
            name:"迪迦"
        });
    },
    render:function(){
        return(
            <div>
                <h3>App4组件</h3>
                <p>this.state的名字：{this.state.name}</p>
                <p>传过来的this.props的名字：{this.props.title}</p>
                {/* 事件绑定：点击按钮改变this.state的值 */}
                <button onClick={this.change}>点击改变this.state值</button>
            </div>
        );
    }
});
export default App4;