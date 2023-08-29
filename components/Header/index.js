/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { pathname } = useRouter();
  console.log(pathname);
  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className='absolute w-full top-0'>
      <Popover className='block tablet:hidden mt-5'>
        {({ open }) => (
          <>
            <div className='flex items-center justify-between p-2 laptop:p-0'>
              <h1
                onClick={() => router.push("/")}
                className='font-medium p-2 laptop:p-0 link'
              >
                {name}.
              </h1>

              <div className='flex items-center'>
                <Popover.Button>
                  <img
                    className='h-5'
                    src={`/images/${
                      !open ? "menu-white.svg" : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className='grid grid-cols-1'>
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() =>
                        window.open("mailto:hello@chetanverma.com")
                      }
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className='grid grid-cols-1'>
                  <Button onClick={() => router.push("/")} classes='first:ml-1'>
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes='first:ml-1'
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`header-links font-medium m-2 hidden flex-row items-start justify-between sticky top-0 z-10 tablet:flex`}
      >
        <div
          onClick={() => router.push("/")}
          className='cursor-pointer mob:p-2 laptop:p-0'
          style={{ maxWidth: "200px" }}
        >
          <img src='/images/logo.png' />
        </div>
        <div className='flex'>
          <Button onClick={() => router.push("/mostras")}>mostras</Button>
          <Button onClick={() => router.push("/atividades-formativas")}>
            atividades formativas
          </Button>
          <Button onClick={() => router.push("/catalogo")}>catalogo</Button>
          <Button onClick={() => router.push("/creditos")}>créditos</Button>
          <Button onClick={() => router.push("/anteriores")}>
            edições anteriores
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
