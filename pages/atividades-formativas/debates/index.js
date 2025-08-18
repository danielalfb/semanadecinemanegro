import React from "react";
import ContentMenu from "../../../components/ContentMenu";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function debates() {
  return (
    <div className='h-screen w-full'>
      <Header />
      <div className='mt-36 p-10 w-full laptop:mt-30'>
        <h1 className='mb-6'>DEBATES</h1>
        <h2>EM BREVE</h2>
      </div>
      <Footer />
    </div>
  );
}
