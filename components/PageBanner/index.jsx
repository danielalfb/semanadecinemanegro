import React from 'react'

export default function PageBanner({title, textColor, fontFamily, color}) {
  return (
    <div className="w-full h-20 bg-top bg-cover pl-2 pr-10 pb-2 flex items-end justify-start" style={{backgroundColor: color}}><span className="w-full text-4xl font-[RubikMonoOne] text-white z-[3] desktop:text-4xl laptop:text-4xl tablet:text-4xl" style={{ color: textColor, fontFamily}} >{title}</span></div>
  )
}
