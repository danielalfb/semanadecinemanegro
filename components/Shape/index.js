import React from "react";

export default function Shape({
  isYellow,
  isSmallLeft,
  isSmallRight,
  isLastSeasons,
  isLastSeasonsRight,
  color,
}) {
  if (isSmallLeft) {
    return (
      <div className='absolute top-0 left-0 z-0'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='245'
          height='179'
          viewBox='0 0 245 179'
          fill='none'
        >
          <path
            d='M0 179V0H245L201.25 20.4293L168.194 33.0761L124.444 53.5054L102.083 69.0706L82.6389 91.4456L61.25 115.766L27.2222 153.707L0 179Z'
            fill={color}
          />
        </svg>
      </div>
    );
  }
  if (isSmallRight) {
    return (
      <div className='absolute bottom-0 right-0 z-0'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='474'
          height='291'
          viewBox='0 0 474 291'
          fill='none'
        >
          <path
            d='M438.494 14.1951L474 0V165.905L410.09 279.466L372.809 291H0L14.2022 247.527L31.0674 212.04L55.9213 173.003L77.2247 133.079L91.427 106.463L105.629 84.2835L125.157 55.0061L136.697 40.811H156.225H247.652H308.899H372.809L397.663 31.939L438.494 14.1951Z'
            fill={color}
          />
        </svg>
      </div>
    );
  }
  if (isYellow) {
    return (
      <div className={`absolute top-14 left-0 z-[-1]`}>
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
  if (isLastSeasons) {
    return (
      <div className={`absolute top-0 left-0 z-[-1]`}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='360'
          height='349'
          viewBox='0 0 360 349'
          fill='none'
        >
          <path
            d='M26.1027 349L0 343.564V0H304.532L313.233 54.3614L339.335 185.916L360 275.069L123.988 343.564L64.1692 349H26.1027Z'
            fill={color}
          />
        </svg>
      </div>
    );
  }
  if (isLastSeasonsRight) {
    return (
      <div className={`absolute bottom-0 right-0 z-[-1]`}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='849'
          height='521'
          viewBox='0 0 849 521'
          fill='none'
        >
          <path
            d='M785.404 25.4146L849 0V297.034L734.528 500.351L667.753 521H0L25.4382 443.168L55.6461 379.631L100.163 309.741L138.32 238.262L163.758 190.61L189.197 150.899L224.174 98.4817L244.843 73.0671H279.82H443.579H553.281H667.753L712.27 57.1829L785.404 25.4146Z'
            fill={color}
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
