import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const HamNav = () => {
    return ( 
        <>
        <Link to='/'><img src={logo} alt="logo" /></Link>
        <Link to='/'>Home</Link>
        <Link to='/explore'>Explore</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Login</Link>
        </>
     );
}
 
export default HamNav;