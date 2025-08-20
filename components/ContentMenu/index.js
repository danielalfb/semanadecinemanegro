import React, { useRef } from "react";
import ItemCard from "../ItemCard";
import { SITE_CONTENT } from "../../helpers/content";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

const ContentMenu = ({ tipo }) => {
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
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-brown shadow p-2 hover:bg-gray-100"
      >
        <CaretLeftIcon className="h-5 w-5" />
      </button>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-brown shadow p-2 hover:bg-gray-100"
      >
        <CaretRightIcon className="h-5 w-5" />
      </button>

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

  return (
    <div className="w-full gap-2 link flex flex-wrap p-10">
      {SITE_CONTENT[tipo].map(({ id, shortTitle, description, url, color }) => (
        <ItemCard
          key={id}
          name={shortTitle}
          description={description}
          url={url}
          color={color}
        />
      ))}
    </div>
  );
};

export default ContentMenu;
