import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import MovieCard from "../../../components/MovieCard";
import MoviesGroup from "../../../components/MoviesGroup";
import { HOMENAGEM } from "../../../helpers/homenagem";

export default function homenagem() {
  return (
    <div className='h-screen w-full'>
      <Header />
      <div className='mt-36 p-10 w-full laptop:mt-30'>
        <h1 className='mb-6'>HOMENAGEM - MARIA JOSÉ NOVAIS OLIVEIRA</h1>
        <MoviesGroup>
          {HOMENAGEM.map((movie) => (
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
