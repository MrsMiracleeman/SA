import './infos.css'
import avatar from '../../image/avatar.png'


export default props=>{

    return(
        <div className='infos'>
            <img src={avatar} />
            <h6>Rodrigo César</h6>
        </div>
    )
}