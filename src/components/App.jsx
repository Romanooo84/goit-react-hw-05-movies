import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Trending } from "../pages/trending";
import { Home } from "pages/home";



export const App = () => {

  const [pictures, setPictures] = useState([])
  
  let onClick = (to) => {
    console.log(to)
  }

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M5MzBkOWVlMjFkYTk0ZjhmYzMyNTdkMzg3ZWNlZCIsInN1YiI6IjY1ZTlhZDJhNmEyMjI3MDE4Njk2NTExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1C6buHnPvlB2eInbvledvTmiFFIKSym7oMjouLo9AE'
  }
  };
  
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        const markup = data.results.map(picture =>
          <div key={picture.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${picture.backdrop_path}`}></img>
          </div>
        )
        setPictures(markup)
      })
      .catch(err => console.error(err));
  },[])
  
  return (
    <div>
      <nav>
        <Link to="/" onClick={()=>onClick('/')}>Home</Link>
        <Link to="/trending"onClick={()=>onClick('trending')}>Trending</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trending" element={<Trending pictures={pictures} />} />
      </Routes>
    </div>
  );
};
