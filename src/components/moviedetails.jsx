import { useParams } from "react-router-dom";
import { movieData } from "hooks/moviedetails";

export const MovieDetails = () => {

    const { movieId } = useParams();
    movieData(movieId)
    return (
        <h2>{movieId}</h2>
    )
}
