import React,{Component} from "react";
                        // extends Component 继承8个生命周期方法
export default class App extends Component{
    constructor(){
        super();// 继承三个属性：this.props、this.state、this.refs
        this.state={
            name:"tom"
        }
    };
    render(){// 创建的render方法覆盖了父类继承的方法——同名方法后面的会覆盖前面的
        let {name} = this.state;
        return(
            <div>
                <h3>App8组件</h3>
                <p>使用ES6显示从Component继承过来的名字：{name}</p>
            </div>
        );
    }
}