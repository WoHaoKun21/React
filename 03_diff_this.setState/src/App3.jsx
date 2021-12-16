import React from "react";
import ReactDOM from "react-dom";
import Child from "./Child";
const App = React.createClass({
    // 生命周期三个阶段
// 第一阶段：初始化阶段
    getDefaultProps: function () {
        alert("App getDefaultProps 1");
        // 1、初始化this.props默认值的
        return {// 相当于this.props = {title:"初始化this.props的默认值"}
            title: "初始化this.props的默认值"
        }
    },
    getInitialState: function () {
        alert("App getInitialState 2");
        // 2、初始化this.props
        return {// 相当于this.props = {title:"tom"}
            name: "tom"
        }
    },
    componentWillMount: function () {
        alert("App componentWillMount 3");
        // 3、挂在前进行的操作——后面就废弃了
    },
                // 自己创建的函数:修改this.state的值
    handleClick:function(){// 创建的函数
        // 修改this.state，只能通过异步方法this.setState()才可以
        this.setState({// 修改自身状态的默认值
            name:"jarry"
        })
    },
            // 自己创建的函数:删除目标元素里面的内容
    handleClick2:function(){
        ReactDOM.unmountComponentAtNode(document.getElementById("app"))
    },
    render: function () {
        alert("App render 4/8");
        // 4、挂载内容：快速创建虚拟DOM
        return (
            // 将：jsx——>虚拟DOM——>render调用完毕——>返回真实DOM
            <div>
                <h3>App4组件</h3>
                <p id="p1">添加了id的p标记</p>
                <p>this.props：{this.props.title}</p>
                <p>this.state：{this.state.name}</p>
                {
                    console.dir(document.getElementById("p1"))// 这里打印的是null
                }
                <button onClick={this.handleClick}>点击改变this.state值</button>
                <hr />
                <Child z={this.state.name}/>
                <hr />
                <button onClick={this.handleClick2}>卸载App组件</button>
            </div>
        );
    },
    componentDidMount:function(){
        alert("App componentDidMount 5");
        // 5、初始化阶段完成：可以在这里调用真实DOM，也可以在这里进行ajax请求
        // return {}
        console.dir(document.getElementById("p1"));// 返回的是DOM对象，可以用来进行DOM操作和ajax操作
    },
// 第二阶段：更新阶段
    componentWillReceiveProps:function(nextProps){
        // 6、将要接受新的props
        alert("App componentWillReceiveProps 6");
        alert(nextProps);
    },
    shouldComponentUpdate:function(x,y){// 覆盖了父类的同名方法，用来进行组件优化
        // 传入的两个参数分别是，nextProps和nextState
        console.log(x,y);
        alert("App shouldComponentUpdate 7");
        // 7、判断是否进入更新阶段
        // 比较算法判断，如果nextProps和this.props不同，返回true，相同返回false
        // 比较算法判断，如果nextState和this.states不同，返回true，相同返回false
            // if(nextProps === x){
            //     return false;
            // }
            return false;
    },
    componentWillUpdate:function(){
        alert("App componentWillUpdate 8");
        // 8、将要进行更新
    },
    componentDidUpdate:function(){
        alert("App componentDidUpdate 9");
        // 9、更新完成
    },
// 第三阶段：卸载阶段
    componentWillUnmount:function(){
        alert("App componentWillUnmount 10");
        // 10、将要卸载的组件
    }
});
export default App;