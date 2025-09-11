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
          <div className="w-full mt-[46px] desktop:mt-[120px] tablet-[120px] ">
            <PageElement 
              element={<img src="/images/elemento_concha2.png" style={{ height: "250px", width: "auto"}}/>} 
              position={{ right: "-10px", top: "55px", transform: "rotate(-7deg)"}}  
            />
            <PageBanner title={SITE_CONTENT.mostras[6].title} color={SITE_CONTENT.mostras[6].color} />
              <PageDescription text={SITE_CONTENT.mostras[6].longDescription} color={SITE_CONTENT.mostras[6].color} />
            <div className='p-10 pt-0'>
            <MovieCard movie={ESPECIAL[0]} color={SITE_CONTENT.mostras[6].color} single />
            </div>
          </div>
          <Footer />
        </div>
      );
}
