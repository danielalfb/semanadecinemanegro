import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

import ReactPlayer from "react-player";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>SCNBH25</title>
      </Head>

      <div className="relative min-h-screen w-full">
        <Header />
        {/* Banner com opacidade */}
        <div className="w-full">
          <div
            className="w-full relative"
            style={{
              backgroundColor: "var(--color-cream)",
            }}
          >
            <div
              className="absolute inset-0 bg-white opacity-80"
              style={{ zIndex: 1 }}
            />
            <div className="relative z-10 flex flex-col items-start px-2 tablet:px-10 py-8 max-w-full tablet:max-w-4xl mx-auto">
              <div className="p-2 tablet:p-6 w-full">
                <h2 className="text-md tablet:text-xl font-bold mb-2 text-left text-brown">
                  Como fazer do mar a casa?
                </h2>
                <p className="text-sm tablet:text-md mb-4 text-left text-brown leading-relaxed tablet:leading-loose">
                  A <i>5º Semana de Cinema Negro de Belo Horizonte</i>{" "}
                  apresenta, de 16 a 24 de outubro de 2025, um conjunto composto
                  por 45 filmes de cinematografias brasileiras e do mundo,
                  distribuídas em: Cine-Escrituras Pretas; Homenagem Maria José
                  Novais Oliveira: Viviane Ferreira, seguir tendo o direito de
                  experimentar; Cotidiano e Revolucionário - O Cinema de Charles
                  Burnett; Experiência Vivida do Negro - Franz Fanon 100 anos;
                  Tributo ao Cinema Luz de Souleymane Cissé; Do Rio ao Mar:
                  Palestina Livre. E ainda as mostras: A Rememoração no Cinema
                  dos Quilombos; Vampiros à Luz do Meio-Dia - O Cinema de Luiz
                  Lourenço e a Ibejis - Sessão Infantil. <br /> O festival
                  acontecerá de forma híbrida, presencialmente e on-line. As
                  exibições presenciais serão realizadas no Cine Humberto
                  Mauro/Palácio das Artes e no Cine Santa Tereza, e toda a
                  programação é gratuita. A mostra Cine-Escrituras Pretas ficará
                  disponível online durante todo o período do festival na{" "}
                  <Link
                    target="_blank"
                    href="http://ubuplay.com"
                    className="underline text-blue-700"
                  >
                    ubuplay.com
                  </Link>
                  . <br /> Nesta edição, além das sessões fílmicas, teremos
                  conversas realizadores e realizadoras, todas as atividades
                  acontecerão presencialmente. Contamos, ainda, com as oficinas:
                  &quot;Fotolivros Africanos Contemporâneos&quot;, ministrada
                  por Ana Paula Vitorio e &quot;Introdução à preservação
                  audiovisual digital - conceitos e práticas&quot;, ministrada
                  por Débora Butruce. Teremos também a mesa &quot;Práticas para
                  pensar a formação de público a partir do cinema&quot;, com
                  Danilo Candombe, Layla Braz, Marcos Donizetti, Elaine do Carmo
                  e Viviane Ferreira, além de uma conversa com o cineasta
                  Charles Burnett. <br /> As obras da artista plástica Larissa
                  de Souza compõem toda identidade visual desta edição do
                  festival. Em suas obras a artista autodidata apresenta
                  pinturas majoritariamente figurativas, concentrando-se na
                  imagem da mulher afro diaspórica em seu universo particular e
                  coletivo. O projeto gráfico é da Joana Américo e do Marco
                  Chagas. Convidamos a todas, todes e todos a acompanharem a
                  programação.
                </p>
                <div className="flex flex-col tablet:flex-row gap-2 tablet:gap-4 mb-8">
                  {/*  <button
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition border border-white"
                    onClick={() => console.log("click")}
                  >
                    Todesplay
                  </button> */}
                  <button
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition border border-white"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1eL6HC_5u0gksVHEbDxBBG37saSbFxTL-/view?usp=sharing"
                      )
                    }
                  >
                    Programação
                  </button>
                  {/* <button
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition border border-white"
                    onClick={() => console.log("click")}
                  >
                    Catálogo
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Player responsivo */}
        {/* <div className="w-full  mx-auto">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dPOWUaENIOY"
            width="100%"
            height="320px"
          />
                  </div> */}
        <Footer />
      </div>
    </>
  );
}
