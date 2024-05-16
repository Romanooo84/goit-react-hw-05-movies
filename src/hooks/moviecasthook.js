
export const MovieCastData=(movieId, setCast)=>{
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M5MzBkOWVlMjFkYTk0ZjhmYzMyNTdkMzg3ZWNlZCIsInN1YiI6IjY1ZTlhZDJhNmEyMjI3MDE4Njk2NTExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1C6buHnPvlB2eInbvledvTmiFFIKSym7oMjouLo9AE'
  }
};

fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
  .then(response => response.json())
  .then(data => {
    console.log('działa');
    let markup = data.cast.map((cast, index) => (
      <div key={index}>
        <p>{cast.name}</p>
        <p>{cast.character}</p>
      </div>
    ));
      setCast(markup)
    })
  .catch(err => console.error(err));
    
}