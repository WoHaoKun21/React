import React, { Component } from "react";
export default class Child extends Component {
    UNSAFE_componentWillMount() {
        alert("Child UNSAFE_componentWillMount 1");
    }
    render() {
        alert("Child render 2");
        let { name } = this.props;
        return (
            <div>
                <h3>Child组件</h3>
                <p>父组件接受的名字：{name}</p>
            </div>
        );
    };
    componentDidMount() {
        alert("Child componentDidMount 3");
    }
    //将要接受的props
    UNSAFE_componentWillReceiveProps(){
        alert("Child UNSAFE_componentWillReceiveProps 4");
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     alert("Child shouldComponentUpdate 5");
    //     console.log(nextProps);
    //     return true;
    // }
    UNSAFE_componentWillUpdate(){
        alert("Child UNSAFE_componentWillUpdate 6");
    }
    componentDidWillUnmount(){
        alert("Child componentDidWillUnmount 7");
    }
}