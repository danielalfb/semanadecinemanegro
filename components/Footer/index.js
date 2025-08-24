/* eslint-disable @next/next/no-img-element */
import Button from "../Button";
import {
  EnvelopeSimple,
  InstagramLogo,
  Phone,
  FacebookLogo,
  YoutubeLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import { SITE_CONTENT } from "../../helpers/content";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full relative bg-brown text-white z-10">
      <div className="w-full bg-[#f9f9f9]">
        <img
          alt="reguas_logo"
          src="/images/regua_logos_2.png"
          style={{ width: "100%" }}
        />
      </div>
      {/* Mobile/tablet: grid-cols-1, divisórias horizontais */}
      <div className="tablet:hidden">
        <div className="grid grid-cols-1 gap-4 py-6 px-2 items-start relative">
          <div className="flex flex-col items-start justify-center mb-4">
            <img
              alt="logo"
              src="/images/logo.png"
              className="w-24 sm:w-32 mb-2"
              style={{ width: "150px" }}
            />
          </div>
          <div className="block w-full h-px bg-white/30 my-2" />
          <div className="flex flex-col items-start pl-0 sm:pl-4">
            {SITE_CONTENT.mostras?.map((mostra, idx) => (
              <a
                key={idx}
                href={mostra.url}
                className="text-xs mb-1 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {mostra.title}
              </a>
            ))}
          </div>
          <div className="block w-full h-px bg-white/30 my-2" />
          <div className="flex flex-col items-start pl-0 sm:pl-4">
            <Link href="/mostras" className="text-xs mb-1 hover:underline">
              mostras
            </Link>
            <Link
              href="/atividades-formativas"
              className="text-xs mb-1 hover:underline"
            >
              atividades formativas
            </Link>
            <Link href="/anteriores" className="text-xs mb-1 hover:underline">
              edições anteriores
            </Link>
          </div>
          <div className="block w-full h-px bg-white/30 my-2" />
          <div className="flex flex-col items-start pl-0 sm:pl-4">
            <span className="text-xs mb-1">
              Semana de Cinema Negro de Belo Horizonte
            </span>
            <span className="flex items-center gap-1 text-xs mb-1">
              <EnvelopeSimple size={12} color="#fffdf0" weight="light" />
              scnegrobh@gmail.com
            </span>
          </div>
          <div className="block w-full h-px bg-white/30 my-2" />
          <div className="flex flex-col items-start pl-0 sm:pl-4">
            <div className="flex gap-2">
              <Button
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/semana.cinemanegrobh/",
                    "_blank"
                  )
                }
              >
                <InstagramLogo size={24} />
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/semana.cinemanegrobh/",
                    "_blank"
                  )
                }
              >
                <FacebookLogo size={24} />
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCWEYVmhTOymK86IAzCmC70g",
                    "_blank"
                  )
                }
              >
                <YoutubeLogo size={24} />
              </Button>
              <Button
                onClick={() => window.open("https://x.com/scnegrobh", "_blank")}
              >
                <TwitterLogo size={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Laptop: grid-cols-5, divisórias verticais */}
      <div className="mob:hidden tablet:grid grid-cols-5 gap-0 py-6 px-2 items-start relative">
        <div className="flex flex-col items-center justify-center">
          <img
            alt="logo"
            src="/images/logo.png"
            className="w-24 mb-2"
            style={{ width: "150px" }}
          />
        </div>
        <div className="flex flex-col items-start pl-4">
          {SITE_CONTENT.mostras?.map((mostra, idx) => (
            <a
              key={idx}
              href={mostra.url}
              className="text-xs mb-1 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {mostra.title}
            </a>
          ))}
        </div>
        <div className="absolute left-[40%] top-6 bottom-6 w-px bg-white/30" />
        <div className="flex flex-col items-start pl-4">
          <Link href="/mostras" className="text-xs mb-1 hover:underline">
            mostras
          </Link>
          <Link
            href="/atividades-formativas"
            className="text-xs mb-1 hover:underline"
          >
            atividades formativas
          </Link>
          <Link href="/anteriores" className="text-xs mb-1 hover:underline">
            edições anteriores
          </Link>
        </div>
        <div className="absolute left-[60%] top-6 bottom-6 w-px bg-white/30" />
        <div className="flex flex-col items-start pl-4">
          <span className="text-xs mb-1">
            Semana de Cinema Negro de Belo Horizonte
          </span>
          <span className="flex items-center gap-1 text-xs mb-1">
            <EnvelopeSimple size={12} color="#fffdf0" weight="light" />
            scnegrobh@gmail.com
          </span>
        </div>
        <div className="absolute left-[80%] top-6 bottom-6 w-px bg-white/30" />
        <div className="flex flex-col items-start pl-4">
          <div className="flex">
            <Button
              onClick={() =>
                window.open(
                  "https://www.instagram.com/semana.cinemanegrobh/",
                  "_blank"
                )
              }
            >
              <InstagramLogo size={24} />
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://www.facebook.com/semana.cinemanegrobh/",
                  "_blank"
                )
              }
            >
              <FacebookLogo size={24} />
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCWEYVmhTOymK86IAzCmC70g",
                  "_blank"
                )
              }
            >
              <YoutubeLogo size={24} />
            </Button>
            <Button
              onClick={() => window.open("https://x.com/scnegrobh", "_blank")}
            >
              <TwitterLogo size={24} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
