import React from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageBanner from '../../../components/PageBanner';
import PageDescription from '../../../components/PageDescription';
import PageElement from '../../../components/PageElement';
import MovieCard from '../../../components/MovieCard';
import { SITE_CONTENT } from '../../../helpers/content';
import { INFANTIL } from '../../../helpers/infantil';
import Accordion from '../../../components/Accordion';

export default function infantil() {
    return (
      <div className="h-screen w-full relative overflow-x-hidden bg-white">
      <Header />
      <div className="w-full">
        <PageBanner
          title={SITE_CONTENT.mostras[5].title}
          waveColor={SITE_CONTENT.mostras[5].color}
          textColor={"var(--color-main-txt)"} 
        />
        <PageDescription
          text={SITE_CONTENT.mostras[5].longDescription}
          color={SITE_CONTENT.mostras[5].color}
        />
        <div className="p-10 pt-0">
          {INFANTIL.map((session) => (
            <Accordion
              title={session.title}
              color={SITE_CONTENT.mostras[5].color}
              key={session.id}
            >
              <div className="flex flex-col gap-4">
                {session.movies.map((movie) => (
                  <MovieCard
                    key={movie.title}
                    movie={movie}
                    color={SITE_CONTENT.mostras[5].color}
                  />
                ))}
              </div>
            </Accordion>
          ))}
        </div>
          </div>
          <Footer />
        </div>
      );
}
