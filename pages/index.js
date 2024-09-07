import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>SCNBH24</title>
      </Head>

      <div
        className="relative h-screen w-full bg-top bg-cover flex justify-center items-center"
        style={{
          backgroundImage: `url('/images/semana_banner_home.png')`,
        }}
      >
        <div>
          <span>em breve</span>
          <div>
            para mais informações acesse
            <Link
              passHref={true}
              href="https://www.instagram.com/semana.cinemanegrobh?igsh=MWN0d2szN2p4Njdjaw=="
            >
              <a target="_blank" className="text-yellow-100 hover:shadow-sm">
                @semana.cinemanegrobh{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
