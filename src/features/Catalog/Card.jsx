import React from 'react'

export default function Card({ image, price, description, availability, terms }) {
  return (
    <div className="border p-4">
    <img src={image} alt={description} className="w-full h-48 object-cover" />
    <h3 className="text-lg font-bold">{price}</h3>
    <p>{description}</p>
    <p>{availability}</p>
    <p>{terms}</p>
  </div>
  )
}
