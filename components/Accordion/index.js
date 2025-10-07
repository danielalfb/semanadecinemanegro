import { useState } from "react";
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";

export default function Accordion({ title, color, children, fontSize }) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
      className="w-full mb-8 p-4 rounded-sm border-4"
      style={{
        backgroundColor: isShowing ? "transparent" : "#fffdf7",
        borderColor: isShowing ? "transparent" : color,
      }}
    >
      <button
        className="w-full relative text-left p-1 cursor-pointer"
        onClick={toggle}
        type="button"
      >
        <span
          className="w-full flex items-center justify-between"
          style={{ color: `${color} !important` }}
        >
          <h2 style={{ color: `${color} !important`, fontSize: fontSize }}>{title}</h2>
          {isShowing ? (
            <CaretUpIcon size={24} weight="bold" />
          ) : (
            <CaretDownIcon size={24} weight="bold" />
          )}
        </span>
      </button>
      <div className="p-1.5" style={{ display: isShowing ? "block" : "none" }}>
        {children}
      </div>
    </div>
  );
}
