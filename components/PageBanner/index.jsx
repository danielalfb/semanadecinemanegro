import React from 'react'

export default function PageBanner({title, bg}) {
    console.log(bg);
  return (
    <div className="w-full h-40 bg-top bg-cover pl-10 pr-10 flex items-center justify-start" style={{backgroundImage: `url(${bg})`}}><span className="w-full desktop:text-2xl table:text-2xl" >{title}</span></div>
  )
}
