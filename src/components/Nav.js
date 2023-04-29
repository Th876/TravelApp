import {Link} from "react-router-dom";
import justGotravelLogo from "../images/justGotravelLogo.png";
import support from "../images/support.png";




export default function Nav () {
    return (
        <div className='nav-container'>
            {/* Logo image below */}
            <img src={justGotravelLogo} alt="logo" className="logo"/>
            <div className="nav">
            
            <Link to="/">Home</Link>

            <Link to="/bucketlist">Bucket List Generator</Link>

            <Link to="/searchpage">Find Destination</Link>
                    
                    
            <Link to="/about">About</Link>
        
                   
            <Link to="mailto:company@example.com">
            <img src={support} alt="support logo" className="support"/>
            </Link>
            </div>
            </div>
            )
};