/* eslint-disable react/no-children-prop */
import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Accordion from "../../../components/Accordion";
import MoviesGroup from "../../../components/MoviesGroup";
import * as M from "../../../helpers/escrituras";
import MovieCard from "../../../components/MovieCard";
import Shape from "../../../components/Shape";

export default function escrituras() {
  return (
    <div className='h-screen w-full relative overflow-x-hidden'>
      <Shape />
      <Shape isYellow />
      <Header />
      <div className='mt-36 p-10 w-full laptop:mt-30'>
        <h1 className='mb-6'>CINE-ESCRITURAS PRETAS</h1>
        <Accordion
          title='QUANDO O CORPO E A PAISAGEM SE FUNDEM'
          color='var(--clr-blue-dark)'
        >
          <MoviesGroup>
            {M.QUANDO_O_CORPO.map((movie) => (
              <MovieCard
                key={movie.title}
                movie={movie}
                color='var(--clr-blue-dark)'
              />
            ))}
          </MoviesGroup>
        </Accordion>
        <Accordion
          title='NÃO ADIANTA TER RESPOSTA SE VOCÊ NÃO TEM O TEMPO'
          color='var(--clr-blue-dark)'
        >
          <MoviesGroup>
            {M.NAO_ADIANTA_TER_RESPOSTA.map((movie) => (
              <MovieCard
                key={movie.title}
                movie={movie}
                color='var(--clr-blue-dark)'
              />
            ))}
          </MoviesGroup>
        </Accordion>
        <Accordion
          title='O CHÃO, O TETO E SEU CONTORNO'
          color='var(--clr-blue-dark)'
        >
          <MoviesGroup>
            {M.O_CHAO_O_TETO.map((movie) => (
              <MovieCard
                key={movie.title}
                movie={movie}
                color='var(--clr-blue-dark)'
              />
            ))}
          </MoviesGroup>
        </Accordion>
        <Accordion
          title='CHAVÃO ABRE PORTAS'
          color='var(--clr-blue-dark)'
        >
          <MoviesGroup>
            {M.CHAVAO_ABRE_PORTAS.map((movie) => (
              <MovieCard
                key={movie.title}
                movie={movie}
                color='var(--clr-blue-dark)'
              />
            ))}
          </MoviesGroup>
        </Accordion>
        <Accordion
          title='RACISMO ÍNTIMOS'
          color='var(--clr-blue-dark)'
        >
          <MoviesGroup>
            {M.RACISMOS_INTIMOS.map((movie) => (
              <MovieCard
                key={movie.title}
                movie={movie}
                color='var(--clr-blue-dark)'
              />
            ))}
          </MoviesGroup>
        </Accordion>
        <Accordion
          title='CAMINHOS QUE TRILHAMOS'
          color='var(--clr-blue-dark)'
        >
          <MoviesGroup>
            {M.CAMINHOS_QUE_TRILHAMOS.map((movie) => (
              <MovieCard
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
