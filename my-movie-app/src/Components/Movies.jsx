import React from 'react'
import { useEffect, useState } from 'react';

const Movies = () => {
    
    const [MovieList, setMovieList] = useState([])
    
    const getMovies = () => {
      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=52fc64fc69ad74d43acbf242d5f72966"
      )
        .then((response) => response.json())
        .then((response) => setMovieList(response));
    };
    
    useEffect(() => {
       getMovies()
    }, [])
    
    console.log(MovieList);
    
  return (
    <div>
      {MovieList.map((movie) => (
        <img
          key={movie.id} // Don't forget to add a unique key when mapping through an array of elements
          src={movie.posterUrl} // Replace with the actual URL of the movie poster
          alt={movie.title} // Replace with the movie title or an appropriate alt text
        />
      ))}
    </div>
  );
}

export default Movies
