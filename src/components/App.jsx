import { Routes, Route, Link } from "react-router-dom";
import { Movies } from "pages/movies";
import { Home } from "pages/home";
import { MovieDetails } from "../pages/moviedetails";
import { MovieCast } from "../pages/moviecast";
import { MovieReviews } from "../pages/movierevievs";


export const App = () => {

  
  return (
   <>
    <div>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path='/movies/:movieId' element={<MovieDetails />}>
            <Route path='/movies/:movieId/cast' element={<MovieCast />} />
            <Route path='/movies/:movieId/reviews' element={<MovieReviews />} /> 
          </Route>
          
        </Routes>
    </div>
    </> 
  );
};
