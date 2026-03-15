import React from "react";
import "../styles/Advantages.css";

const advantagesData = [
    {
      icon: "🎓",
      title: "Опытные преподаватели",
      description: "Все преподаватели — действующие разработчики",
    },
    {
      icon: "💻",
      title: "Практика на реальных проектах",
      description: "Студенты делают сайты и приложения",
    },
    {
      icon: "📅",
      title: "Удобное расписание",
      description: "Можно совмещать обучение с работой или школой",
    },
    {
      icon: "🚀",
      title: "Помощь с трудоустройством",
      description: "Помогаем собрать портфолио и найти работу",
    },
    {
      icon: "🛠️",
      title: "Современные инструменты",
      description: "Студенты учатся работать с актуальными технологиями",
    },
    {
      icon: "🌐",
      title: "Онлайн и офлайн обучение",
      description: "Можно учиться дистанционно или в классе",
    },
];

const Advantages = () => {
  return (
    <section className="advantages">
      <div className="advantages-container">
        {advantagesData.map((item, index) => (
          <div key={index} className="advantage-card">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;