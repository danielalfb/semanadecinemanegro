import React from "react";
import ContentMenu from "../../components/ContentMenu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function mostras() {
  return (
    <div className='h-screen w-full relative overflow-x-hidden'>
      <Header />
      <div className='mt-36 p-10 w-full laptop:mt-30'>
        <h1 className='mb-6'>MOSTRAS</h1>
        <ContentMenu tipo='MOSTRAS' />
      </div>
      <Footer />
    </div>
  );
}
