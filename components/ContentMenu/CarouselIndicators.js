import React from "react";

const CarouselIndicators = ({ items, activeIndex, onClick }) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
      {items.map((_, idx) => (
        <button
          key={idx}
          className={`w-3 h-3 rounded-full transition-all duration-300 border border-gray-400 focus:outline-none ${activeIndex === idx ? "bg-pink-400 scale-125" : "bg-gray-300"}`}
          onClick={() => onClick(idx)}
          aria-label={`Ir para slide ${idx + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;
