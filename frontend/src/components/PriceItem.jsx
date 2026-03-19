import React from 'react'
import { Link } from "react-router-dom";

export default function PriceItem({ item }) {
  return (
    <div className='price-card'>
      <h2>{item.title}</h2>
      <p className='price-desc'>{item.description}</p>

      <div className="price-value">
        {item.price} ₽ в месяц
      </div>

      <Link className="btn" to="/consultation">
        Записаться
      </Link>
    </div>
  )
}
