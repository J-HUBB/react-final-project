import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { Title, Year, Poster, imdbID } = movie;
  const navigate = useNavigate();

  return (
      <div className="movie" key={movie.imdbID} onClick={() => navigate(`${movie.imdbID}`)}>
      <div className="movie-card">
      <div className="movie-card_container">
        <h3>{Title}</h3>
        <p>
          <b>Year:</b>
          {Year}
        </p>{" "}
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />{" "}
      </div>
    </div>
    </div>
  );
};

export default MovieCard;
