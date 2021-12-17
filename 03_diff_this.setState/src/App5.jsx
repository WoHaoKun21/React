// 计数器简化版和不简化版
import React, { Component } from "react";
// 一、计数器不简化版
// export default class App5 extends Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         }
//     }
//     // 书写的函数
//     handelAdd() {
//         let {count} = this.state;
//         this.setState({
//             count: count + 1
//         })
//     };
//     handelCut() {
//         let {count} = this.state;
//         this.setState({
//             count: count - 1
//         })
//     };
//     render() {
//         let { count } = this.state;
//         return (
//             <div>
//                 <h3>App5组件：不简化版计数器</h3>
//                 <p>计数器：{count}次</p>
//                 <button onClick={this.handelAdd.bind(this)}>点击计数器+1</button>
//                 <button onClick={this.handelCut.bind(this)}>点击计数器-1</button>
//             </div>
//         );
//     }
// }




// 二、简化版计数器
export default class App5 extends Component {
    state = {
        count: 0
    }

    // 加减函数
    handelAdd = () => {
        let { count } = this.state;
        this.setState({
            count: count + 1
        });
    }
    handelCut = () => {
        let { count } = this.state;
        this.setState({
            count: count - 1
        });
    }

    render() {
        let { count } = this.state;
        console.log("render");
        return (
            <div>
                <h3>App5组件，简化版计数器</h3>
                <p>计数器：{count}次</p>
                <button onClick={this.handelAdd}>点击+1</button>
                <button onClick={this.handelCut}>点击-1</button>
            </div>
        );
    }
    componentDidMount(){
        // console.log("挂载后的操作，count值：",this.state.count);// 第一个执行
        // this.setState({count:this.state.count+1});// 第四个执行
        // console.log("挂载后的操作，count值：",this.state.count);// 第二个执行
        // this.setState({count:this.state.count+1});// 第五个执行——它会把前面的“第四个执行”覆盖掉，解决：使用this.setState的回调函数
        // console.log("挂载后的操作，count值：",this.state.count);// 第三个执行

            // 解决多个this.setState被覆盖的问题：使用this.setState的回调函数
        console.log("挂载后的操作，count值：",this.state.count);// 第一个执行
        this.setState((prevState,props)=>({
            count:prevState.count+1
        }));// 第四个执行
        console.log("挂载后的操作，count值：",this.state.count);// 第二个执行
        this.setState((prevState,props)=>({
            count:prevState.count+1
        }));// 第五个执行——它会把前面的“第四个执行”覆盖掉，解决：使用this.setState的回调函数
        console.log("挂载后的操作，count值：",this.state.count);// 第三个执行
    }
}