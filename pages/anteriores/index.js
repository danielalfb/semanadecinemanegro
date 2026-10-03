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
import ReactMarkdown from "react-markdown";

const editions = [
  {
    year: 2025,
    title: "5ª Edição",
    color: "bg-amarelo-oxum",
    catalogUrl: null,
    bgImage: null,
    description:
      "Conheça a programação, os filmes e os textos da 5ª edição da Semana de Cinema Negro de Belo Horizonte.",
  },
  {
    year: 2024,
    title: "4ª Edição",
    color: "bg-terracota",
    catalogUrl: null,
    bgImage: null,
    description:
      "Conheça a programação, os filmes e os textos da 4ª edição da Semana de Cinema Negro de Belo Horizonte.",
  },
  {
    year: 2023,
    title: "3ª Edição",
    color: "bg-azul-sereno",
    catalogUrl:
      "https://drive.google.com/file/d/1cbld8n2xrQfcr73jDnmRV2Bzia4I2S63/view",
    bgImage: "./images/catalogo3.jpeg",
    description:
      "Conheça a programação, os filmes e os textos da 3ª edição da Semana de Cinema Negro de Belo Horizonte.",
  },
  {
    year: 2022,
    title: "2ª Edição",
    color: "bg-amarelo-ouro",
    catalogUrl:
      "https://semanadecinemanegro-gev133052-danielalfbs-projects.vercel.app/catalogo_2_edicao.pdf",
    bgImage: "./images/catalogo2.jpeg",
    description:
      "Conheça a programação, os filmes e os textos da 2ª edição da Semana de Cinema Negro de Belo Horizonte.",
  },
  {
    year: 2021,
    title: "1ª Edição",
    color: "bg-argila",
    catalogUrl:
      "https://drive.google.com/file/d/1ZjocdoU0kz1izObQVfFqIxYlOgdMZQ4e/view",
    bgImage: "./images/catalogo1.jpeg",
    description:
      "Conheça a programação, os filmes e os textos da 1ª edição da Semana de Cinema Negro de Belo Horizonte.",
  },
];

function EditionCard({
  edition,
  className,
  imagePosition,
  contentClassName = "",
}) {
  return (
    <article
      className={`${className} ${edition.color} overflow-hidden relative group rounded-md shadow-lg block hover:-translate-y-1 transition-all duration-300`}
    >
      <div
        className={`absolute inset-0 bg-cover bg-no-repeat ${imagePosition} opacity-40 mix-blend-multiply group-hover:scale-105 transition-transform duration-700`}
        style={{
          backgroundImage: `url(${edition.bgImage || "/images/Obras_Hariel_Revignet_sem_fundo.png"})`,
        }}
      />
      <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent">
        <div
          className={`${contentClassName} transition-opacity duration-300 group-hover:opacity-0`}
        >
          <h3 className="font-karrik text-2xl font-bold text-white tracking-widest md:group-hover:opacity-0">
            {edition.year}
          </h3>
          <h2 className="font-karrik text-sm text-white/90 uppercase md:group-hover:opacity-0">{edition.title}</h2>
        </div>
      </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-between gap-4 bg-black/80 p-5 text-white opacity-100 transition-opacity duration-300 md:pointer-events-none md:opacity-0 md:group-hover:pointer-events-auto md:group-hover:opacity-100">
        <div>
          <p className="mb-2 font-karrik text-xs font-semibold uppercase tracking-widest">
            {edition.year} · {edition.title}
          </p>
          <ReactMarkdown
            className="text-sm leading-relaxed [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-amarelo-ouro"
            components={{
              a: ({ node, ...props }) => (
                <a {...props} target="_blank" rel="noreferrer" />
              ),
            }}
          >
            {edition.description}
          </ReactMarkdown>
        </div>
        {edition.catalogUrl && (
          <a
            href={edition.catalogUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-barro transition-colors hover:bg-amarelo-ouro"
          >
            Baixar catalogo
          </a>
        )}
      </div>
    </article>
  );
}

export default function Anteriores() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream-100 text-barro font-inter flex flex-col">
      <Head>
        <title>Edições Anteriores | SCNBH</title>
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
            <Link href="/anteriores" onClick={() => setMenuOpen(false)} className="w-full border-b border-barro/10 py-3 text-xs font-bold uppercase tracking-wider text-amarelo-ouro transition-colors md:w-auto md:border-0 md:py-0 md:text-sm">
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

      <main className="flex w-full flex-1 flex-col gap-3 px-4 pb-8 pt-32 md:flex-row md:px-8 md:pt-40">
        {/* Texto Vertical Esquerdo */}
        <div className="flex justify-end md:mt-40 md:w-24 md:shrink-0 md:items-start md:justify-start">
          <p className="text-[10px] font-semibold uppercase tracking-widest md:hidden">
            Acervo Histórico
          </p>
          <p
            className="hidden whitespace-nowrap text-[10px] font-semibold uppercase tracking-widest text-barro md:block"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Acervo Histórico
          </p>
        </div>

        {/* Grid de Colagem Assimétrica (Estilo IMG_0387) */}
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 auto-rows-[260px] gap-4 md:flex-1 md:grid-cols-4 md:grid-rows-4 md:gap-6 md:h-[120vh] md:min-h-[930px]">
          {/* Card 2025 (5ª Edição) - Grande à esquerda */}
          <EditionCard
            edition={editions[0]}
            className="col-span-1 row-span-1 md:col-span-2 md:row-span-2"
            imagePosition="bg-[position:0%_0%]"
            contentClassName="p-2"
          />

          {/* Texto Decorativo */}
          <div className="hidden col-span-1 row-span-1 items-start justify-end p-2 text-xs font-medium opacity-50 md:flex">
            ( 01 )
          </div>

          {/* Card 2024 (4ª Edição) - Fino e alto */}
          <EditionCard
            edition={editions[1]}
            className="col-span-1 row-span-1 md:col-span-1 md:row-span-2"
            imagePosition="bg-[position:40%_10%]"
          />

          {/* Card 2023 (3ª Edição) - Fino e alto à direita do 2025 */}
          <EditionCard
            edition={editions[3]}
            className="col-span-1 row-span-1 md:col-span-1 md:row-span-2"
            imagePosition="bg-[position:70%_50%]"
          />

          {/* Card 2022 (2ª Edição) - Largo na base */}
          <EditionCard
            edition={editions[2]}
            className="col-span-1 row-span-1 md:col-span-2 md:row-span-1"
            imagePosition="bg-[position:20%_90%]"
          />

          {/* Card 2021 (1ª Edição) - Quadrado pequeno no canto inferior direito */}
          <EditionCard
            edition={editions[4]}
            className="col-span-1 row-span-1 md:col-span-1 md:row-span-2"
            imagePosition="bg-[position:90%_90%]"
          />
        </div>
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
