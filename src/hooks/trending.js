import { Link } from "react-router-dom";

export const trending = (setMovies) => {
    const options={
     method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M5MzBkOWVlMjFkYTk0ZjhmYzMyNTdkMzg3ZWNlZCIsInN1YiI6IjY1ZTlhZDJhNmEyMjI3MDE4Njk2NTExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1C6buHnPvlB2eInbvledvTmiFFIKSym7oMjouLo9AE'
  }
  }
  fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
  .then(response => response.json())
  .then(data => {
      console.log(data);
      const markup = data.results.map(movie => {
          console.log(movie.original_title);
          if ('original_title' in movie) {
              console.log('title');
              return (
                  <li key={movie.id} id={movie.id}>
                      <Link to={`${movie.id}`}>{movie.title}</Link>
                  </li>
              );
          } else if ('original_name' in movie) {
              return (
                  <li key={movie.id} id={movie.id}>
                      <Link to={`${movie.id}`}>{movie.name}</Link>
                  </li>
              );
          }
      });

      setMovies(markup);
  })
  .catch(err => console.error(err));
}