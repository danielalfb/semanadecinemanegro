import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContentMenu from "../../components/ContentMenu";
import Link from "next/link";
import PageBanner from "../../components/PageBanner";

export default function atividadesFormativas() {
  return (
    <div className="h-screen w-full relative bg-white">
      <Header />
      <div className="w-full mt-[46px] desktop:mt-[120px] tablet-[120px] bg-white">
        <PageBanner 
          title="Atividades" 
          color={"var(--color-sand)"}
          textColor={"var(--color-main-txt)"}  
        />
        <ContentMenu tipo="atividades" />
      </div>
      <Footer />
    </div>
  );
}
