import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Shape from "../../components/Shape";

export default function anteriores() {
  return (
    <div className='h-screen w-full relative overflow-x-hidden'>
      <Shape />
      <Shape isYellow />
      <Header />
      <div className='mt-36 p-10 w-full laptop:mt-30'>
        <h1 className='mb-6'>EDIÇÕES ANTERIORES</h1>
        <div className="flex flex-col mb-6">
        <h2 className='mb-6'>SCNBH&apos;21</h2>
        <p>
          A 1º Edição da Semana de Cinema Negro de Belo Horizonte trouxe um olhar de resgate das nossas memórias. Diante do momento de crise mundial, se fez necessário visitar lembranças para despertar o desejo de vivê-las novamente. Apresentamos, de 10 a 16 de abril de 2021, um conjunto composto por 50 filmes de cinematografias negras brasileiras, africanas e da diáspora distribuídos em 3 mostras e 2 homenagens: Cinemas Africanos em revista: as origens do FESPACO; Surreal16 Collective, Um Novo Olhar para o Cinema Nigeriano; Cine-Escrituras Pretas; Sessão Maria José Novais Oliveira: Nossa atriz; e Cinema, negritude e poesia: uma homenagem a Sarah Maldoror.
          As conversas com convidadas e convidados estão disponíveis no canal do Youtube da Semana de Cinema Negro.
          Durante o festival o Coletivo Zanza realizou a cobertura crítica, eles escreveram textos sobre alguns filmes que estavam disponíveis durante o festival.
          Nosso catálogo está disponível para download, vocês podem conferir toda a programação, sinopse dos filmes exibidos, assim como os textos publicados sobre essa edição.
        </p>
        <button>Baixar catálogo</button>
        </div>
        <div className="flex flex-col">
        <h2 className='mb-6'>SCNBH&apos;22</h2>
        <p>
            A 2º Semana de Cinema Negro de Belo Horizonte, aconteceu presencialmente pela primeira vez e, por esse motivo, a presença do público foi essesncial para a construção do festival. Promoveremos um encontro que foi marcado pelo afeto e acolhimento. Apresentamos, de 08 a 15 de setembro de 2022, um conjunto composto por 53 filmes de cinematografias africanas, negras brasileiras e da diáspora, distribuído em três mostras, duas homenagens e uma Sessão Especial: Por Outros Cinemas Africanos; Med Hondo: cinema e liberadade; Cine-Escrituras Pretas; Sessão Homenagem Maria José Novais Oliveira: Rejane Faria – no palco e nas telas; Semana de Cinema Negro convida o NICHO 54; Ibejis (Infatil).
            As conversas com convidadas e convidados estão disponíveis no canal do Youtube da Semana de Cinema Negro.
            Concebemos um catálogo com textos que refletem sobre a mostra Por Outros Cinemas Africanos, escrito por Janaína Oliveira. Trouxemos duas entrevistas no catálogo: uma com Annabelle Aventurin, publicada na revista Non Fiction, sobre os processos de restauração dos filmes do cineasta Med Hondo; e outra realizada por Alessandra Brito com Rejane Faria, a nossa homenageada da edição. O catálogo está disponível para download.
        </p>
        <button>Baixar catálogo</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
