import './headerGerente.css'
import Infos from './infos'
import InputSer from './inputSer'

export default props=>{

 

    return(
        <header className="headerGerente">
            <div id='container-button'>
                <button onClick={e=> props.tog()}><i className='fa fa-arrow-circle-left fa-lg'> </i></button>
            </div>
            <aside>
                <InputSer />
            </aside>
            <div id='container-info'>
                <Infos />
            </div>
        </header>
    )
}