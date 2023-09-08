/* eslint-disable @next/next/no-img-element */
import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

import yourData from "../../data/content.json";
import { EnvelopeSimple, InstagramLogo, Phone } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <div className='relative bottom-0 laptop:p-0'>
      <img
        alt='logomarcas'
        src='../images/logomarcas.png'
        style={{ width: "100%", backgroundColor: "#f9f9f9" }}
      />

      <div
        className='flex flex-wrap items-center justify-between p-2 mob:flex-nowrap link'
        style={{ color: "#fff", backgroundColor: "var(--clr-black)" }}
      >
        <div className='flex flex-col ml-4'>
          <span className='text-xs font-light	'>
            Para falar com nossa assessoria de imprensa, entre em contato com:
          </span>
          <span className='text-xs font-medium'>FORTALECÊNCIA ASSESSORIA</span>
          <div className='flex items-center gap-2	flex-wrap text-xs font-light'>
            <span className='flex items-center gap-1'>
              <EnvelopeSimple size={12} color='#fffdf0' weight='light' />
              fortalecencia@gmail.com
            </span>
            <span className='flex items-center gap-1'>
              <EnvelopeSimple size={12} color='#fffdf0' weight='light' />
              jornalismomarianacordeiro@gmail.com
            </span>
            <span className='flex items-center gap-1'>
              <Phone size={12} color='#fffdf0' weight='light' />
              +55 (31) 98782-1287
            </span>
          </div>
        </div>
        <div className='flex flex-wrap mob:flex-nowrap link'>
          {yourData.socials.map((social, index) => (
            <Button key={index} onClick={() => window.open(social.link)}>
              {social.title ? <InstagramLogo size={32} /> : ""}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
