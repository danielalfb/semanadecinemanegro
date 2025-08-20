import { useRouter } from "next/router";
import React, { useMemo } from "react";

export default function ItemCard({ color, name, description, url }) {
  const router = useRouter();

  const splitTitle = useMemo(() => name.split("-") ?? null, []);

  return (
    <div
      className={`flex flex-col gap-4 p-6 cursor-pointer rounded-md w-full min-w-[250px] hover:scale-90 transform-gpu duration-75 w-[200px] desktop:w-[250px]`}
      style={{
        background: `var(--color-${color})`,
        color: "var(--color-cream)",
      }}
      onClick={() => router.push(`/${url}`)}
    >
      {splitTitle ? (
        <div className="flex-col gap-2">
          {splitTitle.map((silable) => (
            <h2
              key={silable}
              style={{
                color: "var(--color-cream)",
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
      <span className="text-sm">{description}</span>
    </div>
  );
}
