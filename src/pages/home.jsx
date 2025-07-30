import React, { useEffect, useState, useCallback } from "react";
import Nav from "../components/nav";
import Search from "../components/search";
import axios from "axios";
import MovieCard from "../components/movieCard";

const Home = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async (searchQuery) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=536c8bf5&s=${searchQuery}`
      );
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
      setError("Failed to fetch movies. Please try again later.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, []);


  const handleSearch = () => {
    if (searchTerm.trim()) {
      fetchMovies(searchTerm);
    } else {
      setMovies([]); // Clear previous results if search term is empty
      setError("Please enter a movie title to search.");
    }
  };

  return (
    <>
      <Nav />
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
      <div className="movie-card_container">
        {/* Conditional rendering adjusted for initial empty state */}
        {loading && <p>Loading movies...</p>}
        {error && <p className="error-message">{error}</p>}

        {/* Display message when no search has been performed yet */}
        {!loading && !error && movies.length === 0 && !searchTerm.trim() && (
          <p>Start typing a movie title above to search!</p>
        )}

        {/* Display message when a search was performed but no results found */}
        {!loading && !error && movies.length === 0 && searchTerm.trim() && (
          <p>No movies found for "{searchTerm}".</p>
        )}

        {/* Display movie cards when there are results */}
        {!loading && !error && movies.length > 0 && (
          <div className="movie-list">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
