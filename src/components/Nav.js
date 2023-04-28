import {Link} from "react-router-dom";
import logo from "../images/logo.png";
import support from "../images/support.png";




export default function Nav () {
    return (
        <div className='nav-container'>
            {/* Logo image below */}
            <img src={logo} alt="logo" className="logo"/>
            <div className="nav">
            
            <Link to="/">Home</Link>

            <Link to="/searchpage">Destinations</Link>
                    
            <Link to="/reviews">Reviews</Link>
                    
            <Link to="/about">About</Link>
        
                   
            <Link to="mailto:company@example.com">
            <img src={support} alt="support logo" className="support"/>
            </Link>
            </div>
            </div>
            )
};