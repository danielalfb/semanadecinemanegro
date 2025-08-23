import React from 'react'

export default function PageElement({element, size, position = {left: 0, top: 0}}) {
  return (
    <div className='absolute' style={{ ... position, ...size, zIndex: "1"}}>{element}</div>
  )
}
