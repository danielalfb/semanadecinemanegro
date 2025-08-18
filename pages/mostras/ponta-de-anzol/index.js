import React from "react";
import ContentMenu from "../../../components/ContentMenu";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Shape from "../../../components/Shape";
import MovieCard from "../../../components/MovieCard";
import MoviesGroup from "../../../components/MoviesGroup";
import { PONTA_DE_ANZOL } from "../../../helpers/pontaDeAnzol";

export default function pontaDeAnzol() {
  return (
    <div className='h-screen w-full relative overflow-x-hidden'>
      <Shape />
      <Shape isYellow />
      <Header />
      <div className='mt-36 p-10 w-full laptop:mt-30'>
        <h1 className='mb-6'>PONTA DE ANZOL</h1>
        <MoviesGroup>
          {PONTA_DE_ANZOL.map((movie) => (
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
