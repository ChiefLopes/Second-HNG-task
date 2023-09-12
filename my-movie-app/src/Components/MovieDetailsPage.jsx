import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetailsPage = () => {
  const { id } = useParams(); // Get the movie ID from the URL

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Fetch movie details by ID using Axios or your preferred method
    // Example:
     axios
       .get(`https://image.tmdb.org/t/p/original${id}`)
       .then((response) => setMovieDetails(response.data))
       .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);
    
    

  if (!movieDetails) {
    return <div>Loading...</div>;
    
     
  }

  return (
    <div>
      <h1 data-testid="movie-title">{movieDetails.title}</h1>
      <p data-testid="movie-release-date">
        Release Date (in UTC): {movieDetails.releaseDate}
      </p>
      <p data-testid="movie-runtime">
        Runtime (in minutes): {movieDetails.runtime}
      </p>
      <p data-testid="movie-overview">{movieDetails.overview}</p>
    </div>
  );
};

export default MovieDetailsPage;
