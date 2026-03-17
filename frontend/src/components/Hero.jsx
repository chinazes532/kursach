import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css"; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Частная IT-школа программирования</h1>
        <p>Научим создавать сайты, приложения и игры с нуля за 6 месяцев</p>
        <Link to="#" className="hero-button">
          Записаться на консультацию
        </Link>
      </div>

      <div className="hero-image">
        <img src="/logo.png" alt="IT School" />
      </div>
    </section>
  );
};

export default Hero;