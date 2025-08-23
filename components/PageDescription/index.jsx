import React from 'react'

export default function PageDescription({text, color}) {
  return (
    <div className="p-10" style={{ color: color}}>{text}</div>
  )
}
