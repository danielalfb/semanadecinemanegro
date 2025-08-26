import React, { useMemo } from "react";

export default function MovieCard({ movie, color, single }) {
  const {
    title,
    titleEng,
    subtitle,
    subtitle2,
    description,
    credits,
    image,
    image2,
  } = movie;

  const creditsArr = useMemo(() => credits.split(";"), [credits]);

  return (
    <div
      className="flex flex-col items-stretch gap-1 rounded-md border-4 desktop:flex-row laptop:flex-row"
      style={{
        borderColor: single ? "transparent" : color,
        backgroundColor: single ? "var(--color-cream)" : "#fffdf7",
      }}
    >
      <div className="w-full desktop:w-[50%] laptop:w-[50%]">
        <div
          className="w-full h-[300px] bg-center bg-cover desktop:h-full laptop:h-full"
          style={{
            backgroundImage: `url('${image}')`,
            borderRadius: single ? "6px" : null,
          }}
        />
        {image2 ? (
          <div
            className="w-full h-[300px] bg-center bg-cover desktop:h-full laptop:h-full"
            style={{
              backgroundImage: `url('${image2}')`,
              borderRadius: single ? "6px" : null,
            }}
          />
        ) : null}
      </div>

      <div
        className="flex flex-col p-4 flex-1"
        style={{
          backgroundColor: single ? color : "inherit",
          color: single ? "var(--color-cream)" : null,
          borderRadius: single ? "6px" : null,
        }}
      >
        <div className="flex flex-col mb-1">
          <h3 style={{ color: single ? "inherit" : color }}>{title}</h3>
          <span className="text-sm">{titleEng}</span>
        </div>
        <span className="text-xs">{subtitle}</span>
        <span className="mb-4 text-xs">{subtitle2}</span>
        {creditsArr.map((str, index) => (
          <span className="text-xs" key={index}>
            {str}
          </span>
        ))}
        <span className="mt-4 text-xs">{description}</span>
        <button
          className="bg-black text-white px-4 py-2 mt-4 rounded hover:bg-gray-800 transition border border-white"
          onClick={() => console.log("click")}
        >
          Assistir
        </button>
      </div>
    </div>
  );
}
