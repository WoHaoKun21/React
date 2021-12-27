import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Course from "../Component/Course";
import Home from "../Component/Home";
import News from "../Component/News";
const BaseRouter = () => {
    return (
        // 创建路由表：
        <Router>
            <div>
                {/* // 添加一条路由 */}
                <Route path='/' exact component={Home}/>
                {/*①path：对应的是地址栏里面的地址；②component：对应地址加载的组件，都是子组件；③exact：表示精确匹配 */}
                {/* // 添加一条路由 */}
                <Route path='/news/' strict component={News}/>
                {/* // 添加一条路由 */}
                <Route path='/course' component={Course}/>
                {/* 内联的写法： */}
                <Route path="/play" render={(props)=>{
                    console.log("Play props：",props);
                    return(
                        <div>
                            <h3>Play组件：使用的render的内联方式写的</h3>
                        </div>
                    );
                }} />
            </div>
        </Router>
    );
}
export default BaseRouter;