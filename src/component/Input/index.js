import React from "react";
import inputStyle from "./style/Input.module.css";


const Input = () => {
    return(
        <div className={inputStyle.container}>
            <input type="text" placeholder="Search Username"/>
            </div>
    )
}



export default Input;