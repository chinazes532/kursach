import React from 'react'
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-container'>

            <div className='footer-logo'>
                <h2>IT School</h2>
                <p>Частная школа программирования</p>
            </div>

            <div className='footer-socials'>
                <Link to='https://t.me/psych0ce00'>Telegram</Link>
                <Link to='https://instagram.com'>Instagram</Link>
                <Link to='#'>VK</Link>
            </div>

            <div className='footer-cta'>
            <Link className="btn" to="/consultation">Записаться на консультацию</Link>
            </div>
        </div>

        <div className='footer-bottom'>
            <p>+79639709320</p>
            <p>itschool@mail.ru</p>
            <p>г. Москва ул. Зеленодольская д. 7 к. 7</p> <br />
            <p>© 2026 IT School. Все права защищены.</p>
        </div>

    </footer>
  )
}

export default Footer;
