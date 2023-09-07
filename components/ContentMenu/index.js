import React from "react";
import yourData from "../../data/content.json";
import ItemCard from "../ItemCard";

const OPTIONS = {
  MOSTRAS: 'MOSTRAS',
  ATIVIDADES: 'ATIVIDADES'
}

const ContentMenu = ({tipo}) => {
  return (
    <div className='w-full gap-2 link grid desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 mob:grid-cols-1'>
      {tipo === OPTIONS.MOSTRAS && yourData.mostras.resumo.map(({ name, description, url, color }) => (
        <ItemCard
          key={name}
          name={name}
          description={description}
          url={url}
          color={color}
        />
      ))}
      {tipo === OPTIONS.ATIVIDADES && yourData.atividades.resumo.map(({ name, description, url, color }) => (
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

export default ContentMenu
