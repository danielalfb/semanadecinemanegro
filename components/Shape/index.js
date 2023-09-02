import React from "react";

export default function Shape({ isYellow }) {
  if (isYellow) {
    return (
      <div className='absolute top-14	left-0 z-[-1]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='915'
          height='750'
          viewBox='0 0 915 750'
          fill='none'
        >
          <path
            d='M257.052 21.3144L0 50.6217V574.156L154.498 750H510.109L915 694.05L623.319 426.288L470.153 0L257.052 21.3144Z'
            fill='#F2CB05'
          />
        </svg>
      </div>
    );
  }
  return (
    <div className='absolute top-0	right-6 z-[-1]'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='261'
        height='272'
        viewBox='0 0 261 272'
        fill='none'
      >
        <path
          d='M0.5 102V0.5H260.5L219 102L208.5 133.5V150.5L214 200L226.5 272L119 200L0.5 102Z'
          fill='#0095EC'
        />
      </svg>
    </div>
  );
}
