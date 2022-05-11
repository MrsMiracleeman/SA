import React, { Component } from "react";
import '../../Pages/gerente.css'
import Header from "./header";
import './indexBar.css'
import Lists from "./lists";


export default function Navbar ({status}){

        return(
            <nav className={status ? "navigatoff" : "navigat"}>
                <Header status={status}/>
                <ul id="ul-list">
                    <Lists active={true} status={status} name={"Veículos"} icon={"truck"} />
                    <Lists active={true} status={status} name={"Usuários"} icon={"users"} />
                    <Lists active={true} status={status} name={"Motoristas"} icon={"car"} />
                    <Lists active={false} status={status} name={"Diários"} icon={"book"} />
                    <Lists active={false} status={status} name={"Relatórios"} icon={"database"} />
                </ul>
                <ul id="ul-exit">
                    <Lists active={false} status={status} name={"Logout"} icon={"times-circle"}/>
                </ul>
            </nav>
        )
    
}