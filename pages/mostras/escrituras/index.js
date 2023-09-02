import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import yourData from "../../../data/content.json";
import Accordion from "../../../components/Accordion";
import MoviesGroup from "../../../components/MoviesGroup";
import {
  CAMINHOS_QUE_TRILHAMOS,
  CHAVAO_ABRE_PORTAS,
  NAO_ADIANTA_TER_RESPOSTA,
  O_CHAO_O_TETO,
  QUANDO_O_CORPO,
  RACISMOS_INTIMOS,
} from "./Helpers/Constants";
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
          color='var(--clr-green-dark)'
        >
          <MoviesGroup isBox>
            {QUANDO_O_CORPO.map((movie) => (
              <MovieCard
                isBox
                key={movie.title}
                movie={movie}
                color='var(--clr-green-dark)'
              />
            ))}
          </MoviesGroup>
        </Accordion>
        <Accordion
          title='NÃO ADIANTA TER RESPOSTA SE VOCÊ NÃO TEM O TEMPO'
          color='var(--clr-green-dark)'
        >
          <MoviesGroup isBox>
            {NAO_ADIANTA_TER_RESPOSTA.map((movie) => (
              <MovieCard
                isBox
                key={movie.title}
                movie={movie}
                color='var(--clr-green-dark)'
              />
            ))}
          </MoviesGroup>
        </Accordion>
        <Accordion
          title='O CHÃO, O TETO E SEU CONTORNO'
          color='var(--clr-green-dark)'
        >
          <MoviesGroup isBox>
            {O_CHAO_O_TETO.map((movie) => (
              <MovieCard
                isBox
                key={movie.title}
                movie={movie}
                color='var(--clr-green-dark)'
              />
            ))}
          </MoviesGroup>
        </Accordion>
        <Accordion title='CHAVÃO ABRE PORTAS' color='var(--clr-green-dark)'>
          <MoviesGroup isBox>
            {CHAVAO_ABRE_PORTAS.map((movie) => (
              <MovieCard
                isBox
                key={movie.title}
                movie={movie}
                color='var(--clr-green-dark)'
              />
            ))}
          </MoviesGroup>
        </Accordion>
        <Accordion title='RACISMO ÍNTIMOS' color='var(--clr-green-dark)'>
          <MoviesGroup isBox>
            {RACISMOS_INTIMOS.map((movie) => (
              <MovieCard
                isBox
                key={movie.title}
                movie={movie}
                color='var(--clr-green-dark)'
              />
            ))}
          </MoviesGroup>
        </Accordion>
        <Accordion title='CAMINHOS QUE TRILHAMOS' color='var(--clr-green-dark)'>
          <MoviesGroup isBox>
            {CAMINHOS_QUE_TRILHAMOS.map((movie) => (
              <MovieCard
                isBox
                key={movie.title}
                movie={movie}
                color='var(--clr-green-dark)'
              />
            ))}
          </MoviesGroup>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}
