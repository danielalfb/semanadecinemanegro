import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import { SITE_CONTENT } from "../../helpers/content";
import { ATIVIDADES_FORMATIVAS } from "../../helpers/atividades-formativas";
import PageDescription from "../../components/PageDescription";
import Accordion from "../../components/Accordion";

export default function atividadesFormativas() {
  return (
    <div className="h-screen w-full relative overflow-x-hidden bg-white">
      <Header />
      <div className="w-full">
        <PageBanner
          title={SITE_CONTENT.atividades[0].title}
          waveColor={SITE_CONTENT.atividades[0].color}
          textColor={"var(--color-main-txt)"}
        />
        <PageDescription
          text={SITE_CONTENT.atividades[0].description}
          color={SITE_CONTENT.atividades[0].color}
        />
        <div className="flex flex-col gap-6 p-10 pt-0">
          {ATIVIDADES_FORMATIVAS.map((activity) => (
            <div
              key={activity.id}
              className="flex flex-col p-4 flex-1 rounded-md border-4"
              style={{
                borderColor: SITE_CONTENT.atividades[0].color,
                backgroundColor: "#fffdf7",
              }}
            >
              <h2
                style={{
                  color: `${SITE_CONTENT.atividades[0].color} !important`,
                  marginBottom: "16px",
                }}
              >
                {activity.title}
              </h2>
              {activity.description ? (
                <div className="text-base leading-relaxed pb-4">
                  {activity.description}
                </div>
              ) : null}
              {activity.longDescription ? (
                <div className="flex flex-col gap-2">
                  {activity.longDescription?.map((text, idx) => (
                    <span key={idx} className="text-base leading-relaxed">
                      {text}
                    </span>
                  ))}
                </div>
              ) : null}
              {activity.highlight ? (
                <div
                  className="text-lg font-bold mt-2"
                  style={{
                    color: `${SITE_CONTENT.atividades[0].color} !important`,
                  }}
                >
                  {activity.highlight}
                </div>
              ) : null}
              {activity.helpText ? (
                <div className="flex flex-col mt-1">
                  {activity.helpText.map((legend, idx) => (
                    <span key={idx} className="text-xs text-gray-500 italic">
                      {legend}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
