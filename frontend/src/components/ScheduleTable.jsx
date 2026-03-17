import React from "react";
import ScheduleItem from "./ScheduleItem";

export default function ScheduleTable({ scheduleData }) {
  return (
    <div className="schedule">
      <h1>Расписание занятий</h1>

      <div className="schedule-container">
        {scheduleData.map((item) => (
          <ScheduleItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}