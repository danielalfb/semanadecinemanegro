import { useRouter } from "next/router";
import React from "react";

export default function ItemCard({ color, name, description, url }) {
  const router = useRouter();

  return (
    <div
      className='w-full flex flex-col gap-4 p-6 cursor-pointer hover:scale-90 transform-gpu duration-75'
      style={{ background: color, color: "var(--clr-white)" }}
      onClick={() => router.push(`/${url}`)}
    >
      <h2 className='uppercase'>{name}</h2>
      <span className='text-sm'>{description}</span>
    </div>
  );
}
