import React, { useMemo, useState } from "react";
import { ALL_MOVIES } from "../../helpers/allMovies";
import MovieCard from "../MovieCard";
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
          credits?.toLowerCase().includes(lowerCaseInput)
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
        <div
          className={`relative inline-flex items-center ${isMobile ? "w-full" : "tablet:right-28"}`}
        >
          <input
            id="search"
            type="text"
            placeholder="Pesquisar"
            value={input}
            onChange={handleInputChange}
            className={`searchbarInput rounded-sm ${isMobile ? "searchbarInputMob w-full" : ""} h-6 p-2 text-sm`}
            style={{
              backgroundColor: "var(--color-main-txt)",
              color: "var(--color-cream)",
              borderRadius: "none",
            }}
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
          className="absolute top-0 left-0 w-full p-9 pt-20"
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
                color="var(--clr-yellow-dark)"
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
