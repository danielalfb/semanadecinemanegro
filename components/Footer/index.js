/* eslint-disable @next/next/no-img-element */
import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

import yourData from "../../data/content.json";

const Footer = ({}) => {
  return (
    <div className='relative bottom-0 laptop:p-0'>
      <img
        alt='logomarcas'
        src='https://www.semanadecinemanegro.com.br/mostras/img/logomarcas.png'
        style={{ width: "100%", backgroundColor: "#f9f9f9" }}
      />

      <div
        className='flex flex-wrap items-center justify-between p-2 mob:flex-nowrap link'
        style={{ color: "#fff", backgroundColor: "#000" }}
      >
        <span>CONTATO IMPRENSA</span>
        <div className='flex flex-wrap mob:flex-nowrap link'>
          {yourData.socials.map((social, index) => (
            <Button key={index} onClick={() => window.open(social.link)}>
              {social.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
