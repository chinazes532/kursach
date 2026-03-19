import React from 'react'
import StatementItem from './StatementItem'

export default function StatementTable({ statementData }) {
  return (
    <div className="statement-table">
        <h1>Ведомость успеваемости</h1>

      <div className="statement-header">
        <div>Курс</div>
        <div>Преподаватель</div>
        <div>Оценка</div>
        <div>Посещаемость</div>
      </div>

      {statementData.map((item) => (
        <StatementItem key={item.id} item={item} />
      ))}

    </div>
  )
}