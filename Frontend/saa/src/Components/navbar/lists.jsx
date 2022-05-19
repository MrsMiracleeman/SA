import React, { useEffect, useState } from "react";
import './lists.css'

export default props=>{


    const [bar,setBar] = useState(false)



    if(props.active === true){
        return(
            <li className='lists' onClick={e=> setBar(bar ? false : true)}>
                <div className='list-box'>
                    <div className={props.status ? 'list-box11' : 'list-box1'}>
                        <i className={`fa fa-${props.icon} fa`} />
                    </div>
                    <div className={props.status ? 'list-box22' : "list-box2"}>
                        <h6>{props.name}</h6>
                    </div>
                </div>
                <div className={bar ? 'lists-on' : "lists-off"}>
                    <li>
                        <a href={`/gerente/cadastro-${props.name}`}>Cadastro de {props.name}</a> 
                    </li>
                    <li>
                        <a href='/'>Consulta de {props.name}</a>
                    </li>
                </div>
            </li>
        )
    }else{
        return(
            <li className="lists">
                <div className='list-box'>
                    <div className={props.status ? 'list-box11' : 'list-box1'}>
                        <i className={`fa fa-${props.icon} fa`} />
                    </div>
                    <div className={props.status ? 'list-box22' : "list-box2"}>
                        <h6>{props.name}</h6>
                    </div>
                </div>
            </li>
        )
    }
}