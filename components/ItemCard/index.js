import { useRouter } from "next/router";
import React, { useMemo } from "react";

export default function ItemCard({ color, name, description, url }) {
  const router = useRouter();

  const splitTitle = useMemo(() => name.split("-") ?? null, []);

  // Trunca a descrição para manter todos os cards com mesma altura
  const MAX_LENGTH = 406;
  const truncated =
    typeof description === "string" && description.length > MAX_LENGTH
      ? description.slice(0, MAX_LENGTH).trimEnd() + "..."
      : description;
  console.log(name)
  return (
    <div
      className={`flex flex-col gap-4 p-6 cursor-pointer rounded-md w-full min-w-[250px] hover:scale-90 transform-gpu duration-75 w-[300px] desktop:w-[350px]`}
      style={{
        background: color,
        color: "var(--color-cream)",
        minHeight: name === 'CINE ESCRITURAS-PRETAS' ? 370 : 220,
        overflow: "hidden",
      }}
      onClick={() => router.push(`${url}`)}
    >
      {splitTitle ? (
        <div className="flex-col gap-2">
          {splitTitle.map((silable) => (
            <h2
              key={silable}
              style={{
                color: "var(--color-cream)",
                fontSize: silable === 'CINE ESCRITURAS' || silable === 'PRETAS' ? "1.1rem" : "1.75rem",
              }}
              className="uppercase break-all"
            >
              {silable}
            </h2>
          ))}
        </div>
      ) : (
        <h2
          style={{
            color: "var(--color-cream)",
          }}
          className="uppercase break-all"
        >
          {name}
        </h2>
      )}
      <span className="text-sm" style={{ lineHeight: 1.3 }}>{truncated}</span>
    </div>
  );
}
