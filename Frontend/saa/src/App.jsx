import React from "react";
import './app.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./Pages/login";
import Gerente from "./Pages/Gerente";
import { BrowserRouter } from "react-router-dom";
import Routes from '../src/Pages/Routes'


export default props=>{
    return(
        <BrowserRouter>
            <section className="app">
               <Routes />
            </section>
        </BrowserRouter>
    )
}