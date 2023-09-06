import React, { useMemo, useState } from "react";
import { ALL_MOVIES } from "../../helpers/allMovies";
import MovieCard from "../MovieCard";

function Searchbar() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInput(value);

    if (value.length >= 3) {
      const filteredMovies = ALL_MOVIES.filter((movie) => {
        const { title, credits } = movie;
        const lowerCaseInput = value.toLowerCase();

        return (
          title.toLowerCase().includes(lowerCaseInput) ||
          credits.toLowerCase().includes(lowerCaseInput)
        );
      });
      setTimeout(() => {
        setSearchResults(filteredMovies);
      }, "500");
    } else {
      setSearchResults([]);
    }
  };

  const columnsNumber = useMemo(
    () => (searchResults.length <= 4 ? searchResults.length : "4"),
    [searchResults]
  );

  return (
    <>
      <div
        className={
          input.length >= 3
            ? "z-20 absolute top-9 left-0 w-full transition-all px-9"
            : ""
        }
      >
        <input
          type='text'
          placeholder='search'
          value={input}
          onChange={handleInputChange}
          className='w-full p-1 m-1 text-sm border-transparent rounded-sm focus:border-transparent border-2	'
          style={{
            backgroundColor: "transparent",
            color: "var(--clr-blue-dark)",
          }}
        />
      </div>
      {input.length >= 3 ? (
        <div
          className='absolute top-0 left-0 w-full p-9 pt-20'
          style={{
            backgroundColor: "var(--clr-white)",
            zIndex: 11,
            minHeight: "100vh",
          }}
        >
          <div
            className={`h-fit grid gap-4 desktop:grid-cols-${columnsNumber} laptop:grid-cols-3 tablet:grid-cols-2 mob:grid-cols-1`}
          >
            {searchResults.map((movie) => (
              <MovieCard
                key={movie.title}
                movie={movie}
                color='var(--clr-yellow-dark)'
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Searchbar;
