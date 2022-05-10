import React, { Component } from "react";
import '../../Pages/gerente.css'
import Header from "./header";
import './indexBar.css'


export default function Navbar ({status}){

        return(
            <nav className={status ? "navigatoff" : "navigat"}>
                <Header status={status}/>
            </nav>
        )
    
}