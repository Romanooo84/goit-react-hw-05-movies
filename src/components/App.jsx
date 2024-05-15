import { Routes, Route, Link} from "react-router-dom";
import { Home } from "pages/home";
import { MovieDetails } from "./moviedetails";


export const App = () => {

  
  return (
   <>
    <div>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
      </nav>
        <Routes>
          <Route path="/movies" element={<Home />}/>
          <Route path='/movies/:movieId' element={<MovieDetails />} />
      </Routes>
    </div>
    </> 
  );
};
