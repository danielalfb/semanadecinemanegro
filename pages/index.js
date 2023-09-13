import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

import ReactPlayer from "react-player";
import Link from "next/link";
import Shape from "../components/Shape";

export default function Home() {
  return (
    <>
      <Head>
        <title>SCNBH23</title>
      </Head>

      <div className='relative h-screen w-full'>
        <Header />
        <div
          className='top-0 w-full h-screen bg-top bg-cover'
          style={{
            backgroundImage: `url('/images/semana_banner_home.png')`,
          }}
        />
        <>
          <p className='absolute bottom-6 right-0 bg-blue-500 text-white p-2 text-xs'>
            VOCÊS, por Pedro Neve
          </p>
          {/* SOBRE */}
          <div className='p-10 bg-blue-500 relative'>
            <Shape isSmallLeft color='var(--clr-yellow-light)' />
            <div className='relative w-full text-white text-md leading-6 z-10'>
              <p>
                A <i>3º Semana de Cinema Negro de Belo Horizonte</i> apresenta,
                de 09 a 17 de setembro de 2023, um conjunto composto por 70
                filmes de cinematografias africanas, negras brasileiras e da
                diáspora distribuídas em:{" "}
                <i>
                  Cinemas Africanos contam suas histórias; 50 Anos de Touki
                  Bouki, Celebrando o Cinema de Djibril Diop Mambéty;
                  Cine-Escrituras Pretas; Cinema Negro e Experimental com
                  Crystal Z Campbell; Sessão Homenagem Maria José Novais
                  Oliveira; 5 Anos de Ponta de Anzol; e Ibejis (Infantil)
                </i>
                .
              </p>
              <p>
                O festival acontecerá de forma híbrida, presencialmente e
                on-line. As exibições presenciais serão realizadas no Cine
                Humberto Mauro/Palácio das Artes e no Cine Santa Tereza, e toda
                a programação é gratuita. Os filmes da mostra Cine-Escrituras
                Pretas estarão disponíveis nas salas de exibição e na plataforma
                Cine Humberto Mauro Mais (
                <Link
                  passHref={true}
                  target='_blank'
                  href='https://www.cinehumbertomauromais.com/#semana-cinema-negro-bh/#semana-cinema-negro-bh/#semana-cinema-negro-bh'
                >
                  <a className='text-blue-100'>www.cinehumbertomauromais.com</a>
                </Link>
                ). Nesta edição, além das sessões fílmicas, teremos conversas
                com convidadas e convidados internacionais, bem como debates com
                realizadoras e realizadores da mostra dedicada aos filmes
                brasileiros – todos os debates acontecerão presencialmente.
                Contamos, ainda, com três oficinas: &quot;Sonhando em
                Palavras&quot;, Escrevendo o Primeiro Longa, ministrada por
                Diego Paulino, realizada em parceria com a Rede de Talentos do
                Projeto Paradiso, através do Paradiso Multiplica (presencial);
                Elaboração e Produção de Projetos, ministrada por Fernanda
                Vidigal (on-line); Processos de Distribuição do Cinema
                Independente ministrada por Daniel Queiroz (híbrido).
              </p>
              <p>
                As obras do artista plástico Pedro Neves compõem toda identidade
                visual desta edição do festival. Em suas obras o artista
                trabalha com um repertório amplo de narrativas e de imagens que
                partem das manifestações culturais e dos saberes
                afro-brasileiros para dialogar com fontes diversas. O projeto
                gráfico é do nosso parceiro Marco Chagas que, a partir do
                desenho, pesquisa o cotidiano urbano e suas relações com o
                pensamento gráfico.
                <br />
                Convidamos a todas, todes e todos a acompanharem a programação.
              </p>
            </div>
            <div className='flex w-full justify-between items-center flex-wrap z-10 mob:gap-8 mt-6'>
              <div className='flex items-center flex-wrap gap-2 z-10'>
                <Link
                  passHref={true}
                  href='https://drive.google.com/file/d/16TYH1g7TdIe1C42gw0zg46Onj_kjPqw7/view?usp=sharing'
                >
                  <a
                    target='_blank'
                    className='text-yellow-100 bg-transparent mt-6 bg-transparent p-2 border-2 rounded-lg uppercase font-bold hover:shadow-sm'
                  >
                    Baixe a programação
                  </a>
                </Link>
                <Link
                  passHref={true}
                  href='https://www.cinehumbertomauromais.com/#semana-cinema-negro-bh'
                >
                  <a
                    target='_blank'
                    className='text-yellow-100 bg-transparent mt-6 bg-transparent p-2 border-2 rounded-lg uppercase font-bold hover:shadow-sm'
                  >
                    ASSISTA AOS FILMES
                  </a>
                </Link>
              </div>
              <div className='flex flex-col text-yellow-100 z-10'>
                <span className='text-7xl font-bold leading-10'>9—17</span>
                <span className='text-3xl'>SETEMBRO</span>
              </div>
            </div>
          </div>
          <div className='w-full laptop:mt-30 p-2 laptop:p-0'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=dPOWUaENIOY'
              width='100%'
            />
          </div>
        </>
        <Footer />
      </div>
    </>
  );
}
