import React from 'react'
import PriceItem from './PriceItem'

export default function PriceTable({ priceData }) {
  return (
    <div className='price'>
      <h1>Стоимость образования в IT School</h1>
      
      <div className="price-container">
        {priceData.map((item) => (
            <PriceItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
