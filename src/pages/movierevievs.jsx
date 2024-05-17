import { MovieRevievsData } from "hooks/movierevievshook"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const MovieReviews = () => {
    const { movieId } = useParams();
    const [revievs, setRevievs] = useState()

    useEffect(() => {
        MovieRevievsData (movieId, setRevievs);
}, [movieId]);
    return(
    <div>{revievs}</div>
    )
}