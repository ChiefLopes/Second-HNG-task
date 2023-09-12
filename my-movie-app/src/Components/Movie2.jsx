import React, { useState, useEffect } from "react";

const Movies = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=52fc64fc69ad74d43acbf242d5f72966"
    )
      .then((response) => response.json())
      .then((response) => setMovieList(response.results)); // Assuming the API response contains a 'results' array
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movieList);

  return (
    <div>
      {movieList.map((movie) => (
        <img
          key={movie.id}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Replace with the appropriate image URL property from the API response
          alt={movie.title}
        />
      ))}
    </div>
  );
};

export default Movies;
