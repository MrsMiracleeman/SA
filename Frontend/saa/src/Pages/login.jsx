import React from "react";
import FooterLogin from "../Components/footer-login/footerLogin";
import HeaderLogin from "../Components/header-login/headerLogin";
import MainLogin from "../Components/main-login/mainLogin";
import './login.css'

export default props=>{

    return(
        <section id="login">
            <HeaderLogin />
            <MainLogin />
            <FooterLogin />
        </section>
    )
}