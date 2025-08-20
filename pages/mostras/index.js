import React from "react";
import ContentMenu from "../../components/ContentMenu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";

export default function mostras() {
  return (
    <div className="h-screen w-full  overflow-x-hidden bg-white">
      <Header />
      <div className="w-full" style={{ marginTop: "120px " }}>
        <PageBanner title="Mostras" bg={"images/semana_banner_25_1.png"} />
        <ContentMenu tipo="mostras" />
      </div>
      <Footer />
    </div>
  );
}
