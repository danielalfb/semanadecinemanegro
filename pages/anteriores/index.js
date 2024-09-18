import React from "react";
import Footer from "../../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import  Button  from '../../components/Button'



export default function Anteriores() {
  const router = useRouter();
  return (
    <div className='w-fit'>
      {/* <Header /> */}
      <div className='bg-logo w-fit bg-blue-800 relative z-1'>
        <div className="title-container">
          <div id="title" onClick={() => router.push("/")}  style={{display: 'flex', alignItems: 'center', gap: '24px', 
          marginLeft: '15px', position: 'relative',
          top: '60px', zIndex: '1',
          cursor: 'pointer'
          }}>
              <ArrowLeft size={24} />
              <h1>voltar</h1>
            </div>
        </div>
        <div className="overflow-x-hidden relative appearance-none h-3/4 py-20 scroll-smooth w-full" >
        <div className='flex flex-col w-full mb-6 p-4 rounded-sm'>
          <div className='flex w-full justify-between items-center mb-6'>
            <div className="title-sub">
              <span>S</span>
            <h2>SCNBH&apos;23</h2>
            </div>
            {/* <Button
              onClick={() => document.open('/catalogo_2_edicao.pdf') }
            >
              Baixar catálogo
            </Button> */}
        
          </div>
          <p>
            A 3ª edição da Semana de Cinema Negro de Belo Horizonte aconteceu
            presencialmente pela primeira vez e, por esse motivo, a presença do
            público foi essencial para a construção do festival. Promovemos um
            encontro marcado pelo afeto e acolhimento. Apresentamos,  09 a 17 de setembro de 2023, 
            um conjunto composto por 70 filmes de
            cinematografias africanas, negras brasileiras e da diáspora,
            distribuído em três mostras, duas homenagens e uma Sessão Especial:{" "}
            <i>
            Cinemas Africanos contam suas histórias; 50 Anos de Touki
                  Bouki, Celebrando o Cinema de Djibril Diop Mambéty;
                  Cine-Escrituras Pretas; Cinema Negro e Experimental com
                  Crystal Z Campbell; Sessão Homenagem Maria José Novais
                  Oliveira; 5 Anos de Ponta de Anzol; e Ibejis (Infantil)
            </i>
          </p>
        </div>
        <div className='flex flex-col w-full mb-6 p-4 rounded-sm'>
          <div className='flex w-full justify-between items-center mb-6'>
          <div className="title-sub">
              <span>S</span>
            <h2>SCNBH&apos;22</h2>
            </div>
            <Button
              onClick={() => document.open('/catalogo_2_edicao.pdf') }
            >
              Baixar catálogo
            </Button>
            {/* <a
              target='_blank'
              href="/catalogo_2_edicao.pdf"
              rel="noopener noreferrer"
              download
              className='text-blue-500 bg-transparent text-sm p-2 border-2 rounded-lg uppercase font-bold hover:shadow-sm'
            >
              Baixar catálogo
            </a> */}
          </div>
          <p>
            A 2ª edição da Semana de Cinema Negro de Belo Horizonte aconteceu
            presencialmente pela primeira vez e, por esse motivo, a presença do
            público foi essencial para a construção do festival. Promovemos um
            encontro marcado pelo afeto e acolhimento. Apresentamos, de 8 a 15
            de setembro de 2022, um conjunto composto por 53 filmes de
            cinematografias africanas, negras brasileiras e da diáspora,
            distribuído em três mostras, duas homenagens e uma Sessão Especial:{" "}
            <i>
              Por Outros Cinemas Africanos; Med Hondo: cinema e liberadade;
              Cine-Escrituras Pretas; Sessão Homenagem Maria José Novais
              Oliveira: Rejane Faria – no palco e nas telas; Semana de Cinema
              Negro convida o NICHO 54; e Ibejis (Infatil)
            </i>
            . As conversas com convidadas e convidados estão disponíveis no
            canal do Youtube da Semana de Cinema Negro (acesse no{" "}
            <Link
              passHref={true}
              href='https://www.youtube.com/@semanadecinemanegro/streams'
            >
              <a target='_blank' className='text-blue-300 flex-wrap'>
                Youtube
              </a>
            </Link>
            .) Concebemos um catálogo com textos que refletem sobre a mostra{" "}
            <i>Por Outros Cinemas Africanos</i>. Além disso, trouxemos duas
            entrevistas: uma com Annabelle Aventurin, publicada na revista{" "}
            <i>Non Fiction</i>, sobre os processos de restauração dos filmes do
            cineasta Med Hondo; e outra realizada por Alessandra Brito com
            Rejane Faria, a nossa homenageada da edição. O catálogo está
            disponível para download.
          </p>
        </div>
        <div className='flex flex-col mb-6 w-full p-4 rounded-sm'>
          <div className='flex w-full justify-between items-center mb-6'>
          <div className="title-sub">
              <span>S</span>
            <h2>SCNBH&apos;21</h2>
            </div>
            <Button
              onClick={() => window.open('https://drive.google.com/file/d/1ZjocdoU0kz1izObQVfFqIxYlOgdMZQ4e/view?usp=sharing') }
            >
              Baixar catálogo
            </Button>
            {/* <Link
              passHref={true}
              href='https://drive.google.com/file/d/1ZjocdoU0kz1izObQVfFqIxYlOgdMZQ4e/view?usp=sharing'
            >
              <a
                target='_blank'
                className='text-blue-500 bg-transparent text-sm p-2 border-2 rounded-lg uppercase font-bold hover:shadow-sm'
              >
                Baixar catálogo
              </a>
            </Link> */}
          </div>
          <p className='font-sans'>
            A 1º edição da Semana de Cinema Negro de Belo Horizonte trouxe um
            olhar de resgate sobre as nossas memórias. Diante do momento de
            crise mundial, fez-se necessário visitar lembranças para despertar o
            desejo de vivê-las novamente. Apresentamos, de 10 a 16 de abril de
            2021, um conjunto composto por cinquenta filmes de cinematografias
            africanas, negras brasileiras, africanas e da diáspora, distribuído
            em três mostras e duas homenagens: Cinemas Africanos em revista: as
            origens do FESPACO; Surreal16 Collective, Um Novo Olhar para o
            Cinema Nigeriano;
            <i>
              Cine-Escrituras Pretas; Sessão Maria José Novais Oliveira: Nossa
              atriz; e Cinema, negritude e poesia: uma homenagem a Sarah
              Maldoror
            </i>
            . As conversas com convidadas e convidados estão disponíveis no
            canal do Youtube da Semana de Cinema Negro (acesse no{" "}
            <Link
              passHref={true}
              href='https://www.youtube.com/@semanadecinemanegro/streams'
            >
              <a target='_blank' className='text-blue-300'>
                Youtube
              </a>
            </Link>
            .) Durante o festival, o Coletivo Zanza realizou a cobertura
            crítica. Os integrantes Diego Silva Souza, Gabriel Araújo, Iakima
            Delamare e Larissa Muniz escreveram acerca de alguns filmes que
            estavam sendo divulgados ao longo do evento (acesse em{" "}
            <Link
              passHref={true}
              href='https://www.coletivozanza.com/tag/semana-de-cinema-negro'
            >
              <a target='_blank' className='text-blue-300'>
                Coletivo Zanza
              </a>
            </Link>
            .). Em nosso catálogo, que já está disponível para download, é
            possível conferir toda a programação, as sinopses dos filmes
            exibidos, assim como os textos publicados sobre essa edição.
          </p>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
