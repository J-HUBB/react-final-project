import React from "react";


const Search = ({ searchTerm, setSearchTerm, onSearch}) => {
    const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(); // Call the onSearch function passed from Home.jsx
    }
  };
    
     return (
    <div className="content-wrapper flex-col align-center">
      <h1>Browse Movies</h1>
      <div className="input-wrap">
        <input
          type="text"
          id="movie-search-input"
          placeholder="Search by Title or Year"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div
          className="search-wrapper flex justify-center align-center"
          onClick={onSearch}
        >
          <svg
            data-v-390ceb07=""
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-search fa-w-16"
          >
            <path
              data-v-390ceb07=""
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Search;
