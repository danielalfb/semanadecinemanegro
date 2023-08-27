import React from 'react'
import yourData from "../../data/content.json";
import ItemCard from '../ItemCard';

export default function ContentMenu() {
  return (
    <div className="flex flex-wrap mob:flex-nowrap link">
      {yourData.resume.map(({ type, name, desciption, url }) => (
        <ItemCard key={name} type={type} desciption={desciption} url={url}/>
      ))}
    </div>
  )
}
