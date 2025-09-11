import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PageBanner from "../../../components/PageBanner";
import PageElement from "../../../components/PageElement";
import PageDescription from "../../../components/PageDescription";
import MovieCard from "../../../components/MovieCard";
import Accordion from "../../../components/Accordion";
import { SITE_CONTENT } from "../../../helpers/content";
import { INTERNATIONAL } from "../../../helpers/internacional";

export default function brasileira() {
  return (
    <div className="h-screen w-full relative overflow-x-hidden bg-white">
      <Header />
      <div className="w-full mt-[46px] desktop:mt-[120px] tablet-[120px] ">
        <PageElement
          element={
            <img
              src="/images/elemento_azul.png"
              style={{ height: "250px", width: "auto" }}
            />
          }
          position={{ right: "0", top: "120px" }}
        />
        <PageBanner
          title={SITE_CONTENT.mostras[3].title}
          color={SITE_CONTENT.mostras[3].color}
        />
        <PageDescription
          text={SITE_CONTENT.mostras[3].longDescription}
          color={SITE_CONTENT.mostras[3].color}
        />
        <div className="p-10 pt-0">
          {INTERNATIONAL.map((session) => (
            <Accordion
              title={session.title}
              color={SITE_CONTENT.mostras[3].color}
              key={session.id}
            >
              <div className="flex flex-col gap-4">
                {session.movies.map((movie) => (
                  <MovieCard
                    key={movie.title}
                    movie={movie}
                    color={SITE_CONTENT.mostras[3].color}
                  />
                ))}
              </div>
            </Accordion>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
