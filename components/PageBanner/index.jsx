import React from 'react'

export default function PageBanner({title, bg, color}) {
  return (
    <div className="w-full h-40 bg-top bg-cover pl-10 pr-10 pb-2 flex items-end justify-start" style={{backgroundImage: `url(${bg})`, backgroundColor: color}}><span className="w-full text-4xl font-[RubikMonoOne] text-white z-[3] desktop:text-6xl" >{title}</span></div>
  )
}
