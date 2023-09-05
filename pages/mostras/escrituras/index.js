/* eslint-disable react/no-children-prop */
import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import yourData from "../../../data/content.json";
import Accordion from "../../../components/Accordion";
import MoviesGroup from "../../../components/MoviesGroup";
import * as M from "../../../helpers/escrituras";
import * as D from "../../../helpers/descricaoMostra"
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
          description={D.DESCRIPTION_QUANDO_O_CORPO}
          color='var(--clr-blue-dark)'
        >
          <MoviesGroup isBox>
            {M.QUANDO_O_CORPO.map((movie) => (
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
          title='NÃO ADIANTA TER RESPOSTA SE VOCÊ NÃO TEM O TEMPO'
          description={D.DESCRIPTION_NAO_ADIANTA_TER_RESPOSTA}
          color='var(--clr-blue-dark)'
        >
          <MoviesGroup isBox>
            {M.NAO_ADIANTA_TER_RESPOSTA.map((movie) => (
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
          title='O CHÃO, O TETO E SEU CONTORNO'
          description={D.DESCRIPTION_CHAO_TETO_CONTORNO}
          color='var(--clr-blue-dark)'
        >
          <MoviesGroup isBox>
            {M.O_CHAO_O_TETO.map((movie) => (
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
          title='CHAVÃO ABRE PORTAS' 
          description={D.DESCRIPTION_CHAVAO_ABRE_PORTA}
          color='var(--clr-blue-dark)'>
          <MoviesGroup isBox>
            {M.CHAVAO_ABRE_PORTAS.map((movie) => (
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
          title='RACISMO ÍNTIMOS'
          description={D.DESCRIPTION_RACISMOS_INTIMOS}
          color='var(--clr-blue-dark)'>
          <MoviesGroup isBox>
            {M.RACISMOS_INTIMOS.map((movie) => (
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
          title='CAMINHOS QUE TRILHAMOS'
          description={D.DESCRIPTION_CAMINHOS_QUE_TRILHAMOS} 
          color='var(--clr-blue-dark)'>
          <MoviesGroup isBox>
            {M.CAMINHOS_QUE_TRILHAMOS.map((movie) => (
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
