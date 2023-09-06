import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import MoviesGroup from "../../../components/MoviesGroup";
import * as C from "../../../helpers/djibril";
import MovieCard from "../../../components/MovieCard";
import Shape from "../../../components/Shape";

export default function djibril() {
  return (
    <div className='h-screen w-full relative overflow-x-hidden'>
      <Shape />
      <Shape isYellow />
      <Header />
      <div className='mt-36 p-10 w-full laptop:mt-30'>
        <h1 className='mb-6'>
          50 ANOS DE TOUKI BOUKI, CELEBRANDO O CINEMA DE DJIBRIL DIOP MAMBÉTY
        </h1>
        <MoviesGroup>
          {C.DJIBRIL.map((movie) => (
            <MovieCard
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
