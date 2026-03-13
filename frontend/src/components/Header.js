import '../styles/Header.css';

const Header = () => {
    return (
        <header className="main-header">
            <div className="logo">
            <img src="https://i.ibb.co/r2HZXnkh/Group-7.png" alt="logo" border="0"/>
            </div>

            <nav className="main-nav">
                <ul>
                    <li><a href="#">Новости</a></li>
                    <li><a href="#">Расписание</a></li>
                    <li><a href="#">Стоимость обучения</a></li>
                    <li><a href="#">Ведомость</a></li>
                    <li><a href="#">Запись на консультацию</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;