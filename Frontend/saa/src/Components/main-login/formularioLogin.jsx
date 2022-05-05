import React, { useState } from "react";
import ButtonForm from "./buttonForm";
import './formularioLogin.css'
import InputLogin from "./inputLogin";

export default props=>{

    const [status,setStatus] = useState("on")

    return(
        <form id="form-login">
            <div className="form-button-container">
                <ButtonForm name="Gerente" />
                <ButtonForm name="Usuário" />
            </div>
            <div className="form-info-container">
                <section>
                    <InputLogin icon="users" type={"text"} name="matrícula"/>
                    <InputLogin icon="lock" type="password" name="senha"/>
                </section>
                <footer>
                    <input type="submit" name="login"  value="Login"/>
                    <a href="/">Esqueceu a sua senha ?</a>
                </footer>
            </div>
        </form>
    )
}