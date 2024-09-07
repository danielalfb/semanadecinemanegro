import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>SCNBH24</title>
      </Head>

      <div
        className="relative h-screen w-full bg-top bg-cover flex justify-end items-center"
        style={{
          backgroundImage: `url('/images/semana_banner_home.png')`,
        }}
      >
        <div className="temp-page">
          <span>em breve</span>
          <div className="more-info">
            para mais informações acesse
            <Link
              passHref={true}
              href="https://www.instagram.com/semana.cinemanegrobh?igsh=MWN0d2szN2p4Njdjaw=="
            >
              <a target="_blank" className="text-purple-500 hover:shadow-sm">
                {" "}  @semana.cinemanegrobh{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
