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
          <img src="/images/logo-2026.png" alt="Logo SCNBH 2026" className="hover:opacity-80 transition-opacity h-16 md:h-20 object-contain mix-blend-multiply scale-[1.5] origin-left" />
        </Link>
        <div className="flex gap-8 uppercase text-xs font-semibold tracking-wider">
          <Link href="/" className="text-amarelo-ouro transition-colors">Início</Link>
          <Link href="/anteriores" className="hover:text-amarelo-ouro transition-colors">Edições Anteriores</Link>
        </div>
      </header>

      <main className="flex-1 flex w-full pt-40 px-8 pb-8">
        {/* Texto Vertical */}
        <div className="w-24 shrink-0 flex items-start mt-40">
          <p className="whitespace-nowrap text-[10px] tracking-widest uppercase text-barro font-semibold" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            14 - 18 de Outubro de 2026
          </p>
        </div>

        {/* Grid de Imagens estilo Colagem */}
        <div className="flex-1 grid grid-cols-4 grid-rows-4 gap-4 max-w-5xl mx-auto h-[80vh]">
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
      </main>
    </div>
  );
}
