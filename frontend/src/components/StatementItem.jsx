import React from 'react'

export default function StatementItem({ item }) {
  return (
    <div className='statement-row'>

      <div className="statement-cell course" data-label="Курс">
        {item.course}
      </div>

      <div className="statement-cell teacher">
        {item.teacher}
      </div>

      <div className={`statement-cell grade grade-${item.grade}`}>
        {item.grade}
      </div>

      <div className="statement-cell attendance">
        {item.attended}/{item.total}
      </div>

    </div>
  )
}