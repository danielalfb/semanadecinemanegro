import React from 'react'

export default function PageDescription({text, color}) {
  return (
    <div className="p-10 relative" style={{ color: color, zIndex: 2}}>{text}</div>
  )
}
