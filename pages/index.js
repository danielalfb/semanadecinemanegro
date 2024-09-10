import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

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
                layout="fill"
                src={`/${src}`}
                alt={`Imagem ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="absolute w-full top-2 flex justify-center">
          <img
            src="/images/logo_dark.svg"
            style={{ maxWidth: "300px", mixBlendMode: "sluminosity" }}
          />
        </div>

        <div className="overlay">
          <h1 className="centeredText text-pink-100">Em breve</h1>

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
