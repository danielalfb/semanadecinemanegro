import React from 'react'
import Wave from '../Wave'

export default function PageBanner({ title, textColor, fontFamily, color }) {
  return (
    <div className="w-full h-20 relative flex items-center justify-start pl-2 pr-10 pb-2" style={{ backgroundColor: color }}>
      <div className="absolute inset-0 w-full h-full z-[1]">
        <Wave color="var(--color-sand)" />
      </div>
      <span 
        className="w-full text-4xl font-[RubikMonoOne] text-white z-[2] desktop:text-4xl laptop:text-4xl tablet:text-4xl relative" 
        style={{ color: textColor, fontFamily }}
      >
        {title}
      </span>
    </div>
  )
}
