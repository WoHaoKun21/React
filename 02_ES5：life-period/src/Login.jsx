import React from "react";
import User from "./User";
import Password from "./Password";
import Button from "./Button";
const Login = (props) => {
    return (
        <div>
            <User user="用户："/>{/* 相当于：User({user:"用户："}) */}
            <Password pwd="密码："/>{/* 相当于：Password({pwd:"密码："}) */}
            <Button name="登录"/>{/* 相当于：Button({name:"登录"}) */}
        </div>
    );
}
export default Login;