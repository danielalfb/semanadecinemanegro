import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContentMenu from "../../components/ContentMenu";
import PageBanner from "../../components/PageBanner";

export default function atividadesFormativas() {
  return (
    <div className="h-screen w-full relative overflow-x-hidden bg-white">
      <Header />
      <div className="w-full">
        <PageBanner
          title="Atividades formativas"
          color={"var(--color-cream)"}
          textColor={"var(--color-main-txt)"}
        />
        <ContentMenu tipo="atividades" />
      </div>
      <Footer />
    </div>
  );
}
