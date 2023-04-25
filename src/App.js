import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } 
from 'react-router-dom';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import Reviews from './pages/Reviews';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className='navbar'>
          <Link to="/">Home</Link>
          <Link to="/searchpage">Destinations</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/about">About</Link>
          <Link to="mailto:company@example.com">Support</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/searchpage" element={<SearchPage/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <div className='footer'>Footer</div>
      </Router>

    </div>
  );
}

export default App;
