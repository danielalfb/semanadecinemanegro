import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Shape from "../../components/Shape";


export default function catalogo() {
  return (
    <div className='h-screen w-full relative overflow-x-hidden'>
      <Shape />
      <Shape isYellow />
      <Header />
      <div className='mt-36 p-10 w-full laptop:mt-30'>
        <h1 className='mb-6'>CATALÓGO</h1>
      </div>
      <Footer />
    </div>
  );
}
