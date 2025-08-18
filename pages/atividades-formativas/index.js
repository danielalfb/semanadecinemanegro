import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContentMenu from "../../components/ContentMenu";
import Link from "next/link";



export default function atividadesFormativas() {
  return (
    <div className='h-screen w-full relative overflow-x-hidden'>
      <Header />
      <div className='mt-36 p-10 w-full laptop:mt-30'>
      <div className="flex w-full desktop:justify-between desktop:flex-row desktop:items-center mb-6 mob:flex mob:flex-col mob:items-start">
          <h1 className='mb-6'>ATIVIDADES FORMATIVAS</h1>
          <Link
              passHref={true}
              href='https://docs.google.com/forms/d/e/1FAIpQLScd4FaMwjqZXBcHcTQgGaj6Yw0xNBlCdPgSmKqSnUOu0xZM2Q/viewform'
            >
              <a
                target='_blank'
                className='text-blue-500 bg-transparent text-sm p-2 border-2 rounded-md uppercase font-bold hover:shadow-sm'
              >
                Inscreva-se
              </a>
            </Link>
      </div>  
        <ContentMenu tipo='ATIVIDADES' />
      </div>
      <Footer />
    </div>
  );
}
