import React from "react";
const Button =(props)=>{
    let {name}=props;
    return(
        <div>
            {/* <input type="button" id="bt1" value={props.name} /> */}
            <button>{name}</button>
        </div>
    );
}
export default Button;