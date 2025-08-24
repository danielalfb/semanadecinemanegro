import React, { useMemo } from "react";

export default function MovieCard({ movie, color }) {
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
      className="flex flex-row items-stretch gap-1 rounded-md border-4 bg-[#fffdf7]"
      style={{ borderColor: color }}
    >
      <div className="w-[50%]">
        <div
          className="w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url('${image}')` }}
        />
        {image2 ? (
          <div
            className="w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url('${image2}')` }}
          />
        ) : null}
      </div>

      <div className="flex flex-col p-4 flex-1">
        <div className="flex flex-col mb-1">
          <h3 style={{ color: color }}>{title}</h3>
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
      </div>
    </div>
  );
}
