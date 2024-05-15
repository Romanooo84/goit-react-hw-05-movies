import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieData } from "hooks/moviedetails";

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
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
