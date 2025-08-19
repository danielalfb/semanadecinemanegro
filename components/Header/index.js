/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { useRouter } from "next/router";
import Button from "../Button";
import Searchbar from "../Searchbar";
import { InstagramLogoIcon } from '@phosphor-icons/react';
import { FacebookLogo } from '@phosphor-icons/react';
import { YoutubeLogo  } from '@phosphor-icons/react';
import { TwitterLogo   } from '@phosphor-icons/react';


const Header = () => {
  const router = useRouter();

  return (
    <div className='absolute w-full top-0'>
      <div className="bg-green-400 flex justify-between px-2 w-full h-10 items-center">
        <h3>Festival de Cinema Intercâmbio Cultural Brasil-África </h3>
        <div className="flex">
        <Searchbar />
         <div className="flex gap-2">
                    <div
                      id="insta"
                      className="flex justify-center items-center gap-2"
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
                    </div>
                    <div
                      id="face"
                      className="flex justify-center items-center gap-2"
                      onClick={() =>
                        window
                          .open(
                            "https://www.facebook.com/semana.cinemanegrobh/",
                            "_blank"
                          )
                          .focus()
                      }
                    >
                      <FacebookLogo size={24} weight="fill" />
                    </div>
                    <div
                      id="youtube"
                      className="flex justify-center items-center gap-2"
                      onClick={() =>
                        window
                          .open(
                            "https://www.youtube.com/channel/UCWEYVmhTOymK86IAzCmC70g",
                            "_blank"
                          )
                          .focus()
                      }
                    >
                      <YoutubeLogo  size={24} weight="fill" />
                    </div>
                    <div
                      id="twitter"
                      className="flex justify-center items-center gap-2"
                      onClick={() =>
                        window
                          .open(
                            "https://x.com/scnegrobh",
                            "_blank"
                          )
                          .focus()
                      }
                    >
                      <TwitterLogo  size={24} weight="fill" />
                    </div>
                  </div>
        </div>
      </div>
      <Popover className='block items-center tablet:hidden mt-5'>
        {({ open }) => (
          <>
            <div className='flex items-top justify-between py-0 pr-8 laptop:p-0'>
              <h1
                onClick={() => router.push("/")}
                className='link'
                style={{ maxWidth: "150px" }}
              >
                <img src='/images/logo.png' />
              </h1>

              <div className='flex items-center'>
                <Popover.Button>
                  <img
                    className='h-5'
                    src={`/images/${!open ? "menu.svg" : "cancel.svg"}`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 bg-slate-800 text-white shadow-md rounded-md`}
            >
              <Searchbar isMobile />

              <Button onClick={() => router.push("/mostras")}>mostras</Button>
              <Button onClick={() => router.push("/atividades-formativas")}>
                atividades formativas
              </Button>
              {/* <Button onClick={() => router.push("/catalogo")}>catalogo</Button> */}
              {/* <Button onClick={() => router.push("/creditos")}>créditos</Button> */}
              <Button onClick={() => router.push("/anteriores")}>
                edições anteriores
              </Button>
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div
        className={`header-links font-medium p-2 hidden flex-row items-start justify-between top-0 z-10 tablet:flex`}
      >
        <div
          onClick={() => router.push("/")}
          className='cursor-pointer mob:p-2 laptop:p-0'
          style={{ maxWidth: "120px" }}
        >
          <img src='/images/logo.png' />
        </div>
        <div className='flex items-center'>
          <Button onClick={() => router.push("/mostras")}>mostras</Button>
          <Button onClick={() => router.push("/atividades-formativas")}>
            atividades formativas
          </Button>
          {/* <Button onClick={() => router.push("/catalogo")}>catálogo</Button> */}
          {/* <Button onClick={() => router.push("/creditos")}>créditos</Button> */}
          <Button onClick={() => router.push("/anteriores")}>
            edições anteriores
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;