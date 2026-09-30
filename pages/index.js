import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-cream-100 text-barro font-inter flex flex-col">
      <Head>
        <title>Semana de Cinema Negro BH | 6ª Edição</title>
      </Head>

      {/* Header Minimalista com Logo */}
      <header className="w-full fixed top-0 left-0 z-50 flex items-center justify-between p-8 bg-cream-100/90 backdrop-blur-sm">
        <Link href="/">
          <img
            src="/images/logo-2026.png"
            alt="Logo SCNBH 2026"
            className="hover:opacity-80 transition-opacity h-16 md:h-20 object-contain mix-blend-multiply scale-[1.5] origin-left"
          />
        </Link>
        <div className="flex gap-8 uppercase text-xs font-semibold tracking-wider">
          <Link href="/" className="text-amarelo-ouro transition-colors">
            Início
          </Link>
          <Link
            href="/anteriores"
            className="hover:text-amarelo-ouro transition-colors"
          >
            Edições Anteriores
          </Link>
        </div>
      </header>

      <main className="flex-1 flex w-full pt-40 px-8 pb-8">
        {/* Texto Vertical */}
        <div className="w-24 shrink-0 flex items-start mt-40">
          <p
            className="whitespace-nowrap text-[10px] tracking-widest uppercase text-barro font-semibold"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            14 - 18 de Outubro de 2026
          </p>
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          {/* Grid de Imagens estilo Colagem */}
          <div className="w-full grid grid-cols-4 grid-rows-4 gap-4 max-w-5xl mx-auto h-[80vh]">
            {/* Slice 1 */}
            <div className="col-span-2 row-span-2 bg-amarelo-oxum overflow-hidden relative group">
              <div className="absolute w-[200%] h-[200%] bg-[url('/images/Obras_Hariel_Revignet_sem_fundo.png')] bg-cover bg-no-repeat bg-[position:0%_0%] transition-transform duration-700 group-hover:scale-105" />
            </div>

            {/* Text block */}
            <div className="col-span-1 row-span-1 flex items-start justify-end p-2 text-xs opacity-50">
              ( 01 & 02 )
            </div>

            {/* Slice 2 */}
            <div className="col-span-1 row-span-2 bg-argila overflow-hidden relative group">
              <div className="absolute w-[400%] h-[200%] bg-[url('/images/Obras_Hariel_Revignet_sem_fundo.png')] bg-cover bg-no-repeat bg-[position:30%_10%] transition-transform duration-700 group-hover:scale-105" />
            </div>

            {/* Slice 3 */}
            <div className="col-span-1 row-span-2 bg-amarelo-ouro overflow-hidden relative group">
              <div className="absolute w-[400%] h-[200%] bg-[url('/images/Obras_Hariel_Revignet_sem_fundo.png')] bg-cover bg-no-repeat bg-[position:60%_30%] transition-transform duration-700 group-hover:scale-105" />
            </div>

            {/* Slice 4 */}
            <div className="col-span-1 row-span-2 bg-terracota overflow-hidden relative group">
              <div className="absolute w-[400%] h-[200%] bg-[url('/images/Obras_Hariel_Revignet_sem_fundo.png')] bg-cover bg-no-repeat bg-[position:10%_80%] transition-transform duration-700 group-hover:scale-105" />
            </div>

            {/* Slice 5 */}
            <div className="col-span-1 row-span-1 bg-azul-sereno overflow-hidden relative group">
              <div className="absolute w-[400%] h-[400%] bg-[url('/images/Obras_Hariel_Revignet_sem_fundo.png')] bg-cover bg-no-repeat bg-[position:80%_60%] transition-transform duration-700 group-hover:scale-105" />
            </div>

            {/* Text block */}
            <div className="col-span-1 row-span-1 flex items-start p-2 text-xs opacity-50">
              ( 03, 04, 05 )
            </div>

            {/* Slice 6 */}
            <div className="col-span-1 row-span-2 bg-barro overflow-hidden relative group">
              <div className="absolute w-[400%] h-[200%] bg-[url('/images/Obras_Hariel_Revignet_sem_fundo.png')] bg-cover bg-no-repeat bg-[position:100%_100%] transition-transform duration-700 group-hover:scale-105" />
            </div>

            {/* Text block */}
            <div className="col-span-1 row-span-1 flex items-end justify-center p-2 text-xs opacity-50">
              ( 06, 07, 08 )
            </div>

            {/* Slice 7 */}
            <div className="col-span-1 row-span-1 bg-amarelo-oxum overflow-hidden relative group">
              <div className="absolute w-[400%] h-[400%] bg-[url('/images/Obras_Hariel_Revignet_sem_fundo.png')] bg-cover bg-no-repeat bg-[position:40%_90%] transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* Apresentação e vídeo */}
          <section className="w-full max-w-6xl mx-auto mt-16 md:mt-24 flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-8 md:pt-12">
            <p className="w-full md:flex-1 min-w-0 text-sm md:text-base leading-relaxed tracking-wide">
              A 5º Semana de Cinema Negro de Belo Horizonte apresenta, de 16 a
              24 de outubro de 2025, um conjunto composto por 45 filmes de
              cinematografias brasileiras e do mundo, distribuídas em:
              Cine-Escrituras Pretas; Homenagem Maria José Novais Oliveira:
              Viviane Ferreira, seguir tendo o direito de experimentar;
              Cotidiano e Revolucionário - O Cinema de Charles Burnett;
              Experiência Vivida do Negro - Franz Fanon 100 anos; Tributo ao
              Cinema Luz de Souleymane Cissé; Do Rio ao Mar: Palestina Livre. E
              ainda as mostras: A Rememoração no Cinema dos Quilombos; Vampiros
              à Luz do Meio-Dia - O Cinema de Luiz Lourenço e a Ibejis - Sessão
              Infantil.
              <br /> <br />
              O festival acontecerá de forma híbrida, presencialmente e on-line.
              As exibições presenciais serão realizadas no Cine Humberto
              Mauro/Palácio das Artes e no Cine Santa Tereza, e toda a
              programação é gratuita. A mostra Cine-Escrituras Pretas ficará
              disponível online durante todo o período do festival na
              ubuplay.com.
              <br /> <br />
              Nesta edição, além das sessões fílmicas, teremos conversas
              realizadores e realizadoras, todas as atividades acontecerão
              presencialmente. Contamos, ainda, com as oficinas: &quot;Fotolivros
              Africanos Contemporâneos&quot;, ministrada por Ana Paula Vitorio e
              &quot;Introdução à preservação audiovisual digital - conceitos e
              práticas&quot;, ministrada por Débora Butruce. Teremos também a mesa
              &quot;Práticas para pensar a formação de público a partir do cinema&quot;,
              com Danilo Candombe, Layla Braz, Marcos Donizetti, Elaine do Carmo
              e Viviane Ferreira, além de uma conversa com o cineasta Charles
              Burnett.
              <br /> <br />
              As obras da artista plástica Larissa de Souza compõem toda
              identidade visual desta edição do festival. Em suas obras a
              artista autodidata apresenta pinturas majoritariamente
              figurativas, concentrando-se na imagem da mulher afro diaspórica
              em seu universo particular e coletivo. O projeto gráfico é da
              Joana Américo e do Marco Chagas. Convidamos a todas, todes e todos
              a acompanharem a programação.
            </p>

            <div className="w-full md:flex-1 min-w-0 flex justify-end p-8 md:p-16">
              <div className="w-full max-w-xs aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ysR5NFov00c?autoplay=1&mute=1&controls=0&iv_load_policy=3&rel=0"
                  title="Vídeo da Semana de Cinema Negro de Belo Horizonte"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
