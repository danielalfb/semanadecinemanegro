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
        <div className="w-full pt-20 bg-green-100">
          <div
            className="w-full h-screen bg-top bg-cover mt-7 relative"
            style={{
              backgroundImage: `url('/images/semana_banner_25_3.png')`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-80" style={{ zIndex: 1 }} />
            <div className="flex flex-col items-start px-10" style={{ position: "relative", zIndex: 2 }}>
              <div className="p-6 max-w-2xl">
                <h2 className="text-2xl font-bold mb-2 text-left text-white">
                  3º Semana de Cinema Negro de Belo Horizonte
                </h2>
                <p className="text-md mb-4 text-left text-white">
                  A <i>3º Semana de Cinema Negro de Belo Horizonte</i> apresenta, de
                  09 a 17 de setembro de 2023, um conjunto composto por 70 filmes de
                  cinematografias africanas, negras brasileiras e da diáspora
                  distribuídas em:{" "}
                  <i>
                    Cinemas Africanos contam suas histórias; 50 Anos de Touki Bouki,
                    Celebrando o Cinema de Djibril Diop Mambéty; Cine-Escrituras
                    Pretas; Cinema Negro e Experimental com Crystal Z Campbell;
                    Sessão Homenagem Maria José Novais Oliveira; 5 Anos de Ponta de
                    Anzol; e Ibejis (Infantil)
                  </i>
                  . O festival acontecerá de forma híbrida, presencialmente e on-line.
                  As exibições presenciais serão realizadas no Cine Humberto
                  Mauro/Palácio das Artes e no Cine Santa Tereza, e toda a
                  programação é gratuita. Os filmes da mostra Cine-Escrituras Pretas
                  estarão disponíveis nas salas de exibição e na plataforma Cine
                  Humberto Mauro Mais (
                  <Link
                    target="_blank"
                    href="https://www.cinehumbertomauromais.com/#semana-cinema-negro-bh/#semana-cinema-negro-bh/#semana-cinema-negro-bh"
                    className="underline text-blue-200"
                  >
                    www.cinehumbertomauromais.com
                  </Link>
                  ). Nesta edição, além das sessões fílmicas, teremos conversas com
                  convidadas e convidados internacionais, bem como debates com
                  realizadoras e realizadores da mostra dedicada aos filmes
                  brasileiros – todos os debates acontecerão presencialmente.
                  Contamos, ainda, com três oficinas: &quot;Sonhando em
                  Palavras&quot;, Escrevendo o Primeiro Longa, ministrada por Diego
                  Paulino, realizada em parceria com a Rede de Talentos do Projeto
                  Paradiso, através do Paradiso Multiplica (presencial); Elaboração
                  e Produção de Projetos, ministrada por Fernanda Vidigal (on-line);
                  Processos de Distribuição do Cinema Independente ministrada por
                  Daniel Queiroz (híbrido).
                </p>
                <div className="flex gap-4">
                  <button
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition border border-white"
                    onClick={() => console.log('click')}
                  >
                    Todesplay
                  </button>
                  <button
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition border border-white"
                    onClick={() => console.log('click')}
                  >
                    Programação
                  </button>
                  <button
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition border border-white"
                    onClick={() => console.log('click')}
                  >
                    Catálogo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full laptop:mt-30 p-2 laptop:p-0 mt-2">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dPOWUaENIOY"
            width="100%"
            height="500px"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
