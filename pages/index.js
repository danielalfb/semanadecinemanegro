import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>SCNBH24</title>
      </Head>

      <div
        className="relative h-screen w-full bg-top bg-cover flex justify-end items-start p-10"
        style={{
          backgroundImage: `url('/images/semana_banner_home.png')`,
        }}
      >
        <div className="temp-page">
          <span className="text-blue-500 text-8xl">em breve</span>
          <div className="more-info text-2xl">
            para mais informações acesse
            <Link
              passHref={true}
              href="https://www.instagram.com/semana.cinemanegrobh?igsh=MWN0d2szN2p4Njdjaw=="
            >
              <a
                target="_blank"
                className="text-blue-700 font-bold hover:shadow-sm"
              >
                @semana.cinemanegrobh
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
