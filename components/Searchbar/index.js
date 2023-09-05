import React, { useState } from "react";
import { ALL_MOVIES } from "../../helpers/allMovies";

function Searchbar() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    const searchInput = e.target.value;
    setSearchInput(searchInput);

    const filteredMovies = ALL_MOVIES.filter((movie) => {
      const { title, credits } = movie;
      const lowerCaseSearchInput = searchInput.toLowerCase();

      return (
        title.toLowerCase().includes(lowerCaseSearchInput) ||
        credits.toLowerCase().includes(lowerCaseSearchInput)
      );
    });

    setSearchResults(filteredMovies);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Search'
        value={searchInput}
        onChange={handleInputChange}
      />
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.title}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Searchbar;
