import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PageBanner from "../../../components/PageBanner";

export default function politicas() {
  return (
    <div className="h-screen w-full relative bg-green">
      <Header />
      <div className="w-full">
        <PageBanner title="Mesas" color={"var(--color-green)"} />
      </div>
      <Footer />
    </div>
  );
}
