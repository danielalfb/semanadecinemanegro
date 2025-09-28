import React, { useRef, useState, useEffect } from "react";
import ItemCard from "../ItemCard";
import { SITE_CONTENT } from "../../helpers/content";
import CarouselIndicators from "./CarouselIndicators";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

const ContentMenu = ({ tipo, isCarousel }) => {
  const items = SITE_CONTENT[tipo];
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  // Slide automático
  useEffect(() => {
    if (!isCarousel) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isCarousel, items.length]);

  // Scroll para o slide ativo
  useEffect(() => {
    if (!scrollRef.current) return;
    const child = scrollRef.current.children[activeIndex];
    if (child) {
      // Só faz scroll se o carrossel está visível na viewport
      const rect = scrollRef.current.getBoundingClientRect();
      const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (inView) {
        child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [activeIndex]);

  const goToSlide = (idx) => {
    setActiveIndex(idx);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="relative w-full overflow-x-hidden pr-10">
      {isCarousel && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2"
          >
            <CaretLeftIcon size={24} color="#231F20" weight="bold" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 "
          >
            <CaretRightIcon size={24} color="#231F20" weight="bold" />
          </button>
          <CarouselIndicators items={items} activeIndex={activeIndex} onClick={goToSlide} />
        </>
      )}

      {/* Track dos slides */}
      <div
        ref={scrollRef}
        className="flex w-full p-10 gap-6 overflow-x-hidden scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map(({ id, shortTitle, description, url, color }, idx) => (
          <div
            key={id}
            className="snap-center shrink-0 w-72 flex items-center"
            style={{ scrollSnapAlign: "center", marginRight: idx !== items.length - 1 ? "1.5rem" : 0 }}
          >
            <ItemCard
              name={shortTitle}
              description={description}
              url={url}
              color={color}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentMenu;
