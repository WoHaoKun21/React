import React from "react";
const App = React.createClass({
    getDefaultProps: function () {
        alert("App getDefaultProps 1");
        // 初始化this.props默认值的
        return {// 相当于this.props = {title:"初始化this.props的默认值"}
            title: "初始化this.props的默认值"
        }
    },
    getInitialState: function () {
        alert("App getInitialState 2");
        // 初始化this.props
        return {// 相当于this.props = {title:"tom"}
            name: "tom"
        }
    },
    componentWillMount: function () {
        alert("App componentWillMount 3");
        // 挂在前操作——后面就废弃了
    },
    handleClick:function(){
        // 修改this.state，只能通过异步方法this.setState()才可以
        this.setState({
            name:"jarry"
        })
    },
    render: function () {
        alert("App render 4/8");
        // 挂载内容：虚拟DOM
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
            </div>
        );
    },
    componentDidMount:function(){
        alert("App componentDidMount 5");
        // 初始化阶段完成——可以调用真实DOM
        // return {}
        console.dir(document.getElementById("p1"));// 返回的是DOM对象，可以用来进行DOM操作和ajax操作
    },
    shouldComponentUpdate:function(x,y){// 覆盖了父类的同名方法，用来进行组件优化
        // 传入的两个参数分别是，nextProps和nextState
        console.log(x,y);
        // 比较算法判断，如果nextProps和this.props不同，返回true，相同返回false
        // 比较算法判断，如果nextState和this.states不同，返回true，相同返回false
        if(this.props===x){
            return true;
        }else{
            return false;
        }
        // if(this.state===y){
        //     return false;
        // }else{
        //     return true;
        // }
    },
    componentWillUpdate:function(){
        alert("App componentWillUpdate 8");
    },
    componentDidUpdate:function(){
        alert("App componentDidUpdate 9");
    }
});
export default App;