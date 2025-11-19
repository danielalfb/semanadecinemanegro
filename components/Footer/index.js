/* eslint-disable @next/next/no-img-element */
import Button from "../Button";
import {
  EnvelopeSimpleIcon,
  InstagramLogoIcon,
  FacebookLogoIcon,
  YoutubeLogoIcon,
  TwitterLogoIcon,
  PhoneCallIcon
} from "@phosphor-icons/react";
import { SITE_CONTENT } from "../../helpers/content";
import Link from "next/link";
import Wave from "../Wave";

const Footer = () => {
  return (
    <footer className="w-full relative bg-brown text-white z-10">
      <Wave color="var(--color-cream)" />
      <div className="w-full bg-blue-100">
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
                className="text-xs mb-1 hover:underline lowercase"
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
          <div className="block w-full h-px bg-white/30 my-2 leading-none" />
          <div className="flex flex-col items-start pl-0 sm:pl-4">
            <div>
              <span className="text-xs mb-1">
                Semana de Cinema Negro de Belo Horizonte
              </span>
              <span className="flex items-center gap-1 text-xs mb-1">
                <EnvelopeSimpleIcon size={12} color="#fffdf0" weight="light" />
                scnegrobh@gmail.com
              </span>
              <span className="text-xs">Para falar com nossa assessoria de imprensa, entre em contato com:</span>
              <span className="flex items-center gap-1 text-xs mb-1">
                <PhoneCallIcon size={12} color="#fffdf0" weight="light" />
                Flora Miguel 11 95323-2999
              </span>
              <span className="flex items-center gap-1 text-xs mb-1">
                <PhoneCallIcon size={12} color="#fffdf0" weight="light" />
                Izabela Costa 11 97347-1280
              </span>
            </div>
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
                <InstagramLogoIcon size={24} />
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/semana.cinemanegrobh/",
                    "_blank"
                  )
                }
              >
                <FacebookLogoIcon size={24} />
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCWEYVmhTOymK86IAzCmC70g",
                    "_blank"
                  )
                }
              >
                <YoutubeLogoIcon size={24} />
              </Button>
              <Button
                onClick={() => window.open("https://x.com/scnegrobh", "_blank")}
              >
                <TwitterLogoIcon size={24} />
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
              className="text-xs mb-1 hover:underline lowercase"
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
        <div className="absolute left-[60%] top-6 bottom-6 w-px bg-white/30 " />
        <div className="flex flex-col items-start pl-4 ">
          <div className="gap-2">
            <span className="text-xs mb-1">
              Semana de Cinema Negro de Belo Horizonte
            </span>
            <span className="flex items-center gap-1 text-xs mb-1">
              <EnvelopeSimpleIcon size={12} color="#fffdf0" weight="light" />
              scnegrobh@gmail.com
            </span>
            <span className="text-xs">Para falar com nossa assessoria de imprensa, entre em contato com:</span>
            <span className="flex items-center gap-1 text-xs mb-1 mt-4">
              <PhoneCallIcon size={12} color="#fffdf0" weight="light" />
              Flora Miguel 11 95323-2999
            </span>
            <span className="flex items-center gap-1 text-xs mb-1">
              <PhoneCallIcon size={12} color="#fffdf0" weight="light" />
              Izabela Costa 11 97347-1280
            </span>
          </div>
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
              <InstagramLogoIcon size={24} />
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://www.facebook.com/semana.cinemanegrobh/",
                  "_blank"
                )
              }
            >
              <FacebookLogoIcon size={24} />
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCWEYVmhTOymK86IAzCmC70g",
                  "_blank"
                )
              }
            >
              <YoutubeLogoIcon size={24} />
            </Button>
            <Button
              onClick={() => window.open("https://x.com/scnegrobh", "_blank")}
            >
              <TwitterLogoIcon size={24} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
