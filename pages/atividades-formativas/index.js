import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContentMenu from "../../components/ContentMenu";
import Link from "next/link";
import PageBanner from "../../components/PageBanner";

export default function atividadesFormativas() {
  return (
    <div className="h-screen w-full relative bg-green">
      <Header />
      <div className="w-full mt-[46px] desktop:mt-[120px] tablet-[120px] ">
        <PageBanner title="Atividades" bg={"images/semana_banner_25_2.png"} />
        <ContentMenu tipo="atividades" />
      </div>
      <Footer />
    </div>
  );
}
