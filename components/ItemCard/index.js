import { useRouter } from "next/router";
import React from "react";

export default function ItemCard({ type, name, description, url }) {
  const router = useRouter();

  return (
    <div
      className='w-full flex-col rounded-md border p-6'
      onClick={() => router.push(`/${url}`)}
    >
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
}
