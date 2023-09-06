import React, { useMemo } from "react";

export default function MovieCard({ movie, color }) {
  const { title, titleEng, subtitle, description, credits, image } = movie;

  const creditsArr = useMemo(() => credits.split(";"), [credits]);

  return (
    <div
      className='flex flex-col gap-1 rounded-sm border border-8'
      style={{ borderColor: color }}
    >
      <div
        className='w-full bg-center bg-cover'
        style={{ height: "12rem", backgroundImage: `url('${image}')` }}
      />
      <div className=' flex flex-col p-4'>
        <div className='flex flex-col mb-1'>
          <h3 style={{ color: color }}>{title}</h3>
          <span className='text-sm'>{titleEng}</span>
        </div>
        <span className='mb-4 text-xs'>{subtitle}</span>
        {creditsArr.map((str, index) => (
          <span className='text-xs' key={index}>
            {str}
          </span>
        ))}
        <span className='mt-4 text-xs'>{description}</span>
      </div>
    </div>
  );
}
