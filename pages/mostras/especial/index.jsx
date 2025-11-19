import React from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageBanner from '../../../components/PageBanner';
import PageDescription from '../../../components/PageDescription';
import PageElement from '../../../components/PageElement';
import MovieCard from '../../../components/MovieCard';
import { SITE_CONTENT } from '../../../helpers/content';
import { ESPECIAL } from '../../../helpers/especial';

export default function especial() {
    return (
        <div className="h-screen w-full relative overflow-x-hidden bg-white">
          <Header />
          <div className="w-full" >
              <PageBanner title="Sessão Especial: Vampiros à luz do meio-dia - O cinema de Luiz Lourenço"  
                textColor={"var(--color-main-txt)"} 
                fontSize={"1.75rem"}
                waveColor={SITE_CONTENT.mostras[6].color}
              />
              <PageDescription text={SITE_CONTENT.mostras[6].longDescription} color={SITE_CONTENT.mostras[6].color} />
              <div className='p-10 pt-0'>
                <MovieCard 
                  movie={ESPECIAL[0]} 
                  color={SITE_CONTENT.mostras[6].color} 
                  
                />
              </div>
              <div className='p-10 pt-0'>
                <MovieCard 
                  movie={ESPECIAL[1]} 
                  color={SITE_CONTENT.mostras[6].color} 
                />
              </div>
          </div>
          <Footer />
        </div>
      );
}
