/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Popover } from "@headlessui/react";
import { useRouter } from "next/router";
import Button from "../Button";
import Searchbar from "../Searchbar";
import { InstagramLogoIcon, FacebookLogo, YoutubeLogo, TwitterLogo } from '@phosphor-icons/react';

const Header = () => {
  const router = useRouter();

  return (
    <div className='fixed w-full top-0 z-[100]'>
      <div className=" bg-brown-100 flex flex-col tablet:flex-row justify-between px-2 w-full h-auto tablet:h-12 items-center">
        <h3 className="text-xs tablet:text-base text-center tablet:text-left py-2 tablet:py-0 font-semibold">
          Festival de Cinema Intercâmbio Cultural Brasil-África
        </h3>
        <div className="hidden tablet:flex items-center gap-2">
          <Searchbar />
          <div className="flex gap-2">
            <div
              id="insta"
              className="flex justify-center items-center gap-2"
              onClick={() =>
                window.open("https://www.instagram.com/semana.cinemanegrobh/", "_blank").focus()
              }
            >
              <InstagramLogoIcon size={24} weight="fill" />
            </div>
            <div
              id="face"
              className="flex justify-center items-center gap-2"
              onClick={() =>
                window.open("https://www.facebook.com/semana.cinemanegrobh/", "_blank").focus()
              }
            >
              <FacebookLogo size={24} weight="fill" />
            </div>
            <div
              id="youtube"
              className="flex justify-center items-center gap-2"
              onClick={() =>
                window.open("https://www.youtube.com/channel/UCWEYVmhTOymK86IAzCmC70g", "_blank").focus()
              }
            >
              <YoutubeLogo size={24} weight="fill" />
            </div>
            <div
              id="twitter"
              className="flex justify-center items-center gap-2"
              onClick={() =>
                window.open("https://x.com/scnegrobh", "_blank").focus()
              }
            >
              <TwitterLogo size={24} weight="fill" />
            </div>
          </div>
        </div>
      </div>
      {/* Popover menu mobile */}
      <Popover className='block items-center tablet:hidden tablet:mt-2'>
        {({ open }) => (
          <>
            <div className='flex items-top bg-green-100 justify-between py-0 pr-4'>
              <h1
                onClick={() => router.push("/")}
                className='link'
                style={{ maxWidth: "120px" }}
              >
                <img src='/images/logo.png' className="w-16" />
              </h1>
              <div className='flex items-center'>
                <Popover.Button>
                  <img
                    className='h-6'
                    src={`/images/${!open ? "menu.svg" : "cancel.svg"}`}
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 top-20 z-10 w-full p-4 bg-brown-100 text-white shadow-md`}
            >
              <div className="mb-4 w-full">
                <Searchbar isMobile />
              </div>
              <Button onClick={() => router.push("/mostras")}>mostras</Button>
              <Button onClick={() => router.push("/atividades-formativas")}>
                atividades formativas
              </Button>
              <Button onClick={() => router.push("/anteriores")}>
                edições anteriores
              </Button>
            </Popover.Panel>
          </>
        )}
      </Popover>
      {/* Menu tablet+ */}
      <div
        className={`header-links font-medium  bg-green-100 p-2 hidden tablet:flex flex-row items-center justify-between top-0 z-10`}
      >
        <div
          onClick={() => router.push("/")}
          className='cursor-pointer mob:p-2 tablet:p-0'
          style={{ maxWidth: "120px" }}
        >
          <img src='/images/logo.png' className="w-20 tablet:w-28" />
        </div>
        <div className='flex items-center gap-4'>
          <Button onClick={() => router.push("/mostras")}>mostras</Button>
          <Button onClick={() => router.push("/atividades-formativas")}>
            atividades formativas
          </Button>
          <Button onClick={() => router.push("/anteriores")}>
            edições anteriores
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;