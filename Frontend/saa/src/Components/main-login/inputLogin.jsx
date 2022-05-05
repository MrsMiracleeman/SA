import React from "react";
import './inputLogin.css'


export default props=>{

    return(
        <label id={"input-login"}>
            <i className={`fa fa-${props.icon} fa-lg`}></i>
            <input type={props.type} required placeholder={`Digite sua ${props.name}`} />
        </label>
    )
}