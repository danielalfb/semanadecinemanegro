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
  ArrowSquareOut,
  List,
  X,
} from "@phosphor-icons/react";
const editions = [
  {
    year: 2025,
    title: "5ª Edição",
    color: "bg-amarelo-oxum",
    catalogUrl: null,
    bgImage: "/images/optimized/anteriores_5.jpg",
    description:
      "Conheça a programação, os filmes e os textos da 5ª edição da Semana de Cinema Negro de Belo Horizonte.",
  },
  {
    year: 2024,
    title: "4ª Edição",
    color: "bg-terracota",
    catalogUrl: null,
    bgImage: "/images/optimized/anteriores_4.jpg",
    description:
      "Conheça a programação, os filmes e os textos da 4ª edição da Semana de Cinema Negro de Belo Horizonte.",
  },
  {
    year: 2023,
    title: "3ª Edição",
    color: "bg-azul-sereno",
    catalogUrl:
      "https://drive.google.com/file/d/1cbld8n2xrQfcr73jDnmRV2Bzia4I2S63/view",
    bgImage: "/images/optimized/anteriores_3.jpg",
    description:
      "Conheça a programação, os filmes e os textos da 3ª edição da Semana de Cinema Negro de Belo Horizonte.",
  },
  {
    year: 2022,
    title: "2ª Edição",
    color: "bg-amarelo-ouro",
    catalogUrl:
      "https://semanadecinemanegro-gev133052-danielalfbs-projects.vercel.app/catalogo_2_edicao.pdf",
    bgImage: "/images/optimized/anteriores_2.jpg",
    description:
      "Conheça a programação, os filmes e os textos da 2ª edição da Semana de Cinema Negro de Belo Horizonte.",
  },
  {
    year: 2021,
    title: "1ª Edição",
    color: "bg-argila",
    catalogUrl:
      "https://drive.google.com/file/d/1ZjocdoU0kz1izObQVfFqIxYlOgdMZQ4e/view",
    bgImage: "/images/optimized/anteriores01.jpg",
    description:
      "Conheça a programação, os filmes e os textos da 1ª edição da Semana de Cinema Negro de Belo Horizonte.",
  },
];

function EditionCard({
  edition,
  className,
  imagePosition,
}) {
  return (
    <article
      className={`${className} group relative block overflow-hidden bg-cream-100`}
    >
      <img
        src={edition.bgImage}
        alt={`${edition.title} (${edition.year})`}
        className={`absolute inset-0 h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02] ${imagePosition}`}
      />
      {edition.catalogUrl && (
        <a
          href={edition.catalogUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-4 left-4 z-20 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-barro opacity-100 shadow-sm transition-opacity hover:bg-amarelo-ouro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
        >
          Baixar catálogo
        </a>
      )}
    </article>
  );
}

export default function Anteriores() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream-100 text-barro font-inter flex flex-col">
      <Head>
        <title>Edições Anteriores | SCNBH</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
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
          <span className="text-barro" aria-hidden="true">
            <FacebookLogo size={20} weight="regular" />
          </span>
          <span className="text-barro" aria-hidden="true">
            <YoutubeLogo size={22} weight="regular" />
          </span>
          <span className="text-barro" aria-hidden="true">
            <TwitterLogo size={20} weight="regular" />
          </span>
        </div>
        <div className="relative flex min-h-16 items-center justify-between gap-3 border-y border-barro/10 bg-cream-100 px-4 py-2 md:h-20 md:flex-row md:gap-3 md:px-8 md:py-0">
          <Link
            href="/"
            className="w-fit shrink-0 transition-opacity hover:opacity-80"
          >
            <picture className="block">
              <source srcSet="/images/logo-2026-mobile.png" />
              <img
                src="/images/logo-2026.png"
                alt="Logo SCNBH 2026"
                className="h-auto max-h-12 w-32 object-contain object-left mix-blend-multiply md:max-h-16 md:w-40 md:object-center"
              />
            </picture>
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
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="w-full border-b border-barro/10 py-3 text-xs font-bold uppercase tracking-wider transition-colors hover:text-amarelo-ouro md:w-auto md:border-0 md:py-0 md:text-sm"
            >
              Início
            </Link>
            <Link
              href="/anteriores"
              onClick={() => setMenuOpen(false)}
              className="w-full border-b border-barro/10 py-3 text-xs font-bold uppercase tracking-wider text-amarelo-ouro transition-colors md:w-auto md:border-0 md:py-0 md:text-sm"
            >
              Edições Anteriores
            </Link>
            <div className="mt-3 flex w-full flex-col gap-2 md:mt-0 md:w-auto md:flex-row">
              <a
                href="/images/programacao-web.png"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="inline-flex w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-amarelo-ouro px-3 py-2 text-xs font-bold uppercase tracking-wider text-barro transition-colors hover:bg-amarelo-ouro md:w-auto md:text-xs"
              >
                <DownloadSimple size={16} />
                Baixar programação
              </a>
              <a
                href="https://www.ubuplay.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="inline-flex w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-amarelo-ouro px-3 py-2 text-xs font-bold uppercase tracking-wider text-barro transition-colors hover:bg-amarelo-ouro md:w-auto md:text-xs"
              >
                Acessar Ubuplay
                <ArrowSquareOut size={16} />
              </a>
            </div>
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

        {/* Mosaic compacto: cada coluna respeita a proporção das capas */}
        <div className="grid w-full grid-cols-1 gap-4 md:mx-auto md:max-w-[67rem] md:grid-cols-3 md:items-start">
          <div className="flex flex-col gap-4">
            <EditionCard
              edition={editions[0]}
              className="aspect-[4/5]"
              imagePosition="object-[50%_20%]"
            />
            <EditionCard
              edition={editions[3]}
              className="aspect-[7/10]"
              imagePosition="object-[50%_65%]"
            />
          </div>

          <div className="flex flex-col gap-4 md:col-span-2">
            <div className="grid grid-cols-2 items-end gap-4">
              <EditionCard
                edition={editions[1]}
                className="aspect-[7/10]"
                imagePosition="object-[50%_50%]"
              />
              <EditionCard
                edition={editions[2]}
                className="aspect-[9/16]"
                imagePosition="object-[50%_50%]"
              />
            </div>
            <EditionCard
              edition={editions[4]}
              className="aspect-[16/9] w-full"
              imagePosition="object-[50%_50%]"
            />
          </div>
        </div>
      </main>

      <footer className="w-full bg-barro px-2 py-10 text-cream-100 md:px-8 md:py-12">
        <div className="grid grid-cols-1 gap-0 laptop:grid-cols-[1.2fr_1fr_2fr_auto] laptop:gap-6">
          <Link
            href="/"
            className="flex items-start border-b border-cream-100/20 py-6 transition-opacity hover:opacity-80 laptop:border-0 laptop:py-0"
          >
            <picture className="block">
              <source srcSet="/images/logo-2026-mobile.png" />
              <img
                src="/images/logo-2026.png"
                alt="Logo SCNBH 2026"
                className="h-auto max-h-36 w-40 max-w-none object-contain object-left brightness-0 invert laptop:max-h-20 laptop:w-36 laptop:object-center"
              />
            </picture>
          </Link>

          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-col items-start gap-3 border-b border-cream-100/20 py-6 text-xs laptop:border-0 laptop:py-0"
          >
            <Link
              href="/anteriores"
              className="transition-opacity hover:opacity-70"
            >
              edições anteriores
            </Link>
          </nav>

          <div className="flex flex-col items-start gap-3 border-b border-cream-100/20 py-6 text-xs laptop:border-b-0 laptop:border-l laptop:border-cream-100/20 laptop:py-0 laptop:pl-6">
            <p>Semana de Cinema Negro de Belo Horizonte</p>
            <p className="flex items-center gap-2">
              <EnvelopeSimple size={18} />
              scnegrobh@gmail.com
            </p>
            <p className="mt-2">
              Para falar com nossa assessoria de imprensa, entre em contato com:
            </p>
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

          <div
            aria-label="Redes sociais"
            className="flex items-start gap-5 py-6 laptop:border-l laptop:border-cream-100/20 laptop:py-0 laptop:pl-6"
          >
            <a
              href="https://www.instagram.com/semana.cinemanegrobh"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition-opacity hover:opacity-70"
            >
              <InstagramLogo size={20} />
            </a>
            <span aria-hidden="true">
              <FacebookLogo size={20} />
            </span>
            <span aria-hidden="true">
              <YoutubeLogo size={22} />
            </span>
            <span aria-hidden="true">
              <TwitterLogo size={20} />
            </span>
          </div>
        </div>

        <p className="mt-8 border-t border-cream-100/20 pt-4 text-[10px] font-semibold uppercase tracking-wider">
          © 2026 Semana de Cinema Negro BH. Todos os direitos reservados. Site
          desenvolvido por{" "}
          <a
            href="https://www.meji.com.br/"
            target="_blank"
            rel="noreferrer"
            className="text-amarelo-ouro transition-opacity hover:opacity-70"
          >
            Meji
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
