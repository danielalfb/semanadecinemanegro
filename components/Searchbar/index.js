import React, { useMemo, useState } from "react";
import { ALL_MOVIES } from "../../helpers/allMovies";
import MovieCard from "../MovieCard";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { createPortal } from "react-dom";

function Searchbar({ isMobile }) {
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

  const inpuElement = useMemo(
    () => (
      <div
        className={`mr-4${
          input.length >= 3
            ? " z-20 absolute top-9 left-0 m-0 w-full transition-all px-9"
            : isMobile
            ? " w-full"
            : " w-28"
        }`}
      >
        <div className={`relative inline-flex items-center w-full`}>
          <input
            type='text'
            placeholder='Pesquisar'
            value={input}
            onChange={handleInputChange}
            className='searchbarInput w-full h-6 p-2 text-sm border-none rounded-full'
            style={{
              backgroundColor: "transparent",
              color: "var(--clr-blue-dark)",
              border: "1px solid var(--clr-blue-dark)",
            }}
          />
          <MagnifyingGlass
            className='absolute right-2'
            size={16}
            weight='bold'
            color='var(--clr-blue-dark)'
          />
        </div>
      </div>
    ),
    [input, isMobile]
  );

  const resultsElement = useMemo(() => {
    if (input.length >= 3) {
      return (
        <div
          className='absolute top-0 left-0 w-full p-9 pt-20'
          style={{
            backgroundColor: "var(--clr-white)",
            zIndex: 11,
            minHeight: "100vh",
          }}
        >
          {isMobile ? inpuElement : null}
          <div
            className={`h-fit grid gap-4 desktop:grid-cols-${columnsNumber} laptop:grid-cols-${columnsNumber} tablet:grid-cols-2 mob:grid-cols-1`}
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
      );
    }
  }, [columnsNumber, inpuElement, input.length, isMobile, searchResults]);

  return (
    <>
      {inpuElement}
      {createPortal(resultsElement, document.body)}
    </>
  );
}

export default Searchbar;
