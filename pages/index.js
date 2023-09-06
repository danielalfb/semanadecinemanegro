import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

import ReactPlayer from "react-player";
import Link from "next/link";

export default function Home() {
  // Ref
  // const textOne = useRef();
  // const textTwo = useRef();
  // const textThree = useRef();
  // const textFour = useRef();

  // useIsomorphicLayoutEffect(() => {
  //   stagger(
  //     [textOne.current, textTwo.current, textThree.current, textFour.current],
  //     { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
  //     { y: 0, x: 0, transform: "scale(1)" }
  //   );
  // }, []);

  return (
    <>
      <Head>
        <title>SCNBH23</title>
      </Head>

      <div className='h-screen w-full'>
        <Header />
        <div
          className='top-0 w-full bg-top bg-cover'
          style={{
            height: "100vh",
            backgroundImage: `url('/images/semana_banner_home.png')`,
          }}
        />
        <>
          {/* SOBRE */}
          <div className='p-10'>
            <div className='w-full'>
              <p>
              A <i>3º Semana de Cinema Negro de Belo Horizonte</i> apresenta, de 09 a 17 de setembro de 2023, 
              um conjunto composto por 70 filmes de cinematografias africanas, negras brasileiras e da diáspora
              distribuídas em: <i>Cinemas Africanos contam suas histórias; 50 Anos de Touki Bouki, 
              Celebrando o Cinema de Djibril Diop Mambéty; Cine-Escrituras Pretas; Cinema Negro e Experimental 
              com Crystal Z Campbell; Sessão Homenagem Maria José Novais Oliveira; 5 Anos de Ponta de Anzol; e 
              Ibejis (Infantil)</i>.
              </p>
              <p>
              O festival acontecerá de forma híbrida, presencialmente e on-line. 
              As exibições presenciais serão realizadas no Cine Humberto Mauro/Palácio das Artes e no Cine Santa Tereza, 
              e toda a programação é gratuita. Os filmes da mostra Cine-Escrituras Pretas estarão disponíveis nas salas de 
              exibição e na plataforma Cine Humberto Mauro Mais (<Link passHref={true} href="https://www.cinehumbertomauromais.com"><a target="_blank" className="text-blue-300">www.cinehumbertomauromais.com</a></Link>). Nesta edição, além das 
              sessões fílmicas, teremos conversas com convidadas e convidados internacionais, bem como debates com realizadoras 
              e realizadores da mostra dedicada aos filmes brasileiros – todos os debates acontecerão presencialmente. 
              Contamos, ainda, com três oficinas: &quot;Sonhando em Palavras&quot;, Escrevendo o Primeiro Longa, ministrada por 
              Diego Paulino, realizada em parceria com a Rede de Talentos do Projeto Paradiso, através do Paradiso Multiplica 
              (presencial); Elaboração e Produção de Projetos, ministrada por Fernanda Vidigal (on-line); 
              Processos de Distribuição do Cinema Independente ministrada por Daniel Queiroz (híbrido).
              </p>
              <p>
              As obras do artista plástico Pedro Neves compõem toda identidade visual desta edição do festival. 
              Em suas obras o artista trabalha com um repertório amplo de narrativas e de imagens que partem das 
              manifestações culturais e dos saberes afro-brasileiros para dialogar com fontes diversas. 
              O projeto gráfico é do nosso parceiro Marco Chagas que, a partir do desenho, pesquisa o 
              cotidiano urbano e suas relações com o pensamento gráfico.
              <br/>Convidamos a todas, todes e todos a acompanharem a programação.
              </p>
            </div>
            <div className="flex w-full justify-start">
            <Link passHref={true} href='https://drive.google.com/file/d/16TYH1g7TdIe1C42gw0zg46Onj_kjPqw7/view?usp=sharing'><button target='_blank' className="text-yellow-100 bg-blue-500 w-1/4 h-8 mt-6 rounded-lg uppercase font-semibold">Baixe a programação</button>
            </Link>
            </div>
          </div>

          {/* VINHETA */}
          <div className='w-full laptop:mt-30 p-2 laptop:p-0'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=K7xzmkpwNoA'
              width='100%'
            />
          </div>
        </>
        <Footer />
      </div>
    </>
  );
}
