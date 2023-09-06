import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Shape from "../../components/Shape";
import Link from "next/link";
import Button from "../../components/Button";

export default function anteriores() {
  return (
    <div className='h-screen w-full relative overflow-x-hidden'>
      <Shape />
      <Shape isYellow />
      <Header />
      <div className='mt-36 p-10 w-full laptop:mt-30'>
        <h1 className='mb-6'>EDIÇÕES ANTERIORES</h1>
        <div className="flex flex-col mb-6 w-full p-4 rounded-sm border-4">
          <h2 className='mb-6'>SCNBH&apos;21</h2>
          <p className="font-sans">
            A 1º Edição da Semana de Cinema Negro de Belo Horizonte trouxe um olhar de resgate sobre as nossas memórias.
            Diante do momento de crise mundial, fez-se necessário visitar lembranças para despertar o desejo de vivê-las novamente.
            Apresentamos, de 10 a 16 de abril de 2021, um conjunto composto por cinquenta filmes de cinematografias africanas, negras brasileiras,
            africanas e da diáspora, distribuído em três mostras e duas homenagens:
            Cinemas Africanos em revista: as origens do FESPACO; Surreal16 Collective, Um Novo Olhar para o Cinema Nigeriano;
            <i>Cine-Escrituras Pretas; Sessão Maria José Novais Oliveira: Nossa atriz; e Cinema, negritude e poesia: uma homenagem a Sarah Maldoror</i>.
            As conversas com convidadas e convidados estão disponíveis no canal do Youtube da Semana de Cinema Negro (acesse em: <Link passHref={true} href='https://www.youtube.com/@semanadecinemanegro/streams'>
              <a target="_blank" className="text-blue-300">youtube.com/@semanadecinemanegro/streams</a>
              </Link>.)
            Durante o festival, o Coletivo Zanza realizou a cobertura crítica. Os integrantes Diego Silva Souza,
            Gabriel Araújo, Iakima Delamare e Larissa Muniz escreveram acerca de alguns filmes que estavam sendo
            divulgados ao longo do evento (acesse em: <Link passHref={true} href='https://www.coletivozanza.com/tag/semana-de-cinema-negro'>
              <a target="_blank" className="text-blue-300">coletivozanza.com/tag/semana-de-cinema-negro</a>
              </Link>.).
            Em nosso catálogo, que já está disponível para download, é possível conferir toda a programação, as
            sinopses dos filmes exibidos, assim como os textos publicados sobre essa edição.

          </p>
          <div className="flex w-full justify-center">
            <Link passHref={true} href='https://drive.google.com/file/d/1ZjocdoU0kz1izObQVfFqIxYlOgdMZQ4e/view?usp=sharing'>
            <button onClick="_blank" className="text-yellow-100 bg-blue-500 w-1/4 h-8 mt-6 rounded-lg uppercase font-semibold">Baixar catálogo</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full mb-6 p-4 rounded-sm border-4">
          <h2 className='mb-6'>SCNBH&apos;22</h2>
          <p>
          A 2ª edição da Semana de Cinema Negro de Belo Horizonte aconteceu presencialmente pela primeira vez e, 
          por esse motivo, a presença do público foi essencial para a construção do festival. Promovemos um encontro 
          marcado pelo afeto e acolhimento. Apresentamos, de 8 a 15 de setembro de 2022, um conjunto composto 
          por 53 filmes de cinematografias africanas, negras brasileiras e da diáspora, distribuído em três mostras, 
          duas homenagens e uma Sessão Especial: <i>Por Outros Cinemas Africanos; Med Hondo: cinema e liberadade; 
          Cine-Escrituras Pretas; Sessão Homenagem Maria José Novais Oliveira: Rejane Faria – no palco e nas telas; 
          Semana de Cinema Negro convida o NICHO 54; e Ibejis (Infatil)</i>.
          As conversas com convidadas e convidados estão disponíveis no canal do Youtube da Semana de Cinema Negro 
          (acesse em: <Link passHref={true} href='https://www.youtube.com/@semanadecinemanegro/streams'>
              <a target="_blank" className="text-blue-300">youtube.com/@semanadecinemanegro/streams</a>
              </Link>.)
          Concebemos um catálogo com textos que refletem sobre a mostra <i>Por Outros Cinemas Africanos</i>. 
          Além disso, trouxemos duas entrevistas: uma com Annabelle Aventurin, publicada na revista <i>Non Fiction</i>, 
          sobre os processos de restauração dos filmes do cineasta Med Hondo; e outra realizada por Alessandra Brito
           com Rejane Faria, a nossa homenageada da edição. O catálogo está disponível para download.
          </p>
          <div className="flex w-full justify-center">
            <Link passHref={true} href='https://drive.google.com/file/d/1huRBFPlwEs68lvV7kPxI_mX0d3deJ4L-/view?usp=sharing'><button target='_blank' className="text-yellow-100 bg-blue-500 w-1/4 h-8 mt-6 rounded-lg uppercase font-semibold">Baixar catálogo</button>
            </Link>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
