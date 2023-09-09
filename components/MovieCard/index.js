import React, { useMemo } from "react";

export default function MovieCard({ movie, color }) {
  const { title, titleEng, subtitle, subtitle2, description, credits, image, image2 } = movie;

  const creditsArr = useMemo(() => credits.split(";"), [credits]);

  return (
    <div
      className='flex flex-col gap-1 rounded-sm border-8'
      style={{ borderColor: color }}
    >
      <div className={`${image2 ? 'flex' : ''}`}>
      <div
        className='w-full bg-center bg-cover'
        style={{ height: "12rem", backgroundImage: `url('${image}')` }}
      />
       <div
        className='w-full bg-center bg-cover'
        style={{ height: "12rem", backgroundImage: `url('${image2}')` }}
      />
      </div>
      <div className=' flex flex-col p-4'>
        <div className='flex flex-col mb-1'>
          <h3 style={{ color: color }}>{title}</h3>
          <span className='text-sm'>{titleEng}</span>
        </div>
        <span className='text-xs'>{subtitle}</span>
        <span className='mb-4 text-xs'>{subtitle2}</span>
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
