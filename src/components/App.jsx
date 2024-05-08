import { Routes, Route, Link } from "react-router-dom";
import { Trending } from "../pages/trending";
import { Home } from "pages/home";



export const App = () => {


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M5MzBkOWVlMjFkYTk0ZjhmYzMyNTdkMzg3ZWNlZCIsInN1YiI6IjY1ZTlhZDJhNmEyMjI3MDE4Njk2NTExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1C6buHnPvlB2eInbvledvTmiFFIKSym7oMjouLo9AE'
  }
};
  
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/trending">Trending</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trending" element={<Trending options={options} />} />
      </Routes>
    </div>
  );
};
