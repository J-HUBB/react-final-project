import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { Title, Year, Poster, imdbID } = movie;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  return (
    <div
      className="movie"
      key={movie.imdbID}
      onClick={() => navigate(`${movie.imdbID}`)}>

        {loading ? (
            <>
              <div className="movie-card">
              <div className="movie-card_container">
                <h3>
              <div className="movie__title--skeleton"></div></h3>
              <div className="movie__year--skeleton"></div>
              <div className="movie__poster--skeleton" />
            </div>
            </div>
          </>
         ) : (
          <>
            <div className="movie-card">
            <div className="movie-card_container">
              <h3>{Title}</h3>
              <p>
                <b>Year:</b>
                {Year}
              </p>
              <img className="hp_movie-selected--img"
                src={
                  Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"
                }
                alt={Title}
              />
             </div>
            </div>
          </>
        )}
      </div>
  );
};

export default MovieCard;
