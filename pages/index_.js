import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const imagesMap = [
    "images/semana_banner_home.png",
    "images/semana_home_bg.png",
    "images/semana_home_2.png",
    "images/semana_home_2.png",
    "images/semana_banner_home.png",
    "images/semana_home_bg.png",
  ];

  return (
    <div className="container">
      <div className="bannerContainer">
        <div className="banner">
          {imagesMap.map((src, index) => (
            <div key={index} className="gridItem">
              <Image
                src={`/${src}`}
                alt={`Imagem ${index + 1}`}
                width={500}
                height={500}
                sizes="(max-width: 375px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute w-full top-2 flex justify-center">
          <img
            src="/images/logo_dark.svg"
            style={{ maxWidth: "250px", mixBlendMode: "luminosity" }}
          />
        </div>

        <div className="overlay">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              lineHeight: "10px",
            }}
          >
            <h1 className="centeredText text-pink-100">Em breve</h1>
            <h3 className="legendText text-pink-100">em breve</h3>
          </div>
          <Link
            passHref={true}
            href="https://drive.google.com/file/d/1gVpQU_bMbwDi8KRD0-ugJDAZra2QqUuH/view"
          >
            <a target="_blank" className="scheduleBtn bg-red-600 text-pink-100">
              acessar programação
            </a>
          </Link>
          <Link
            passHref={true}
            href="https://www.instagram.com/semana.cinemanegrobh?igsh=MWN0d2szN2p4Njdjaw=="
          >
            <a target="_blank" className="instagramLink">
              <Image
                src="/images/logo_insta.png"
                width={100}
                height={100}
                alt="Instagram"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
