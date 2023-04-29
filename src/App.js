import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import BucketListGenerator from './pages/BucketListGenerator';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/bucketlist" element={<BucketListGenerator/>}/>
          <Route path="/searchpage" element={<SearchPage />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <small className='footer'>Copyright ©2023, Designed by Tahaylia Higgins. All Rights Reserved</small>
    </div>
  );
}

export default App;
