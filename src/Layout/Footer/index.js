import React from "react";
import footStyle from "./style/Footer.module.css";


const Footer = () => {
    return(
        <div className={footStyle.background}>
        <div className={footStyle.details}>
            <h3>Created by Lharna</h3>
        </div>
    </div>
    )
}


export default Footer;