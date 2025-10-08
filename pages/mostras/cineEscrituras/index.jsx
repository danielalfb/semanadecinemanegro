import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PageBanner from "../../../components/PageBanner";
import PageElement from "../../../components/PageElement";
import PageDescription from "../../../components/PageDescription";
import { SITE_CONTENT } from "../../../helpers/content";
import { CINEESCRITURAS } from "../../../helpers/cineEscrituras";
import MovieCard from "../../../components/MovieCard";
import Accordion from "../../../components/Accordion";

export default function cineEscrituras() {
  return (
    <div className="h-screen w-full relative overflow-x-hidden bg-white">
      <Header />
      <div className="w-full mt-[46px] desktop:mt-[117px] tablet-[117px] ">
        <PageBanner
          title={SITE_CONTENT.mostras[2].title}
          waveColor={SITE_CONTENT.mostras[2].color}
          textColor={"var(--color-main-txt)"} 
        />
        <PageDescription
          text={SITE_CONTENT.mostras[2].longDescription}
          color={SITE_CONTENT.mostras[2].color}
        />
        <div className="p-10 pt-0">
          {CINEESCRITURAS.map((session) => (
            <Accordion
              title={session.title}
              color={SITE_CONTENT.mostras[2].color}
              key={session.id}
            >
              <div className="flex flex-col gap-4">
                {session.movies.map((movie) => (
                  <MovieCard
                    key={movie.title}
                    movie={movie}
                    color={SITE_CONTENT.mostras[2].color}
                    isCineEscrituras
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
