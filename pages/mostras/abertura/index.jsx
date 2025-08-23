import React from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageBanner from '../../../components/PageBanner';
import { SITE_CONTENT } from '../../../helpers/content';
import PageDescription from '../../../components/PageDescription';
import PageElement from '../../../components/PageElement';

export default function abertura() {
    return (
        <div className="h-screen w-full relative overflow-x-hidden bg-white">
          <Header />
          <div className="w-full mt-[62px] desktop:mt-[120px] tablet-[120px] ">
            <PageElement element={<img
          src="/images/elemento_amarelo.png"
        />} position={{ right: 0, top: 0}} size={{width: "50px", height: "auto"}} />
            <PageBanner title={SITE_CONTENT.mostras[0].title} color={"var(--color-green)"} />
            <PageDescription text={SITE_CONTENT.mostras[0].longDescription} color={"var(--color-green)"} />
          </div>
          <Footer />
        </div>
      );
}
