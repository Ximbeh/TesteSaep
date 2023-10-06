import './Headers.css'
import user from '../../assets/User.svg'

function Header (){

    return(
        <header className='headerHeader'>
            <div className='headerText'>
                <h2>Bem vindo Cairé Maia</h2>
                <p>Hoje é sexta-feira, Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

            <div className='user'>
                <img src={user} />
                <p>Cairé Maia</p>
            </div>
        </header>
    )

}

export default Header 