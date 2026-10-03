import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
  EnvelopeSimple,
  PhoneCall,
  DownloadSimple,
  List,
  X,
} from "@phosphor-icons/react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream-100 text-barro font-inter flex flex-col">
      <Head>
        <title>Semana de Cinema Negro BH | 6ª Edição</title>
      </Head>

      {/* Header com redes sociais e navegação */}
      <header
        className="fixed left-0 top-0 z-50 w-full text-barro"
        onKeyDown={(event) => event.key === "Escape" && setMenuOpen(false)}
      >
        <div className="flex h-8 items-center justify-end gap-4 bg-cream-200 px-4 md:h-14 md:gap-6 md:px-8">
          <a
            href="https://www.instagram.com/semana.cinemanegrobh"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram da Semana de Cinema Negro BH"
            className="transition-opacity hover:opacity-70"
          >
            <InstagramLogo size={20} weight="fill" />
          </a>
          <span className="text-barro" aria-hidden="true"><FacebookLogo size={20} weight="regular" /></span>
          <span className="text-barro" aria-hidden="true"><YoutubeLogo size={22} weight="regular" /></span>
          <span className="text-barro" aria-hidden="true"><TwitterLogo size={20} weight="regular" /></span>
        </div>
        <div className="relative flex min-h-16 items-center justify-between gap-3 border-y border-barro/10 bg-cream-100 px-4 py-2 md:h-20 md:flex-row md:gap-3 md:px-8 md:py-0">
          <Link href="/" className="w-fit shrink-0 transition-opacity hover:opacity-80">
            <img
              src="/images/logo-2026.png"
              alt="Logo SCNBH 2026"
              className="h-auto max-h-8 w-20 object-contain mix-blend-multiply md:max-h-16 md:w-40"
            />
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-barro/20 md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="menu-principal"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
          <nav
            id="menu-principal"
            aria-label="Navegação principal"
            className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full z-50 flex-col border-b border-barro/10 bg-cream-100 px-4 pb-3 pt-2 shadow-lg md:static md:z-auto md:flex md:w-auto md:flex-row md:items-center md:justify-end md:gap-x-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            <Link href="/" onClick={() => setMenuOpen(false)} className="w-full border-b border-barro/10 py-3 text-xs font-bold uppercase tracking-wider transition-colors hover:text-amarelo-ouro md:w-auto md:border-0 md:py-0 md:text-sm">
              Início
            </Link>
            <Link href="/anteriores" onClick={() => setMenuOpen(false)} className="w-full border-b border-barro/10 py-3 text-xs font-bold uppercase tracking-wider transition-colors hover:text-amarelo-ouro md:w-auto md:border-0 md:py-0 md:text-sm">
              Edições Anteriores
            </Link>
            <a
              href="https://drive.google.com/file/d/1gVpQU_bMbwDi8KRD0-ugJDAZra2QqUuH/view"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-amarelo-ouro px-3 py-2 text-xs font-bold uppercase tracking-wider text-barro transition-colors hover:bg-amarelo-ouro md:mt-0 md:w-auto md:text-xs"
            >
              <DownloadSimple size={16} />
              Baixar programação
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full">

        {/* Seção 1: Grid de Colagem */}
        <section className="flex w-full flex-col gap-3 px-4 pb-6 pt-32 md:h-screen md:flex-row md:px-8 md:pb-8 md:pt-40">
          {/* Texto Vertical */}
          <div className="flex justify-end md:mt-40 md:w-24 md:shrink-0 md:items-start md:justify-start">
            <p className="text-[10px] font-semibold uppercase tracking-widest md:hidden">
              14 - 18 de Outubro de 2026
            </p>
            <p className="hidden whitespace-nowrap text-[10px] font-semibold uppercase tracking-widest text-barro md:block" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              14 - 18 de Outubro de 2026
            </p>
          </div>

          {/* Grid de Imagens estilo Colagem */}
          <div className="grid w-full flex-1 grid-cols-2 auto-rows-[31vw] gap-3 md:mx-auto md:h-full md:max-w-5xl md:grid-cols-4 md:grid-rows-4 md:gap-4">
            <div className="col-span-2 row-span-2 bg-amarelo-oxum overflow-hidden relative group">
              <img src="/images/artwork-hre003.jpg" alt="Obra de Hariel Revignet com uma procissão de figuras carregando cestos" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="hidden col-span-1 row-span-1 items-start justify-end p-2 text-xs opacity-50 md:flex">
              ( 01 &amp; 02 )
            </div>
            <div className="col-span-1 row-span-2 bg-argila overflow-hidden relative group">
              <img src="/images/artwork-hre015.jpg" alt="Obra de Hariel Revignet com duas mulheres sentadas" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-1 row-span-2 bg-amarelo-ouro overflow-hidden relative group">
              <img src="/images/artwork-hre019.jpg" alt="Obra de Hariel Revignet com uma procissão de pessoas" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-1 row-span-2 bg-terracota overflow-hidden relative group">
               <img src="/images/artwork-hre025.jpg" alt="Obra de Hariel Revignet com uma figura diante da água" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-1 row-span-1 bg-azul-sereno overflow-hidden relative group">
               <img src="/images/artwork-hre015-detail.jpg" alt="Detalhe de uma obra de Hariel Revignet" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="hidden col-span-1 row-span-1 items-start p-2 text-xs opacity-50 md:flex">
              ( 03, 04, 05 )
            </div>
            <div className="col-span-1 row-span-2 bg-barro overflow-hidden relative group">
              <img src="/images/artwork-hre006.jpg" alt="Obra de Hariel Revignet com mulheres reunidas" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="hidden col-span-1 row-span-1 items-end justify-center p-2 text-xs opacity-50 md:flex">
              ( 06, 07, 08 )
            </div>
            <div className="col-span-1 row-span-1 bg-amarelo-oxum overflow-hidden relative group">
               <img src="/images/artwork-hre003.jpg" alt="Detalhe da obra de Hariel Revignet com figuras carregando cestos" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </section>

        <p className="mx-auto mt-2 w-full max-w-5xl px-4 pb-6 text-right text-[10px] font-semibold uppercase tracking-wider text-barro/60 md:-mt-6 md:px-8 md:pb-8">
          Créditos: Hariel Revignet
        </p>

        <section aria-label="Apresentação da 5ª edição" className="w-full bg-cream-200 px-6 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-5xl space-y-5 text-sm leading-relaxed md:text-base">
            <p>
              A 5ª Semana de Cinema Negro de Belo Horizonte apresenta, de 16 a 24 de outubro de 2025, um conjunto composto por 45 filmes de cinematografias brasileiras e do mundo, distribuídas em: Cine-Escrituras Pretas; Homenagem Maria José Novais Oliveira: Viviane Ferreira, seguir tendo o direito de experimentar; Cotidiano e Revolucionário - O Cinema de Charles Burnett; Experiência Vivida do Negro - Franz Fanon 100 anos; Tributo ao Cinema Luz de Souleymane Cissé; Do Rio ao Mar: Palestina Livre. E ainda as mostras: A Rememoração no Cinema dos Quilombos; Vampiros à Luz do Meio-Dia - O Cinema de Luiz Lourenço e a Ibejis - Sessão Infantil.
            </p>
            <p>
              O festival acontecerá de forma híbrida, presencialmente e on-line. As exibições presenciais serão realizadas no Cine Humberto Mauro/Palácio das Artes e no Cine Santa Tereza, e toda a programação é gratuita. A mostra Cine-Escrituras Pretas ficará disponível online durante todo o período do festival na ubuplay.com.
            </p>
            <p>
              Nesta edição, além das sessões fílmicas, teremos conversas com realizadores e realizadoras; todas as atividades acontecerão presencialmente. Contamos, ainda, com as oficinas: “Fotolivros Africanos Contemporâneos”, ministrada por Ana Paula Vitorio, e “Introdução à preservação audiovisual digital - conceitos e práticas”, ministrada por Débora Butruce. Teremos também a mesa “Práticas para pensar a formação de público a partir do cinema”, com Danilo Candombe, Layla Braz, Marcos Donizetti, Elaine do Carmo e Viviane Ferreira, além de uma conversa com o cineasta Charles Burnett.
            </p>
            <p>
              As obras da artista plástica Larissa de Souza compõem toda a identidade visual desta edição do festival. Em suas obras, a artista autodidata apresenta pinturas majoritariamente figurativas, concentrando-se na imagem da mulher afro-diaspórica em seu universo particular e coletivo. O projeto gráfico é de Joana Américo e Marco Chagas. Convidamos a todas, todes e todos a acompanharem a programação.
            </p>
          </div>
        </section>

        {/* Seção 2: Vídeo / Vinheta */}
        <section className="w-full pb-16">
          <div className="w-full aspect-video overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dCtTqV0gUkM?rel=0&modestbranding=1&autoplay=1&mute=1"
              title="Vinheta 6ª Semana de Cinema Negro BH"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* Seção 3: Régua de Patrocinadores */}
        <section className="w-full pb-20">
          <img src="/images/logomarcas.jpg" alt="Marcas Patrocinadoras" className="w-full mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity" />
        </section>

      </main>

      <footer className="w-full bg-barro px-6 py-10 text-cream-100 md:px-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 tablet:grid-cols-2 laptop:grid-cols-[1.2fr_1fr_2fr_auto] laptop:gap-6">
          <Link href="/" className="flex items-start transition-opacity hover:opacity-80">
            <img
              src="/images/logo-2026.png"
              alt="Logo SCNBH 2026"
              className="h-auto max-h-20 w-36 object-contain brightness-0 invert"
            />
          </Link>

          <nav aria-label="Navegação do rodapé" className="flex flex-col items-start gap-3 text-xs laptop:border-l laptop:border-cream-100/20 laptop:pl-6">
            <Link href="/anteriores" className="transition-opacity hover:opacity-70">edições anteriores</Link>
          </nav>

          <div className="flex flex-col items-start gap-3 text-xs laptop:border-l laptop:border-cream-100/20 laptop:pl-6">
            <p>Semana de Cinema Negro de Belo Horizonte</p>
            <p className="flex items-center gap-2">
              <EnvelopeSimple size={18} />
              scnegrobh@gmail.com
            </p>
            <p className="mt-2">Para falar com nossa assessoria de imprensa, entre em contato com:</p>
            <div className="mt-2 flex flex-col gap-2">
              <p className="flex min-w-0 items-center gap-2 text-[#ffffff]">
                <PhoneCall size={18} className="shrink-0" />
                Flora Miguel 11 95323-2999
              </p>
              <p className="flex min-w-0 items-center gap-2 text-[#ffffff]">
                <PhoneCall size={18} className="shrink-0" />
                Izabela Costa 11 97347-1280
              </p>
            </div>
          </div>

          <div aria-label="Redes sociais" className="flex items-start gap-5 laptop:border-l laptop:border-cream-100/20 laptop:pl-6">
            <a href="https://www.instagram.com/semana.cinemanegrobh" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-opacity hover:opacity-70">
              <InstagramLogo size={20} />
            </a>
            <span aria-hidden="true"><FacebookLogo size={20} /></span>
            <span aria-hidden="true"><YoutubeLogo size={22} /></span>
            <span aria-hidden="true"><TwitterLogo size={20} /></span>
          </div>
        </div>

        <p className="mt-8 border-t border-cream-100/20 pt-4 text-[10px] font-semibold uppercase tracking-wider">
          © 2026 Semana de Cinema Negro BH. Todos os direitos reservados. Site desenvolvido por{" "}
          <a href="https://www.meji.com.br/" target="_blank" rel="noreferrer" className="text-amarelo-ouro transition-opacity hover:opacity-70">
            Meji
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
