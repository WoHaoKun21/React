import React, { Component } from "react";
import BaseRouter from "./routes/BaseRouter";
export default class App extends Component {
    render() {
        return (
            <div>
                <h3>App入口组件：路由表</h3>
                <hr />
                <BaseRouter />{/*跟路由组件：*/}
            </div>
        );
    }
}