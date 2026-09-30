import Head from "next/head";
import Link from "next/link";
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
          <h3 className="text-2xl font-bold text-white tracking-widest">
            {edition.year}
          </h3>
          <h2 className="text-sm text-white/90 uppercase">{edition.title}</h2>
        </div>
      </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-between gap-4 overflow-y-auto bg-black/80 p-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest">
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
  return (
    <div className="min-h-screen bg-cream-100 text-barro font-inter flex flex-col pb-12">
      <Head>
        <title>Edições Anteriores | SCNBH</title>
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
          <Link href="/" className="hover:text-amarelo-ouro transition-colors">
            Início
          </Link>
          <Link
            href="/anteriores"
            className="text-amarelo-ouro transition-colors"
          >
            Edições Anteriores
          </Link>
        </div>
      </header>

      <main className="flex-1 flex w-full pt-40 px-8 pb-8">
        {/* Texto Vertical Esquerdo */}
        <div className="w-24 shrink-0 flex items-start mt-40">
          <p
            className="whitespace-nowrap text-[10px] tracking-widest uppercase text-barro font-semibold"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Acervo Histórico
          </p>
        </div>

        {/* Grid de Colagem Assimétrica (Estilo IMG_0387) */}
        <div className="flex-1 grid grid-cols-4 grid-rows-3 gap-6 max-w-6xl mx-auto h-[75vh]">
          {/* Card 2025 (5ª Edição) - Grande à esquerda */}
          <EditionCard
            edition={editions[0]}
            className="col-span-2 row-span-2"
            imagePosition="bg-[position:0%_0%]"
            contentClassName="p-2"
          />

          {/* Texto Decorativo */}
          <div className="col-span-1 row-span-1 flex items-start justify-end p-2 text-xs opacity-50 font-medium">
            ( 01 )
          </div>

          {/* Card 2024 (4ª Edição) - Fino e alto */}
          <EditionCard
            edition={editions[1]}
            className="col-span-1 row-span-2"
            imagePosition="bg-[position:40%_10%]"
          />

          {/* Card 2023 (3ª Edição) - Fino e alto à direita do 2025 */}
          <EditionCard
            edition={editions[3]}
            className="col-span-1 row-span-2"
            imagePosition="bg-[position:70%_50%]"
          />

          {/* Card 2022 (2ª Edição) - Largo na base */}
          <EditionCard
            edition={editions[2]}
            className="col-span-2 row-span-1"
            imagePosition="bg-[position:20%_90%]"
          />

          {/* Card 2021 (1ª Edição) - Quadrado pequeno no canto inferior direito */}
          <EditionCard
            edition={editions[4]}
            className="col-span-1 row-span-1 min-h-[260px]"
            imagePosition="bg-[position:90%_90%]"
          />
        </div>
      </main>
    </div>
  );
}
