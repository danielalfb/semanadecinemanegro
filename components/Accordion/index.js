import { useState } from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

export default function Accordion({ title, description, color, children }) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
      className='w-full mb-8 p-4 rounded-sm border-4'
      style={{ borderColor: isShowing ? "transparent" : color }}
    >
      <button
        className='w-full relative text-left p-1 cursor-pointer'
        onClick={toggle}
        type='button'
      >
        <span className='w-full flex  justify-between' style={{ color: color }}>
          <h2>{title}</h2>
          {isShowing ? <CaretUp size={24} /> : <CaretDown size={24} />}
        </span>
        {!isShowing ? <span>{description}</span> : null}
      </button>
      <div className='p-1.5' style={{ display: isShowing ? "block" : "none" }}>
        {children}
      </div>
    </div>
  );
}
