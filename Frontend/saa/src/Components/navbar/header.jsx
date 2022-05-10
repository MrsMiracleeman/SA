import React from "react";
import logo from '../../image/logoJ.png'
import './headerNav.css'


export default props =>{

    if(props.status === true){
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