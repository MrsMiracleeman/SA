import React, { Component } from "react";
import './gerente.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "../Components/navbar";
import HeaderGerente from "../Components/headerGerente/headerGerente";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Login from "./login";
import Cadastros from "./cadastros";


export default class Gerente extends Component{

  constructor(props){
    super(props)
    this.state = {
        active:false,
  
    }
    this.tog = this.tog.bind(this)
}

    tog(){
       if(this.state.active === false){
         this.state.active = true
         this.setState(this.state)
       }else{
         this.state.active = false
         this.setState(this.state)
       }
    }

  render(){
    return (   
        <section className="gerente">
            <Navbar status={this.state.active}/>
            <section className="m-0 p-0 container-fluid">
                <HeaderGerente tog ={e=> this.tog()}/>
                <main id="main-gerente">
                    
                </main>
            </section>
        </section>
    )
  }
}