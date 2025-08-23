import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PageBanner from "../../../components/PageBanner";
import { SITE_CONTENT } from "../../../helpers/content";

export default function homenagem() {
  return (
    <div className="h-screen w-full relative overflow-x-hidden bg-white">
      <Header />
      <div className="w-full mt-[62px] desktop:mt-[120px] tablet-[120px] ">
        <PageBanner
          title={SITE_CONTENT.mostras[1].title}
          color={"var(--color-green)"}
        />
      </div>
      <Footer />
    </div>
  );
}
