import React, { useEffect, useState } from "react";
import './buttonForm.css'

export default props=>{

    const [bar,setBar] = useState(false)

    useEffect(e=>{
        if(props.name === "Gerente"){
            setBar(true)
        }
    })

    function toggler(event){
        console.log("oi")
    }

    return(
        <button 
        id="button-form" className={bar ? "on" : "off"}
        type={props.type}
        onClick={e=> toggler}
        >{props.name}
            </button>
    )
}
