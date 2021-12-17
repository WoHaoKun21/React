import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import Child from "./Child";
// 继承父类Component的属性和方法：三个属性和八个方法
export default class App2 extends PureComponent {
    constructor() {// 通过constructor来继承父类的属性
        super();
        this.state = {// 相当于this.st
            name: "tom"
        }
        // this.onButton = this.onButton.bind(this);// 改变创建“onButton”函数的this指向为当前触发事件的DOM
    };
    // 初始化阶段：3个方法
        // 1、挂载前
    UNSAFE_componentWillMount() {// 从react@16以后这个方法ES6使用前需要加“UNSAFE_”
        alert("App2 UNSAFE_componentWillMount 1");
    }
    // 自己写的函数
    onButton=()=>{// ES5写法不行会报错，使用ES6写法的箭头函数，自带bind(this)
        this.setState({
            name:"迪迦"
        })
    }
    unLoad(){
        // alert("   ")
        ReactDOM.unmountComponentAtNode(document.getElementById("app"))
    }
        // 2、挂载
    render() {// 原型上的方法重名的话，后面的方法会覆盖继承过来的
        alert("App2 render 2");
        let { name } = this.state;
        let { title } = this.props;
        return (
            <div>
                <h3>App2组件</h3>
                <p>默认添加的this.state.name的值：{name}</p>
                <p>默认添加的this.props.title的值：{title}</p>
                <button onClick={this.onButton}>点击改变state的值</button>
                <hr />
                <Child name={name}/>
                <hr />
                <button onClick={this.unLoad}>卸载指定组件</button>
            </div>
        );
    };
        // 3、挂载后
    componentDidMount(){// 可用来操纵真实DOM、请求ajax、canvas绘图
        alert("App2 componentDidMount 3");
    }
    // 第二阶段：更新阶段
        // 4、是否进入更新阶段
    // shouldComponentUpdate(nextProps,nextState){
    //     alert("App2 shouldComponentUpdate 4");
    //     // console.log("nextprops",nextprops);
    //     console.log("nextState",nextState);
    //     // if(this.props != nextProps){
    //     //     return false;
    //     // }
    //     return true;// 不管this.state和thi.props是否改变都会进入更新，并再次调用render
    // }
        // 5、将要更新
    UNSAFE_componentWillUpdate(){
        alert("App2 UNSAFE_componentWillUpdate 5");
    }
        // 6、更新后
    componentDidUpdate(){
        alert("App2 componentDidUpdate 6");
    }
}
// 给App2类组件添加props属性
App2.defaultProps = {// 给App2组件设定this.props的初始值，相当于getDefaultProps方法
    title: "添加的类属性"// 默认值，如果有传来的值，会被覆盖：<App title="值" />
}