import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContentMenu from "../../components/ContentMenu";



export default function atividadesFormativas() {
  return (
    <div className='h-screen w-full relative overflow-x-hidden'>
      <Header />
      <div className='mt-36 p-10 w-full laptop:mt-30'>
      <h1 className='mb-6'>ATIVIDADES FORMATIVAS</h1>
        <ContentMenu tipo='ATIVIDADES' />
      </div>
      <Footer />
    </div>
  );
}
