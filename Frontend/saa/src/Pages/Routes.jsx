import React from "react";
import { Route, Routes } from "react-router";
import Gerente from "./Gerente";
import Login from "./login";



export default props=>{



    return(
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/gerente" element={<Gerente />} />
            <Route path={`/gerente/cadastro-veiculo`} element={<Gerente name="veiculo"/>} />
        </Routes>
    )
}