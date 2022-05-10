import React from "react";
import './app.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./Pages/login";
import Gerente from "./Pages/Gerente";

export default props=>{

    return(
        <section className="app">
            <Gerente />
        </section>
    )
}