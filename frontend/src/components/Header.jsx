import { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <span>IT School</span>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#">Новости</a>
          <a href="#">Расписание</a>
          <a href="#">Стоимость</a>
          <a href="#">Ведомость</a>
          <a className="btn" href="#">Консультация</a>
        </nav>

        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
};

export default Header;