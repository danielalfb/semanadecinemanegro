import React from "react";
import ItemCard from "../ItemCard";
import { SITE_CONTENT } from "../../helpers/content";

const OPTIONS = {
  MOSTRAS: "MOSTRAS",
  ATIVIDADES: "ATIVIDADES",
};

const ContentMenu = ({ tipo }) => {
  return (
    <>
      {tipo === OPTIONS.MOSTRAS && (
        <div className='w-full gap-2 link grid desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 mob:grid-cols-1'>
          {SITE_CONTENT.mostras.map(({ name, description, url, color }) => (
            <ItemCard
              key={name}
              name={name}
              description={description}
              url={url}
              color={color}
            />
          ))}
        </div>
      )}
      {tipo === OPTIONS.ATIVIDADES && (
        <div
          className={`w-full gap-2 link grid desktop:grid-cols-${SITE_CONTENT.atividades.length} laptop:grid-cols-${SITE_CONTENT.atividades.length} tablet:grid-cols-2 mob:grid-cols-1`}
        >
          {SITE_CONTENT.atividades.map(({ name, description, url, color }) => (
            <ItemCard
              key={name}
              name={name}
              description={description}
              url={url}
              color={color}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ContentMenu;
