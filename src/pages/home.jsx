import { useEffect, useState } from "react";
import { trending } from "hooks/trending";


export const Home = () => {
  
   const [movies, setMovies] = useState([])

    useEffect(() => {
      trending(setMovies)
  }, [])
  
  return (
    <div>{movies}</div>
  )
  }