import React from 'react'

export default function Wave() {
  return (
	<div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
    <svg
      className="relative block w-full h-[100px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
        fill="var(--color-cream)"
      >
        <animate
          attributeName="d"
          dur="10s"
          repeatCount="indefinite"
          values="
            M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z;
            M0,0 C400,0 800,100 1200,0 L1200,0 L0,0 Z;
            M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z;
            M0,0 C400,0 800,100 1200,0 L1200,0 L0,0 Z;
            M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z;
            "
        />
      </path>
    </svg>
  </div>
  )
}
