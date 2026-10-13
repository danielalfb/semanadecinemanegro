import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Shape from "../../components/Shape";
import { CREDITS } from "../../helpers/creditos";

export default function creditos() {
  return (
    <div className='h-screen w-full relative overflow-x-hidden'>
      <Shape />
      <Shape isYellow />
      <Header />
      <div className='mt-36 p-10 w-full laptop:mt-30'>
        <h1 className='mb-6'>CRÉDITOS</h1>
        <div className='flex flex-wrap'>
          {CREDITS.map((item, index) => (
            <div key={index} className='w-1/2 md:w-1/3 lg:w-1/4 p-4'>
              <div className='flex flex-wrap flex-col'>
                <span
                  className={`text-sm ${
                    !item.name ? "font-semibold" : "font-medium"
                  }`}
                >
                  {item.pt}
                </span>
                <span className={`text-xs`}>{item.en}</span>
                <span className={`text-xs`}>{item.name}</span>
                <span className={`text-xs`}>{item.additional}</span>
                {item.subItems
                  ? item.subItems.map((subItem, index) => (
                      <>
                        <span className={`text-sm`}>{subItem.pt}</span>
                        <span className={`text-xs`}>{subItem.en}</span>
                        <span className={`text-xs  mb-4`}>{subItem.name}</span>
                      </>
                    ))
                  : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
