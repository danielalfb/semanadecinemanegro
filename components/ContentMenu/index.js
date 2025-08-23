import React, { useRef } from "react";
import ItemCard from "../ItemCard";
import { SITE_CONTENT } from "../../helpers/content";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

const ContentMenu = ({ tipo, isCarousel }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full overflow-x-hidden pr-10">
      {isCarousel && (
        <>
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2"
          >
            <CaretLeftIcon size={24} color="#231F20" weight="bold" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 "
          >
            <CaretRightIcon size={24} color="#231F20" weight="bold" />
          </button>
        </>
      )}

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex w-full p-10 gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {SITE_CONTENT[tipo].map(
          ({ id, shortTitle, description, url, color }) => (
            <ItemCard
              key={id}
              name={shortTitle}
              description={description}
              url={url}
              color={color}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ContentMenu;
