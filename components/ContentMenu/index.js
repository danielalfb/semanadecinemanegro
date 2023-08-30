import React from "react";
import yourData from "../../data/content.json";
import ItemCard from "../ItemCard";

export default function ContentMenu() {
  return (
    <div className='w-full gap-2 link grid grid-cols-4'>
      {yourData.mostras.resumo.map(({ name, description, url, color }) => (
        <ItemCard
          key={name}
          name={name}
          description={description}
          url={url}
          color={color}
        />
      ))}
    </div>
  );
}
