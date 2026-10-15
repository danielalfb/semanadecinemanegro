import Head from "next/head";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

function ArtworkTile({
  src,
  alt,
  title,
  details,
  className = "",
  imageFit = "object-cover",
}) {
  return (
    <div
      tabIndex={title ? 0 : undefined}
      aria-label={title ? `${title}. ${details.join(". ")}` : undefined}
      className={`group relative overflow-hidden bg-cream-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amarelo-ouro ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full ${imageFit} transition-transform duration-500 ease-out group-hover:scale-[1.03] group-focus:scale-[1.03]`}
      />
      {title && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-barro/90 px-3 py-3 text-cream-100 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 md:px-4 md:py-4">
          <p className="font-inter text-[11px] font-bold leading-tight md:text-xs">
            {title}
          </p>
          <div className="mt-1 space-y-0.5 font-inter text-[10px] leading-tight text-cream-100/85 md:text-[11px]">
            {details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-100 text-barro font-inter flex flex-col">
      <Head>
        <title>Semana de Cinema Negro BH | 6ª Edição</title>
        <meta
          name="description"
          content="De 14 a 18 de outubro de 2026, a 6ª Semana de Cinema Negro de Belo Horizonte apresenta 27 filmes, oficinas, estudos de caso e debates, com programação gratuita."
        />
        <meta
          name="keywords"
          content="Semana de Cinema Negro, cinema negro, Belo Horizonte, SCNBH, filmes, festival de cinema, 2026"
        />
        <meta
          property="og:title"
          content="Semana de Cinema Negro BH | 6ª Edição"
        />
        <meta
          property="og:description"
          content="De 14 a 18 de outubro de 2026, a 6ª Semana de Cinema Negro de Belo Horizonte apresenta 27 filmes, oficinas, estudos de caso e debates, com programação gratuita."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Semana de Cinema Negro BH" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Semana de Cinema Negro BH | 6ª Edição"
        />
        <meta
          name="twitter:description"
          content="De 14 a 18 de outubro de 2026, a 6ª Semana de Cinema Negro de Belo Horizonte apresenta 27 filmes, oficinas, estudos de caso e debates, com programação gratuita."
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <SiteHeader activePage="home" />

      <main className="flex-1 flex flex-col w-full">
        {/* Seção 1: Grid de Colagem */}
        <section className="flex w-full flex-col gap-3 px-4 pb-6 pt-32 md:h-[calc(100vh-20px)] md:flex-row md:px-8 md:pb-8 md:pt-[149px]">
          {/* Texto Vertical */}
          <div className="flex justify-end md:mt-40 md:w-24 md:shrink-0 md:items-start md:justify-start">
            <p className="text-[18px] font-semibold uppercase tracking-widest md:hidden">
              14 - 18 de Outubro de 2026
            </p>
            <p
              className="hidden whitespace-nowrap text-[18px] font-semibold uppercase tracking-widest text-barro md:block"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              14 - 18 de Outubro de 2026
            </p>
          </div>

          {/* Grid de Imagens estilo Colagem */}
          <div className="grid w-full flex-1 grid-cols-2 auto-rows-[31vw] gap-3 md:mx-auto md:h-full md:max-w-[67rem] md:grid-cols-4 md:grid-rows-4 md:gap-4">
            <ArtworkTile
              src="/images/artwork-hre003.jpg"
              alt="Obra de Hariel Revignet com uma procissão de figuras carregando cestos"
              title="Nascentes, águas do fundo da terra que descem do céu., 2023"
              details={["Acrílica sobre tela", "154 x 184 cm"]}
              className="col-span-2 row-span-2 md:col-start-1 md:row-start-1"
            />
            <div className="hidden col-span-1 row-span-1 items-start justify-end p-2 text-xs opacity-50 md:flex md:col-start-3 md:row-start-1"></div>
            <ArtworkTile
              src="/images/artwork-hre015.jpg"
              alt="Obra de Hariel Revignet com duas mulheres sentadas"
              title="A casa Nago, 2023"
              details={[
                "Acrílica e bordado s/ tela",
                "184 x 155 cm · 72 1/2 x 61 in",
                "Direito Autoral do Artista",
                "Foto: Leonardo Mitre e Estúdio em Obra",
              ]}
              className="col-span-1 row-span-2 md:col-start-4 md:row-start-1"
            />
            <ArtworkTile
              src="/images/artwork-hre019.jpg"
              alt="Obra de Hariel Revignet com uma procissão de pessoas"
              title="Ziguidás, 2024"
              details={["Acrílica com costura de miçangas", "30 x 150 cm"]}
              className="col-span-1 row-span-2 md:col-start-3 md:row-start-2"
            />
            <ArtworkTile
              src="/images/artwork-hre025.jpg"
              alt="Obra de Hariel Revignet com uma figura diante da água"
              title="Odo Niera Fie Kwan, 2024"
              details={["60 x 60 cm", "Acrílica com costura de miçangas"]}
              className="col-span-1 row-span-2 md:col-start-1 md:row-start-3"
            />
            <ArtworkTile
              src="/images/artwork-hre015-detail.jpg"
              alt="Detalhe de uma obra de Hariel Revignet"
              title="A casa Nago, 2023"
              details={[
                "Acrílica e bordado s/ tela",
                "184 x 155 cm · 72 1/2 x 61 in",
                "Direito Autoral do Artista",
                "Foto: Leonardo Mitre e Estúdio em Obra",
              ]}
              imageFit="object-contain"
              className="col-span-1 row-span-1 md:col-start-2 md:row-start-3"
            />
            <div className="hidden col-span-1 row-span-1 items-start p-2 text-xs opacity-50 md:flex md:col-start-4 md:row-start-3"></div>
            <ArtworkTile
              src="/images/artwork-hre006.jpg"
              alt="Obra de Hariel Revignet com mulheres reunidas"
              title="Nascentes, Omi Tutu Onã, 2023"
              details={["Acrílica sobre tela", "60 x 60 cm"]}
              className="col-span-1 row-span-2 md:col-start-2 md:row-start-4 md:row-span-1"
            />
            <div className="hidden col-span-1 row-span-1 items-end justify-center p-2 text-xs opacity-50 md:flex md:col-start-3 md:row-start-4"></div>
            <ArtworkTile
              src="/images/artwork-hre003.jpg"
              alt="Detalhe da obra de Hariel Revignet com figuras carregando cestos"
              title="Nascentes, águas do fundo da terra que descem do céu., 2023"
              details={["Acrílica sobre tela", "154 x 184 cm"]}
              className="col-span-1 row-span-1 md:col-start-4 md:row-start-4"
            />
          </div>
        </section>

        <p className="mx-auto mt-2 w-full max-w-5xl px-4 pb-6 text-right text-[10px] font-semibold uppercase tracking-wider text-barro/60 md:-mt-6 md:px-8 md:pb-8">
          Créditos: Hariel Revignet
        </p>

        <section
          aria-label="Apresentação da 6ª edição"
          className="w-full bg-cream-200 px-6 py-12 md:px-8 md:py-16"
        >
          <div className="apresentacao-texto mx-auto max-w-5xl space-y-5 text-sm leading-relaxed md:text-base">
            <h2 className="font-inter text-lg font-bold tracking-widest text-barro md:text-xl">
              <em>
                Há coisas que só conseguimos enxergar quando uma luz se acende.
              </em>
            </h2>
            <p>
              De 14 a 18 de outubro de 2026, a{" "}
              <strong>Semana de Cinema Negro</strong> realiza sua 6ª edição.
              Depois de chegar a ser cancelada por falta de recursos, a Semana
              renasce a partir do encontro, da confiança e da construção
              coletiva. Nesta edição, o <strong>Minas Tênis Clube</strong> é
              correalizador do festival.
            </p>
            <p>
              Com programação gratuita, a Semana reúne 27 filmes brasileiros e
              internacionais, além de oficinas, estudos de caso e debates com
              realizadoras e realizadores. Entre os destaques estão o filme de
              abertura <em>Ana, en passant</em>, o primeiro longa de animação de
              uma diretora negra a entrar no circuito comercial de exibição, a
              mostra
              <em> (RE) EXISTIMOS! Cinemas negros, para onde queremos ir?</em>,
              dedicada a longas-metragens brasileiros contemporâneos; a
              celebração dos 30 anos de <em>The Watermelon Woman</em>, de Cheryl
              Dunye, e dos 70 anos do cineasta Marlon Riggs; e a{" "}
              <em>
                Homenagem Maria José Novais Oliveira: Grace Passô - Linguagens
                em Expansão
              </em>
              . A programação inclui ainda a mostra{" "}
              <strong>Cine-Escrituras Pretas</strong>, sessões para o público
              infantil na Mostra Ibejis e atividades formativas voltadas à
              formação e à ampliação do conhecimento no campo audiovisual.
            </p>
            <p>
              O festival será realizado em formato híbrido, com atividades
              presenciais e online. As exibições presenciais acontecerão no
              Centro Cultural UNIMED-MINAS. A mostra Cine-Escrituras Pretas
              ficará disponível na plataforma{" "}
              <a
                href="https://www.ubuplay.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline underline-offset-2 transition-opacity hover:opacity-80"
              >
                UBUPLAY
              </a>{" "}
              em novembro.
            </p>
            <p>
              Em paralelo, de 12 a 18 de outubro a 3ª edição da{" "}
              <strong>SemanaLab - Residência em Distribuição</strong>, o eixo
              formativo da Semana de Cinema Negro, ocorrerá com apoio do{" "}
              <strong>Instituto Cervantes</strong> e{" "}
              <strong>Projeto Paradiso</strong>. Esta edição é focada em
              distribuição de filmes e traz quatro jovens (sendo um de Belém,
              uma de Natal e outras duas de Belo Horizonte) que buscam na
              distribuição uma carreira no cinema.
            </p>
            <p>
              A identidade visual desta edição é composta por obras de{" "}
              <strong>Hariel Revignet</strong>. Em suas criações, vemos a luz
              que atravessa o festival e que também carrega um gesto de abertura
              de caminhos e de encontro entre comunidades. É assim que
              entendemos os cinemas negros: como práticas que se afirmam no
              presente, elaboram memórias, inventam linguagens e movimentam os
              mundos que habitamos.
            </p>
            <p>
              A Semana acontece porque muitas pessoas aceitaram o convite para
              fazer acontecer. A cada uma delas, nosso agradecimento por
              reacender essa luz conosco. Seguimos, porque existir também é
              construir caminhos para que outras existências possam ver as
              estrelas brilharem.
            </p>
          </div>
        </section>

        {/* Seção 2: Vídeo / Vinheta */}
        <section className="w-full">
          <div className="w-full aspect-video overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/cWj-MPSb9dc?si=L6hQtfNVQ7o5i5I7?rel=0&modestbranding=1&autoplay=1&mute=1"
              title="Vinheta 6ª Semana de Cinema Negro BH"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* Seção 3: Régua de Patrocinadores */}
        <section className="w-full">
          <img
            src="/images/logomarcas.png"
            alt="Marcas Patrocinadoras"
            className="w-full mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity"
          />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
