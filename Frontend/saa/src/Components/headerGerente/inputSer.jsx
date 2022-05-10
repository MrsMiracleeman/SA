import { useState } from 'react'
import './inputSer.css'

export default props=>{

    const [focus,setFocus] = useState(false)

    return(
        <label className='inputSer' >
            <input type={"search"} />
            <i className='fa fa-search fa-lg' />
        </label>
    )
}