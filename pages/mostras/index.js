import React from "react";
import ContentMenu from "../../components/ContentMenu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function mostras() {
  return (
    <div className="h-screen w-full relative overflow-x-hidden bg-white">
      <Header />
      <div className="w-full mt-[46px] desktop:mt-[120px] tablet:mt-[120px] ">
        <PageBanner
          title="Mostras"
          color={"var(--color-cream)"}
          textColor={"var(--color-main-txt)"}
        />
        <ContentMenu tipo="mostras" isCarousel />
      </div>
      <Footer />
    </div>
  );
}
