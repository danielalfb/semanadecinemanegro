import { useState } from "react";
import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
  DownloadSimple,
  ArrowSquareOut,
  List,
  X,
} from "@phosphor-icons/react";

export default function SiteHeader({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (page) =>
    `w-full border-b border-barro/10 py-3 text-xs font-bold uppercase tracking-wider transition-colors md:w-auto md:border-0 md:py-0 md:text-sm ${
      activePage === page ? "text-amarelo-ouro" : "hover:text-amarelo-ouro"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full text-barro"
      onKeyDown={(event) => event.key === "Escape" && closeMenu()}
    >
      <div className="flex h-8 items-center justify-end gap-4 bg-cream-200 px-4 md:h-14 md:gap-6 md:px-8">
        <a
          href="https://www.instagram.com/semana.cinemanegrobh"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram da Semana de Cinema Negro BH"
          className="transition-opacity hover:opacity-70"
        >
          <InstagramLogo size={20} weight="fill" />
        </a>
        <a
          href="https://www.instagram.com/semana.cinemanegrobh"
          target="_blank"
          rel="noreferrer"
          aria-label="Youtube da Semana de Cinema Negro BH"
          className="transition-opacity hover:opacity-70"
        >
          <YoutubeLogo size={22} weight="regular" />
        </a>
        {/* <span className="text-barro" aria-hidden="true">
          <FacebookLogo size={20} weight="regular" />
        </span>
        <span className="text-barro" aria-hidden="true">
          <TwitterLogo size={20} weight="regular" />
        </span> */}
      </div>
      <div className="relative flex min-h-16 items-center justify-between gap-3 border-y border-barro/10 bg-cream-100 px-4 py-2 md:h-20 md:flex-row md:gap-3 md:px-8 md:py-0">
        <Link
          href="/"
          className="w-fit shrink-0 transition-opacity hover:opacity-80"
        >
          <picture className="block">
            <source srcSet="/images/logo-2026-mobile.png" />
            <img
              src="/images/logo-2026.png"
              alt="Logo SCNBH 2026"
              className="h-auto max-h-12 w-32 object-contain object-left mix-blend-multiply md:max-h-16 md:w-40 md:object-center"
            />
          </picture>
        </Link>
        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-barro/20 md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <List size={22} />}
        </button>
        <nav
          id="menu-principal"
          aria-label="Navegação principal"
          className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full z-50 flex-col border-b border-barro/10 bg-cream-100 px-4 pb-3 pt-2 shadow-lg md:static md:z-auto md:flex md:w-auto md:flex-row md:items-center md:justify-end md:gap-x-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <Link href="/" onClick={closeMenu} className={linkClass("home")}>
            Início
          </Link>
          <Link
            href="/anteriores"
            onClick={closeMenu}
            className={linkClass("anteriores")}
          >
            Edições Anteriores
          </Link>
          <div className="mt-3 flex w-full flex-col gap-2 md:mt-0 md:w-auto md:flex-row">
            <a
              href="/images/programacao-web.png"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-amarelo-ouro px-3 py-2 text-xs font-bold uppercase tracking-wider text-barro transition-colors hover:bg-amarelo-ouro md:w-auto md:text-xs"
            >
              <DownloadSimple size={16} />
              Baixar programação
            </a>
            <a
              href="https://www.ubuplay.com/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-amarelo-ouro px-3 py-2 text-xs font-bold uppercase tracking-wider text-barro transition-colors hover:bg-amarelo-ouro md:w-auto md:text-xs"
            >
              Acessar Ubuplay
              <ArrowSquareOut size={16} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
