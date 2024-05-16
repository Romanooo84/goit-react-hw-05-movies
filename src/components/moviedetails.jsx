import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieData } from "hooks/moviedetails";
import { Link, Outlet } from "react-router-dom";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [details, setDetails] = useState()
    
    useEffect(() => {
            movieData(movieId, setDetails);
    }, [movieId]);

    return (
         <div>
            {details ? (
                <div>
                    {details}
                    <li id={movieId}>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li id={movieId}>
                        <Link to="reviews">Reviews</Link>
                    </li>
                    <Outlet />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
