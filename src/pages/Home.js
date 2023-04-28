import {Link} from  'react-router-dom';
import HomeStyle from '../components/HomeStyle.css';

function Home () {
    return ( 
        <div className="home">
           <h1 data-text="ESCAPE">ESCAPE</h1>
      
           <Link to="./searchpage"><button className="home-btn">Start Here</button></Link>
        </div>
     );
}

export default Home;