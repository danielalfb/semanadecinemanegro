import React from "react";
import ItemCard from "../ItemCard";
import { SITE_CONTENT } from "../../helpers/content";

const OPTIONS = {
  MOSTRAS: "MOSTRAS",
  ATIVIDADES: "ATIVIDADES",
};

const ContentMenu = ({ tipo }) => {
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
