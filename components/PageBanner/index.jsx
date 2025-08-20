import React from 'react'

export default function PageBanner({title, bg}) {
    console.log(bg);
  return (
    <div className="w-full h-40 bg-center bg-cover" style={{backgroundImage: bg}}>{title}</div>
  )
}
