import React from "react";
const User = (props) => {
    let {user}=props;
    return (
        <div>
            <label htmlFor="userName">{user}</label>
            <input type="text" id="userName" />
        </div>
    );
}
export default User;