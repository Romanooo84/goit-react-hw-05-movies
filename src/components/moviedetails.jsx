import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieData } from "hooks/moviedetails";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [details, setDetails] = useState()
    
    useEffect(() => {
        movieData(movieId, setDetails)
    }, []);

    return (
         <div>
            {details ? (
                <div>
                    <h2>{details.title}</h2>
                    <p>{details.overview}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
