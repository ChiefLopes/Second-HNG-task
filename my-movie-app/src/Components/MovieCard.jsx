import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div data-testid="movie-card" className="p-4 border rounded shadow-md">
      <img
        data-testid="movie-poster"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        className="mb-2"
      />
      <h2 data-testid="movie-title" className="text-xl font-semibold">
        {movie.title}
      </h2>
      <p data-testid="movie-release-date" className="text-gray-600">
        Release Date: {movie.releaseDate}
      </p>
    </div>
  );
};

export default MovieCard;
