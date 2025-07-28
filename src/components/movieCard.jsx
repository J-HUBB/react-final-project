import React from "react";

const MovieCard = ({ movie: {Title, Year, Poster}}) => {
  return (
    `<div className="movie-card">
    
     <div className="movie-card__container">
    
     <h3>{movie.Title}</h3>
    
     <p><b>Year:</b>{movie.Year}</p>
    
     <img src="{movie.Poster}" alt="{movie.Title}" />
    
     </div>
    
     </div>`
  );
}

export default MovieCard;
