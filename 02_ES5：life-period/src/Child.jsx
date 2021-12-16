import React from "react";
const Child = React.createClass({
    propTypes:{
        // 规定this.props.z给的属性必须是number类型，还必须给出
        z:React.PropTypes.number.isRequired// 要求给的数据类型必须是number类型
    },
    getDefaultProps:function(){
        alert("Child getDefaultProps 1");
        return {
            x:100
        }
    },
    getInitialState:function(){
        alert("Child getInitialState 2");
        return {
            y:200
        }
    },
    componentWillMount:function(){
        alert("Child componentWillMount 3");
    },
    render:function(){
        alert("Child render 4/8");
        return (
            <div>
                <h3>Child组件</h3>
                <p>Child this.props：{this.props.x}</p>
                <p>Child this.state：{this.state.y}</p>
                <p>父组件传递过来的this.props：{this.props.z}</p>
            </div>
        );
    },
    componentDidMount:function(){
        alert("Child componentDidMount 5");
    },
    componentWillReceiveProps:function(nextProps){
        alert("Child componentWillReceiveProps 6");
    },
    shouldComponentUpdate:function(){
        alert("Child shouldComponentUpdate 7");
        return true;
    },
    componentWillUpdate:function(){
        alert("Child componentWillUpdate 8");
    }
});
export default Child;