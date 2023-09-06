import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import MoviesGroup from "../../../components/MoviesGroup";
import * as C from "../../../helpers/cinemasAfricanos";
import MovieCard from "../../../components/MovieCard";
import Shape from "../../../components/Shape";

export default function cinemasAfricanos() {
  return (
    <div className='h-screen w-full relative overflow-x-hidden'>
      <Shape />
      <Shape isYellow />
      <Header />
      <div className='mt-36 p-10 w-full laptop:mt-30'>
        <h1 className='mb-6'>OS CINEMAS AFRICANOS CONTAM SUAS HISTÓRIAS</h1>
          <MoviesGroup isBox>
            {C.CINEMAS_AFRICANOS.map((movie) => (
              <MovieCard
                isBox
                key={movie.title}
                movie={movie}
                color='var(--clr-blue-dark)'
              />
            ))}
          </MoviesGroup>
      </div>
      <Footer />
    </div>
  );
}
