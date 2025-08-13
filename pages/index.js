import Head from "next/head";
import Footer from "../components/Footer";

import { InstagramLogoIcon, TreasureChestIcon } from "@phosphor-icons/react";

export default function Home() {
  //RETURN
  return (
    <>
      <Head>
        <title>SCNBH25</title>
      </Head>
      <div
        className="h-screen w-full flex justify-center items-start"
        style={{ backgroundColor: "var(--color-blue)" }}
      >
        <div className="h-screen w-full absolute bg-[url(/images/texture.png)] bg-cover bg-center" />
        <div className="h-screen w-full flex flex-col justify-start items-center z-10 p-8">
          <div className="w-full flex justify-end items-center gap-4  z-10">
            <div
              id="insta"
              className="flex justify-center items-center gap-2 tempPage_menu_links"
              onClick={() =>
                window
                  .open(
                    "https://www.instagram.com/semana.cinemanegrobh/",
                    "_blank"
                  )
                  .focus()
              }
            >
              <InstagramLogoIcon size={24} weight="fill" />
              <span className="text-1xl">Instagram</span>
            </div>
            <div
              id="past"
              className="flex justify-center items-center gap-2 tempPage_menu_links"
              onClick={() => window.open("/anteriores", "_self").focus()}
            >
              <TreasureChestIcon size={24} weight="fill" />
              <span className="text-1xl">Edições anteriores</span>
            </div>
          </div>
          <img
            src="/images/logo.png"
            className="h-auto"
            style={{ width: "500px", marginTop: "100px" }}
          />
          <div
            className="text-8xl"
            style={{ color: "var(--color-blue-dark)", fontFamily: "PicNic" }}
          >
            Em breve
          </div>
        </div>
        <img
          src="/images/elemento_ondas.png"
          className="h-auto w-full absolute bottom-0 left-0"
        />
      </div>
      <Footer />
    </>
  );
}
