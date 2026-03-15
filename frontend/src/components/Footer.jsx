import React from 'react'
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-container'>

            <div className='footer-logo'>
                <h2>IT School</h2>
                <p>Частная школа программирования</p>
            </div>

            <div className='footer-socials'>
                <a href='https://t.me/psych0ce00'>Telegram</a>
                <a href='https://instagram.com'>Instagram</a>
                <a href='#'>VK</a>
            </div>

            <div className='footer-cta'>
                <a href='#' className='footer-button'>
                    Записаться на консультацию
                </a>
            </div>
        </div>

        <div className='footer-bottom'>
            <p>© 2026 IT School. Все права защищены.</p>
        </div>

    </footer>
  )
}

export default Footer;
