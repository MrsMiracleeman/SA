import React from "react";
import logo from '../../image/pc.png'
import './headerNav.css'


export default props =>{

    if(props.status === false){
        return(
            <header className="navheader">
                <img src={logo} />
            </header>
        )
    }else{
    return(
        <header className="navheader">
            <h2>SAFV</h2>
        </header>
    )
    }
}