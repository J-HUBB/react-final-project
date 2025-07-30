import React, { useState } from "react";
import Nav from "../components/nav";
import { useParams } from "react-router-dom";

const Summary = () => {
    const { imdbID } = useParams();
    console.log(imdbID);
  return (
    <>
       <Nav />
       <div id="movies__body">
      <main id="movies__body">
        <div className="movies__container">
          <div className="row">
            <div className="movie__selected--top">
                <h2 className="movie__selected--title--top">Movies</h2>
            </div>
            <div className="movie__selected">
              <figure className="movie__selected--figure">
                <img src={`$`} alt="" className="movie__selected--img" />
              </figure>
              <div className="movie__selected--description">
                <h2 className="movie__selected--title">{`$`}</h2>
                <div className="movie__selected--price">
                </div>
                <div className="movie__plot">
                  <h3 className="movie__plot--title">Plot</h3>
                  <p className="movie__plot--para">{`$`}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae fuga ipsum culpa, aliquid cumque in assumenda
                    ratione numquam? Nesciunt nemo adipisci eius iure ratione
                    architecto voluptate corporis excepturi cumque
                    necessitatibus.
                  </p>
                  <p className="movie__plot--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae fuga ipsum culpa, aliquid cumque in assumenda
                    ratione numquam? Nesciunt nemo adipisci eius iure ratione
                    architecto voluptate corporis excepturi cumque
                    necessitatibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="movies__container">
          <div className="row">
            <div className="movie__selected--top">
              <h2 className="movie__selected--title--top">Recommended Movies</h2>
            </div>
            <div className="movies">
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}

export default Summary;
