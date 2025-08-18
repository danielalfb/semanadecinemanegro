import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Shape from "../../../components/Shape";
import * as P from "../../../helpers/politicas";
import MovieCard from "../../../components/MovieCard";
import MoviesGroup from "../../../components/MoviesGroup";

export default function politicas() {
  return (
    <div className='h-screen w-full relative overflow-x-hidden'>
      <Shape />
      <Shape isYellow />
      <Header />
      <div className='mt-36 p-10 w-full laptop:mt-30'>
        <h1 className='mb-6'>POLÍTICAS DO OLHAR</h1>
          {P.POLITICAS.map((movie) => (
            <MovieCard
              key={movie.title}
              movie={movie}
              color='var(--clr-blue-dark)'
            />
          ))}
      </div>
      <Footer />
    </div>
  );
}
