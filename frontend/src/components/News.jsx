import React from 'react'
import "../styles/News.css";

export default function News({newsData}) {
  return (
    <div className='news'>
      <div className="news-container">
        {newsData.map((item, index) => (
          <div key={index} className="new-card">
            <div className="new-image">
                <img src={item.image} alt="imag1"/>
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
