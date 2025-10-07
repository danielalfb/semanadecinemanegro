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
          <div className="w-full mt-[46px] desktop:mt-[117px] tablet-[117px] ">
              <PageBanner title="Sessão de Abertura"  
                textColor={"var(--color-main-txt)"} 
                fontSize={"1.75rem"}
                waveColor={SITE_CONTENT.mostras[0].color}
              />
              <PageDescription text={SITE_CONTENT.mostras[0].longDescription} color={SITE_CONTENT.mostras[0].color} />
              <div className='p-10 pt-0'>
                <MovieCard 
                  movie={ABERTURA[0]} 
                  color={SITE_CONTENT.mostras[0].color}          
                />
              </div>
          </div>
          <Footer />
        </div>
      );
}
