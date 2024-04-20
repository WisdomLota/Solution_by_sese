import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/nav.css';

const Navbar = () => {
    return ( 
        <>
        <div class="wholeNav">
        <nav class="navBar">
            <div class="navBar-container">
                <div class="logo">
                    <img src={logo} alt="AKH-logo" />
                </div>
                <div class="links">
                    <Link to='/'>HOME</Link>
                    <Link to='/explore'>EXPLORE</Link>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/contact'>CONTACT</Link>
                </div>
                <div class="navbtns">
                    <button class="btn-sign-up">SIGN UP</button>
                    <button class="btn-log-in">LOG IN</button>
                </div>
            </div>
        </nav>
        </div>
        </>
     );
}
 
export default Navbar;