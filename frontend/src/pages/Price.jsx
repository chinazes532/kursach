import React from 'react'
import PriceTable from '../components/PriceTable'
import "../styles/Price.css";

export default function Price() {
    const priceData = [
        {
            id: 1,
            title: "Базовый",
            description: "Для начинающих. Основы программирования",
            price: 30000
          },
          {
            id: 2,
            title: "Стандарт",
            description: "Frontend + проекты",
            price: 50000
          },
          {
            id: 3,
            title: "Премиум",
            description: "Полный курс + помощь с трудоустройством",
            price: 80000
          }
    ]
  return (
    <div>
      <PriceTable  priceData={priceData}/>
    </div>
  )
}
