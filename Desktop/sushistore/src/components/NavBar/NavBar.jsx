import './NavBar.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


const Header = () => {

    return (
        <header className="header">
            <div className="header_container">
{                <img className='header_logo' src= {logo} alt="logo" />
}                <nav className='header_nav'>
                    <Link className="header_link" to="/" >Inicio</Link>
                    <Link className="header_link" to="/nosotros" >Nosotros</Link>
                    <Link className="header_link" to="/contacto" >Contacto</Link>
                </nav>
                    <CartWidget/>
            </div>
        </header>
    )
}

export default Header