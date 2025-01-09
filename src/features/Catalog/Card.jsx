import React from 'react'

export default function Card({ image, price, description, availability, terms }) {
  return (
    <div className="border p-4">
    <img src={image} alt={description} className="w-full h-48 object-cover" />
    {/* Цена */}
    <h3 className="text-green-500 text-lg font-bold mb-2">{price}</h3>

{/* Описание */}
<p className="text-gray-600 leading-relaxed mb-4">{description}</p>

{/* Время сдачи */}
<div className="text-blue-500 font-medium mb-2">Сдача: {availability}</div>

{/* Условия */}
<div className="text-gray-700 font-light">
  <span className="font-bold">Условия: </span>{terms}
</div>
  </div>
  )
}
