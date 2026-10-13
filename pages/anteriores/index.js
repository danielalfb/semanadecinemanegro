import Head from "next/head";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
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
  return (
    <div className="min-h-screen bg-cream-100 text-barro font-inter flex flex-col">
      <Head>
        <title>Edições Anteriores | SCNBH</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <SiteHeader activePage="anteriores" />

      <main className="flex w-full flex-1 flex-col gap-3 px-4 pb-8 pt-32 md:flex-row md:px-8 md:pt-40">
        {/* Texto Vertical Esquerdo */}
        <div className="flex justify-end md:mt-40 md:w-24 md:shrink-0 md:items-start md:justify-start">
          <p className="text-base font-semibold uppercase tracking-widest md:hidden">
            Acervo Histórico
          </p>
          <p
            className="hidden whitespace-nowrap text-lg font-semibold uppercase tracking-widest text-barro lg:text-xl md:block"
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

      <section className="w-full">
        <img
          src="/images/logomarcas.png"
          alt="Marcas patrocinadoras"
          className="w-full mix-blend-multiply opacity-90 transition-opacity hover:opacity-100"
        />
      </section>

      <SiteFooter />
    </div>
  );
}
