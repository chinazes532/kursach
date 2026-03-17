import React from "react";

export default function ScheduleItem({ item }) {
  return (
    <div className="schedule-card">
      <h3>{item.day}</h3>
      <h4>{item.course}</h4>
      <p>{item.teacher}</p>
      <p>{item.timeStart} - {item.timeEnd}</p>
    </div>
  );
}