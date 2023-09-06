import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Accordion from "../../../components/Accordion";
import MoviesGroup from "../../../components/MoviesGroup";
import * as C from "../../../helpers/cinemasAfricanos";
// import * as D from "../../../helpers/descricaoMostra"
import MovieCard from "../../../components/MovieCard";
import Shape from "../../../components/Shape";

export default function cinemasAfricanos() {
  return (
    <div className='h-screen w-full relative overflow-x-hidden'>
      <Shape />
      <Shape isYellow />
      <Header />
      <div className='mt-36 p-10 w-full laptop:mt-30'>
        <h1 className='mb-6'>CINEMAS AFRICANOS</h1>
        <Accordion
          title='CINEMAS AFRICANOS CONTAM SUAS HISTÓRIAS'
          description=''
          color='var(--clr-blue-dark)'
        >
          <MoviesGroup isBox>
            {C.CINEMAS_AFRICANOS_CONTAM.map((movie) => (
              <MovieCard
                isBox
                key={movie.title}
                movie={movie}
                color='var(--clr-blue-dark)'
              />
            ))}
          </MoviesGroup>
        </Accordion>
        <Accordion
          title='OS CINEMAS DO CARIBE HOJE'
          description=''
          color='var(--clr-blue-dark)'
        >
          <MoviesGroup isBox>
            {C.CINEMAS_CARIBE_HOJE.map((movie) => (
              <MovieCard
                isBox
                key={movie.title}
                movie={movie}
                color='var(--clr-blue-dark)'
              />
            ))}
          </MoviesGroup>
        </Accordion>
        <Accordion
          title='O CINEMA NEGRO E EXPERIMENTAL COM CRYSTAL Z CAMPBELL'
          description=''
          color='var(--clr-blue-dark)'
        >
          <MoviesGroup isBox>
            {C.CINEMA_NEGRO_EXPERIMENTAL.map((movie) => (
              <MovieCard
                isBox
                key={movie.title}
                movie={movie}
                color='var(--clr-blue-dark)'
              />
            ))}
          </MoviesGroup>
        </Accordion>
        <Accordion 
          title='50 ANOS DE TOUKI BOUKI, CELEBRANDO O CINEMA DE DJIRIL DIOP MAMBÉTY' 
          description=''
          color='var(--clr-blue-dark)'>
          <MoviesGroup isBox>
            {C.TOUKI_50_ANOS.map((movie) => (
              <MovieCard
                isBox
                key={movie.title}
                movie={movie}
                color='var(--clr-blue-dark)'
              />
            ))}
          </MoviesGroup>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}
