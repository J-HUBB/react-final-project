import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Summary = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading();
    }, 1000);
  });

  //const recommended = movie.find((m) => +movie.imdbID === +imdbID);
  //console.log(recommended);

  async function getSummary() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=536c8bf5&i=${imdbID}`
    );
    setMovie(data);
  }

  useEffect(() => {
    getSummary();
  });

  return (
    <>
      <div id="movies__body">
        <main id="movies__body">
          <div className="movies__container">
            <div className="row">
              <div className="movie__selected--top">
                <Link to="/">
                  <button className="movie__selected--title--top">Back</button>
                </Link>
              </div>
              <div className="movie__selected">
                {loading ? (
                  <>
                    <div className="movie-card">
                      <figure className="movie__selected--figure">
                        <div className="movie__poster--skeleton" />
                      </figure>
                    </div>
                    <div className="movie__selected--description">
                     <h1><div className="movie__selected--title--skeleton"></div></h1>
                      <div className="movie__plot">
                        <h2 className="movie__plot--title">Synopsis</h2>
                        <p className="movie__plot--para--skeleton"></p>
                      </div>
                      <div className="actors--skeleton" />
                      <div className="rated--skeleton" />
                      <div className="rated--skeleton" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pic__box">
                      <img className="bg__image" src={movie.Poster} alt="" />
                    </div>
                    <div className="movie-card">
                      <figure className="movie__selected--figure">
                        <img
                          src={movie.Poster}
                          alt=""
                          className="movie__selected--img"
                        />
                      </figure>
                    </div>
                    <div className="movie__selected--description">
                      <h1 className="movie__selected--title">{movie.Title}</h1>
                      <div className="movie__plot">
                        <h2 className="movie__plot--title">Synopsis</h2>
                        <p className="movie__plot--para">{movie.Plot}</p>
                      </div>
                      <h4 className="actor">
                        <span className="actors">Starring:</span> {movie.Actors}
                      </h4>
                      <div className="rated">
                        <span className="rated-text">Rated:</span> {movie.Rated}
                        <br></br>
                        <span className="rated-text">Rating: </span>
                        {movie.imdbRating}
                      </div>
                      <div className="watch">
                        <button className="watch__btn">Watch Now</button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          {/*<div className="movies__container">
            <div className="row">
              <div className="movie__selected--top">
                <h2 className="movie__selected--title--top">
                  Recommended Movies
                </h2>
              </div>
              <div className="movies">
               { /*{recommended
                  .filter((m) => movie.Rating === 6 && +movie.imdbID !== +imdbID)
                  .slice(0, 4)
                  .map((m) => (
                    <MovieCard movie={movie} key={movie.imdbID} />
                  ))}
              </div>
            </div>
          </div>*/}
        </main>
      </div>
    </>
  );
};

export default Summary;
