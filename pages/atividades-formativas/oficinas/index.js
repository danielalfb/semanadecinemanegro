import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PageBanner from "../../../components/PageBanner";

export default function oficinas() {
  return (
    <div className="h-screen w-full relative bg-brown">
      <Header />
      <div className="w-full mt-[46px] desktop:mt-[120px] tablet-[120px] ">
        <PageBanner title="Cursos" color={"var(--color-green)"} />
      </div>
      <Footer />
    </div>
  );
}
