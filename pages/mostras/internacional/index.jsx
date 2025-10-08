import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PageBanner from "../../../components/PageBanner";
import PageDescription from "../../../components/PageDescription";
import MovieCard from "../../../components/MovieCard";
import Accordion from "../../../components/Accordion";
import { SITE_CONTENT } from "../../../helpers/content";
import { INTERNATIONAL } from "../../../helpers/internacional";

export default function internacional() {
  return (
    <div className="h-screen w-full relative overflow-x-hidden bg-white">
      <Header />
      <div className="w-full">
        <PageBanner
          title={SITE_CONTENT.mostras[3].title}
          textColor={"var(--color-main-txt)"}
          waveColor={SITE_CONTENT.mostras[3].color}
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
              fontSize="1.6rem"
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
