import Footer from "../components/Footer";
import Head from "next/head";

import ReactPlayer from "react-player";
import Button from "../components/Button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>SCNBH24</title>
        <meta name="description" content="A Semana de Cinema Negro destaca a diversidade e a riqueza cultural de cineastas negros. Explore filmes, palestras e debates sobre a representatividade no cinema." />
        <meta name="keywords" content="cinema negro, diversidade no cinema, representatividade, filmes negros, cineastas negros" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="Semana de cinema negro belo horizonte | 2024" />
        <meta property="og:locale" content="pt_BR" />
        </Head>

      <div className="relative h-screen w-full">
        <div
          className="w-full h-screen bg-top bg-coverr"
          style={{
            backgroundImage: `url('/images/banner_1.svg')`,
          }}
        >
          <div className="w-full h-screen bg-logo-pink flex items-center flex-col justify-center">
            <img
              src={"/images/logo_withImage.svg"}
              style={{
                maxWidth: "840px",
                mixBlendMode: "screen",
                padding: "10px",
              }}
            />
            <div className="titleBtnsContainer w-full flex item-center justify-center">
              <Button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1gVpQU_bMbwDi8KRD0-ugJDAZra2QqUuH/view"
                  )
                }
              >
                programação
              </Button>
              <Button onClick={() => router.push("/anteriores")}>
                edições anteriores
              </Button>
              <Button onClick={() => window.open(' https://www.ubuplay.com/app/4a-semana-de-cinema-negro-de-belo-horizonte ')}>
                ubuplay
              </Button>
            </div>
          </div>
        </div>

        {/* VIDEO */}
        <div className="w-full bg-pink-200">
          <ReactPlayer
            url="https://youtu.be/dCtTqV0gUkM?si=P2zR3MI1vzq8KVR3"
            width="100%"
            height="100vh"
            controls
            muted
            playing
          />

          {/* SOBRE */}
          <div className="w-full p-10 bg-pink-100 relative pr-0 bg-logo md: pl-0">
            <div className="textContainer text-justify text-md w-full text-blue-800 text-md leading-6 z-10 p-10">
              <p>
                O desafio de dar continuidade a um trabalho maior. É dessa forma
                que a 4ª edição da Semana de Cinema Negro de Belo Horizonte se
                realiza. Temos a possibilidade de pensar as demais edições não
                só como um conjunto de obras cinematográficas exibidas, mas,
                também, pelo intercâmbio de vivências a partir do diálogo com
                quem realiza e pensa essas cinematografias. Nos referimos ao
                compartilhamento de experiências que se dão junto aos filmes,
                não separados da vida. Por isso convidamos o público para que se
                junte a nós para construir mais uma edição da Semana de Cinema
                Negro de Belo Horizonte.
              </p>
              <p>
                O festival acontece de 13 a 20 de setembro de 2024, com um
                conjunto composto por cerca de 60 filmes de cinematografias
                africanas, negras brasileiras e da diáspora distribuídas em:
                africanas, negras brasileiras e da diáspora distribuídas em:
              </p>
              <p>
                <i>
                  Sessão Homenagem Maria José Novais Oliveira: Lilian Solá
                  Santiago - Documentarista das Nossas Histórias
                </i>
                , curada por Alessandra Brito;{" "}
                <i>
                  Abrindo Caminhos: Obras Precursoras dos Cinemas Negros no
                  Brasil, As Muitas Áfricas: um olhar Sobre as Produções
                  Contemporâneas do Continente, Arquipélago de Cinemas: Filmes
                  Contemporâneos do Caribe, Especial Pioneiros dos Cinemas
                  Africanos: Timité Bassori e Paulin Vieyra, e Revolucionária
                  Antes de Tudo: O Cinema de Sara Gómez
                </i>
                , curadas por Janaína Oliveira;{" "}
                <i>Cine Escrituras-Pretas Brasil e Minas</i>, e<i>Ibejis</i> sob
                curadoria de Anti Ribeiro, Fabio Rodrigues Filho e Yasmine
                Evaristo; <i>Ibejis convida Além-mar</i>, curada por Kalor
                Pacheco.
              </p>
              <p>
                O festival acontece de forma híbrida, presencialmente e on-line.
                As exibições presenciais são realizadas no Cine Humberto
                Mauro/Palácio das Artes e no Cine Santa Tereza, e toda a
                programação é gratuita. Os filmes da mostra Cine-Escrituras
                Pretas estão disponíveis nas salas de exibição e na plataforma
                UBUPLAY{" "}
                <a href="http://ubuplay.com" className="text-red-600">
                  (ubuplay.com)
                </a>
                , até o dia 20 de setembro. Nesta edição, além das sessões
                fílmicas, teremos conversas com convidadas e convidados
                internacionais, bem como debates com realizadoras e realizadores
                da mostra dedicada aos filmes brasileiros – todos os debates
                acontecem presencialmente. Contamos, ainda, com três atividades
                formativas: Masterclass de Direção de Atores, com Georgina
                Castro, em parceria com o Projeto Paradiso; Oficina Fragilidades
                - Desenvolvimento de Longa-Metragem, com Bruno Hilário e Paula
                Santos; Políticas do Olhar, com Janaína Oliveira e Jonathan Ali,
                por meio da parceria com o FICINE.
              </p>
              <p>
                Este ano, o festival conta com uma parceria com o Gira da
                Quebrada, um projeto que busca transitar em por diversas artes,
                música, dança e poesia sendo um verdadeiro oásis cultural. Mais
                que um projeto, é um movimento que celebra a riqueza e a
                diversidade da cultura afrodiásporica em várias de suas formas.
                Reunindo expressões artísticas, o Gira oferece desde sets de
                música que transitam pelas sonoridades afro, até performances de
                dança, moda, culinária, intervenções poéticas e etc.
              </p>
              <p>
                As obras da artista plástica Ana Paula Sirino compõem toda
                identidade visual desta edição do festival. Através de uma
                pesquisa autodidata com fotografia e pintura, a artista
                apresenta pinturas com personagens, elementos, paisagens e
                relações de cenas que despertam familiaridade e nostalgia por
                uma permanência de memória, de quem vive ou viveu em contexto de
                aquilombamento ou afastado dos grandes centros.. O projeto
                gráfico é de Joana Americo e Marco Chagas. Convidamos a todas,
                todes e todos a acompanharem a programação.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
