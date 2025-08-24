import React from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageBanner from '../../../components/PageBanner';
import PageDescription from '../../../components/PageDescription';
import PageElement from '../../../components/PageElement';
import MovieCard from '../../../components/MovieCard';
import { SITE_CONTENT } from '../../../helpers/content';
import { ABERTURA } from '../../../helpers/abertura';

export default function abertura() {
    return (
        <div className="h-screen w-full relative overflow-x-hidden bg-white">
          <Header />
          <div className="w-full mt-[62px] desktop:mt-[120px] tablet-[120px] ">
            <PageElement 
              element={<img src="/images/elemento_amarelo.png" style={{ height: "320px", width: "auto"}}/>} 
              position={{ right: "-150px", top: "50px"}}  
            />
            <PageBanner title={SITE_CONTENT.mostras[0].title} color={"var(--color-green)"} />
            <PageDescription text={SITE_CONTENT.mostras[0].longDescription} color={"var(--color-green)"} />
            <div className='p-10 pt-0'>

            <MovieCard movie={ABERTURA[0]} color={"var(--color-green)"} />
            </div>
          </div>
          <Footer />
        </div>
      );
}
