
export const movieData = (movieId, setDetails) => {
    const options={
     method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M5MzBkOWVlMjFkYTk0ZjhmYzMyNTdkMzg3ZWNlZCIsInN1YiI6IjY1ZTlhZDJhNmEyMjI3MDE4Njk2NTExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1C6buHnPvlB2eInbvledvTmiFFIKSym7oMjouLo9AE'
  }
  }
    fetch(`https://api.themoviedb.org/3/movie/${movieId}language=en-US`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let moiveGenres = data.genres.map((gen, index)=>{return(
                    <p key={index} >{gen.name}</p>
            )})
            const movieDetails = (
                <div>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt=''></img>
                    </div>
                    <div>
                        <p>{data.title}</p>
                        <p>User Score: {data.vote_average}</p>
                        <p>Overview</p>
                        <p>{data.overview}</p>
                        <p>Genres</p>
                        <div>{moiveGenres}</div>
                    </div>
                </div>
            );
            setDetails(movieDetails);
        })
           
        }
