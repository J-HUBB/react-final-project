import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import Search from "../components/search";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieCard from "../components/movieCard";

const Home = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { Title, Year } = useParams();
  const [loading, setLoading] = useState();
  const [movies, setMovies] = useState([]);

  function onSearch(event) {
    fetchMovies(searchTerm);
    const query = event.target.value.trim()
}

async function fetchMovies(Title, Year, movie) {
    const {data} = await axios.get(
        `https://www.omdbapi.com/?apikey=536c8bf5&s=${Title, movie, Year}`
    );
    setMovies(data);
    setLoading(false);
    console.log(data);
  }

  useEffect(() => {
    fetchMovies(onSearch);
  }, [searchTerm]);

  return (
    <>
      <Nav />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div>
        {movies?.Search?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        ;
      </div>
    </>
  );
};

export default Home;
