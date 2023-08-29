import React from "react";
import yourData from "../../data/content.json";
import ItemCard from "../ItemCard";

export default function ContentMenu() {
  return (
    <div className='w-full grid grid-cols-2 gap-4 link'>
      {yourData.resume.map(({ name, description, url }) => (
        <ItemCard key={name} name={name} description={description} url={url} />
      ))}
    </div>
  );
}
