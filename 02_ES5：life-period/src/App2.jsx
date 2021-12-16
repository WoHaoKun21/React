import React from "react";

// 这个组件是静态组件：
// 没有this；
// 没有state；
// 没有生命周期方法
const App2 = (props) => {
    console.log("组件渲染")
    return (
        <div>
            <h3>App2组件</h3>
            <ul>
                <li>姓名：{props.name}</li>
                <li>年龄：{props.age}</li>
                <li>性别：{props.gender}</li>
            </ul>
        </div>
    )
};
export default App2;