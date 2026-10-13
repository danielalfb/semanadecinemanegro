import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
  EnvelopeSimple,
  PhoneCall,
} from "@phosphor-icons/react";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-barro px-2 py-10 text-cream-100 md:px-8 md:py-12">
        <div className="grid grid-cols-1 gap-0 laptop:grid-cols-[1.2fr_1fr_2fr_auto] laptop:gap-6">
          <Link
            href="/"
            className="flex items-start border-b border-cream-100/20 py-6 transition-opacity hover:opacity-80 laptop:border-0 laptop:py-0"
          >
            <picture className="block">
              <source srcSet="/images/logo-2026-mobile.png" />
              <img
                src="/images/logo-2026.png"
                alt="Logo SCNBH 2026"
                className="h-auto max-h-36 w-40 max-w-none object-contain object-left brightness-0 invert laptop:max-h-20 laptop:w-36 laptop:object-center"
              />
            </picture>
          </Link>

          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-col items-start gap-3 border-b border-cream-100/20 py-6 text-xs laptop:border-0 laptop:py-0"
          >
            <Link href="/anteriores" className="transition-opacity hover:opacity-70">
              edições anteriores
            </Link>
          </nav>

          <div className="flex flex-col items-start gap-3 border-b border-cream-100/20 py-6 text-xs laptop:border-b-0 laptop:border-l laptop:border-cream-100/20 laptop:py-0 laptop:pl-6">
            <p>Semana de Cinema Negro de Belo Horizonte</p>
            <p className="flex items-center gap-2">
              <EnvelopeSimple size={18} />
              scnegrobh@gmail.com
            </p>
            <p className="mt-2">
              Para falar com nossa assessoria de imprensa, entre em contato com:
            </p>
            <div className="mt-2 flex flex-col gap-2">
              <p className="flex min-w-0 items-center gap-2 text-[#ffffff]">
                <PhoneCall size={18} className="shrink-0" />
                Mariana Cordeiro 31 98782-1287
              </p>
            </div>
          </div>

          <div
            aria-label="Redes sociais"
            className="flex items-start gap-5 py-6 laptop:border-l laptop:border-cream-100/20 laptop:py-0 laptop:pl-6"
          >
            <a
              href="https://www.instagram.com/semana.cinemanegrobh"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition-opacity hover:opacity-70"
            >
              <InstagramLogo size={20} />
            </a>
            <span aria-hidden="true">
              <FacebookLogo size={20} />
            </span>
            <span aria-hidden="true">
              <YoutubeLogo size={22} />
            </span>
            <span aria-hidden="true">
              <TwitterLogo size={20} />
            </span>
          </div>
        </div>

        <p className="mt-8 border-t border-cream-100/20 pt-4 text-[10px] font-semibold uppercase tracking-wider">
          © 2026 Semana de Cinema Negro BH. Todos os direitos reservados. Site
          desenvolvido por{" "}
          <a
            href="https://www.meji.com.br/"
            target="_blank"
            rel="noreferrer"
            className="text-amarelo-ouro transition-opacity hover:opacity-70"
          >
            Meji
          </a>
          .
        </p>
      </footer>
  );
}
