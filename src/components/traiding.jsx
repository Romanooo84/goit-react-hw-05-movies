export const Trading = ({ options }) => {


fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  
}