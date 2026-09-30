import Head from "next/head";
import Link from "next/link";

const editions = [
  { year: 2025, title: "5ª Edição", subtitle: "Catálogo", color: "bg-amarelo-oxum", size: "col-span-2 row-span-2" },
  { year: 2024, title: "4ª Edição", subtitle: "Catálogo", color: "bg-terracota", size: "col-span-1 row-span-2" },
  { year: 2023, title: "3ª Edição", subtitle: "Catálogo", color: "bg-amarelo-ouro", size: "col-span-1 row-span-2" },
  { year: 2022, title: "2ª Edição", subtitle: "Catálogo", color: "bg-azul-sereno", size: "col-span-2 row-span-1" },
  { year: 2021, title: "1ª Edição", subtitle: "Catálogo", color: "bg-argila", size: "col-span-1 row-span-1" },
];

export default function Anteriores() {
  return (
    <div className="min-h-screen bg-cream-100 text-barro font-inter flex flex-col pb-12">
      <Head>
        <title>Edições Anteriores | SCNBH</title>
      </Head>

      {/* Header Minimalista com Logo */}
      <header className="w-full fixed top-0 left-0 z-50 flex items-center justify-between p-8 bg-cream-100/90 backdrop-blur-sm">
        <Link href="/">
          <a className="hover:opacity-80 transition-opacity">
            <img src="/images/logo-2026.png" alt="Logo SCNBH 2026" className="h-16 md:h-20 object-contain mix-blend-multiply scale-[1.5] origin-left" />
          </a>
        </Link>
        <div className="flex gap-8 uppercase text-xs font-semibold tracking-wider">
          <Link href="/">
            <a className="hover:text-amarelo-ouro transition-colors">Início</a>
          </Link>
          <Link href="/anteriores">
            <a className="text-amarelo-ouro transition-colors">Edições Anteriores</a>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex w-full pt-40 px-8 pb-8">
        {/* Texto Vertical Esquerdo */}
        <div className="w-24 shrink-0 flex items-start mt-40">
          <p className="whitespace-nowrap text-[10px] tracking-widest uppercase text-barro font-semibold" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            Acervo Histórico
          </p>
        </div>

        {/* Grid de Colagem Assimétrica (Estilo IMG_0387) */}
        <div className="flex-1 grid grid-cols-4 grid-rows-3 gap-6 max-w-6xl mx-auto h-[75vh]">
          
          {/* Card 2025 (5ª Edição) - Grande à esquerda */}
          <Link href="#">
            <a className="col-span-2 row-span-2 bg-amarelo-oxum overflow-hidden relative group rounded-md shadow-lg block hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-[url('/images/Obras_Hariel_Revignet_sem_fundo.png')] bg-cover bg-no-repeat bg-[position:0%_0%] opacity-40 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-4xl font-bold text-white tracking-widest">{editions[0].year}</h3>
                <h2 className="text-lg text-white/90 uppercase">{editions[0].title}</h2>
              </div>
            </a>
          </Link>

          {/* Texto Decorativo */}
          <div className="col-span-1 row-span-1 flex items-start justify-end p-2 text-xs opacity-50 font-medium">
            ( 01 )
          </div>

          {/* Card 2024 (4ª Edição) - Fino e alto */}
          <Link href="#">
            <a className="col-span-1 row-span-2 bg-terracota overflow-hidden relative group rounded-md shadow-lg block hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-[url('/images/Obras_Hariel_Revignet_sem_fundo.png')] bg-cover bg-no-repeat bg-[position:40%_10%] opacity-50 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-2xl font-bold text-white tracking-widest">{editions[1].year}</h3>
                <h2 className="text-sm text-white/90 uppercase">{editions[1].title}</h2>
              </div>
            </a>
          </Link>

          {/* Card 2023 (3ª Edição) - Fino e alto à direita do 2025 */}
          <Link href="#">
            <a className="col-span-1 row-span-2 bg-amarelo-ouro overflow-hidden relative group rounded-md shadow-lg block hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-[url('/images/Obras_Hariel_Revignet_sem_fundo.png')] bg-cover bg-no-repeat bg-[position:70%_50%] opacity-40 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-2xl font-bold text-white tracking-widest">{editions[2].year}</h3>
                <h2 className="text-sm text-white/90 uppercase">{editions[2].title}</h2>
              </div>
            </a>
          </Link>

          {/* Card 2022 (2ª Edição) - Largo na base */}
          <Link href="#">
            <a className="col-span-2 row-span-1 bg-azul-sereno overflow-hidden relative group rounded-md shadow-lg block hover:-translate-y-1 transition-all duration-300">
               <div className="absolute inset-0 bg-[url('/images/Obras_Hariel_Revignet_sem_fundo.png')] bg-cover bg-no-repeat bg-[position:20%_90%] opacity-50 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 p-4 flex flex-col justify-center items-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <h3 className="text-3xl font-bold text-white tracking-widest">{editions[3].year}</h3>
                  <h2 className="text-md text-white/90 uppercase">{editions[3].title}</h2>
               </div>
            </a>
          </Link>

          {/* Card 2021 (1ª Edição) - Quadrado pequeno no canto inferior direito */}
          <Link href="#">
            <a className="col-span-1 row-span-1 bg-argila overflow-hidden relative group rounded-md shadow-lg block hover:-translate-y-1 transition-all duration-300">
               <div className="absolute inset-0 bg-[url('/images/Obras_Hariel_Revignet_sem_fundo.png')] bg-cover bg-no-repeat bg-[position:90%_90%] opacity-50 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-xl font-bold text-white tracking-widest">{editions[4].year}</h3>
                  <h2 className="text-xs text-white/90 uppercase">{editions[4].title}</h2>
               </div>
            </a>
          </Link>

        </div>
      </main>
    </div>
  );
}
