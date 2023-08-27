import { useRouter } from 'next/router'
import React from 'react'

export default function ItemCard({ type, name, desciption, url }) {
    const router = useRouter();

  return (
    <div onClick={() => router.push(`/${url}`)}>
      <p>{type}</p>
      <p>{name}</p>
      <p>{desciption}</p>
    </div>
  )
}
