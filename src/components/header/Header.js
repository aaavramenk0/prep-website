import './Header.css'
import logo from './logo.png'


const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo of the restaurant" />
            <li className="nav-menu">
                <ul> Меню </ul>
                <ul> Про нас </ul>
                <ul> Контакти </ul>
                <ul> Оплата </ul>
            </li>
        </header>
    )
}

export default Header;
