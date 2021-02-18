import React from "react";
import inputStyle from "./style/Input.module.css";


const Input = ({onchange}) => {
    return(
        <div className={inputStyle.container}>
            <input type="text" placeholder="Search Username" onChange={onchange}/>
            </div>
    )
}



export default Input;