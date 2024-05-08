import { useEffect, useState } from "react";

export const Trending = ({ options }) => {

  const [pictures, setPictures]=useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        const markup = data.results.map(picture =>
          <div key={picture.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${picture.backdrop_path}`}></img>
          </div>
        )
        setPictures(markup)
      })
  
      .catch(err => console.error(err));
  },[options])


  

  return (
    <div>{pictures}</div>
  )
  }

