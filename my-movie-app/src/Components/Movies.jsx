import React from "react";
import { useEffect, useState } from "react";

const Movies = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=52fc64fc69ad74d43acbf242d5f72966"
    )
      .then((response) => response.json())
      .then((response) => setMovieList(response.results));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const top10Movies = movieList.slice(0, 10);

//   console.log(movieList);

  return (
    <div className="movie-grid">
      {top10Movies.map((movie) => (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          key={movie.id}
        />
      ))}
    </div>
  );
};

export default Movies;
