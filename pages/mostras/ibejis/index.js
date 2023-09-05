import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Shape from "../../../components/Shape";
import MovieCard from "../../../components/MovieCard";
import MoviesGroup from "../../../components/MoviesGroup";
import { IBEJIS } from "../../../helpers/ibejis";

export default function ibejis() {
  return (
    <div className='h-screen w-full relative overflow-x-hidden'>
      <Shape />
      <Shape isYellow />
      <Header />
      <div className='mt-36 p-10 w-full laptop:mt-30'>
        <h1 className='mb-6'>IBEJIS (INFANTIL)</h1>
        <MoviesGroup isBox>
          {IBEJIS.map((movie) => (
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
