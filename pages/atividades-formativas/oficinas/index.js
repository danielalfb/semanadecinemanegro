import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PageBanner from "../../../components/PageBanner";

export default function oficinas() {
  return (
    <div className="h-screen w-full relative bg-brown">
      <Header />
      <div className="w-full">
        <PageBanner title="Cursos" color={"var(--color-green)"} />
      </div>
      <Footer />
    </div>
  );
}
