import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import yourData from "../../../data/content.json";

export default function escrituras() {
  return (
    <div className='h-screen w-full'>
      <Header />
      <div
        className='mt-36 p-10 w-full laptop:mt-30'
        style={{
          background: "var(--clr-green-dark)",
          color: "var(--clr-white)",
        }}
      >
        <p>ok</p>
      </div>
      <Footer />
    </div>
  );
}
