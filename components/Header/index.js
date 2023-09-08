/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { useRouter } from "next/router";
import Button from "../Button";
import Searchbar from "../Searchbar";

const Header = () => {
  const router = useRouter();

  return (
    <div className='absolute w-full top-0'>
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
              <Button onClick={() => router.push("/creditos")}>créditos</Button>
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
          style={{ maxWidth: "200px" }}
        >
          <img src='/images/logo.png' />
        </div>
        <div className='flex items-center'>
          <Button onClick={() => router.push("/mostras")}>mostras</Button>
          <Button onClick={() => router.push("/atividades-formativas")}>
            atividades formativas
          </Button>
          {/* <Button onClick={() => router.push("/catalogo")}>catalogo</Button> */}
          <Button onClick={() => router.push("/creditos")}>créditos</Button>
          <Button onClick={() => router.push("/anteriores")}>
            edições anteriores
          </Button>
          <Searchbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
