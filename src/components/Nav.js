import {Link} from "react-router-dom";

export default function Nav (props) {
    return (
        <div className='nav'>
            {/* Logo image below */}
            {/* <img src={}/> */}
            <Link to="/">
                <div>Home</div>
                </Link>
                <Link to="/searchpage">
                    <div>Destinations</div></Link>
                    
                    <Link to="/reviews">
                        <div>Reviews</div>
                    </Link>
                    
                    <Link to="/about">
                        <div>
                        About
                        </div>
                        </Link>
                        
                        <Link to="mailto:company@example.com">
                            <div>Support</div>
                        </Link>
                        </div>)
};