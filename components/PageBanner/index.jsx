import React from 'react'

export default function PageBanner({title, bg, color}) {
  return (
    <div className="w-full h-40 bg-top bg-cover pl-10 pr-10 flex items-center justify-start" style={{backgroundImage: `url(${bg})`, backgroundColor: color}}><span className="w-full text-4xl font-[RubikMonoOne] text-white desktop:text-6xl" >{title}</span></div>
  )
}
