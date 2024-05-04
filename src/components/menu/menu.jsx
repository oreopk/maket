import React from 'react';
import close from '../../assets/close-icon.png';
import './menu.css';
const Menu = ({ toggleMenu }) => {
  return (
    <>
      <div className="menuopen">
        <button className="buttonMENU" onClick={toggleMenu}>
          <img className="imgbutton" src={close} alt="" />
        </button>
        <span className="menuLorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum,
          adipiscing amet in egestas sem dui, arcu faucibus scelerisque. Nisl
          est felis id volutpat. Sed dolor fermentum amet lectus nibh quis.
          Tortor donec pellentesque leo ac placerat. Morbi
        </span>
        <div className="submenu">
          <span className="menuString">Контакты</span>
          <span className="menuSpan">+7 (812) 123-45-67</span>
          <span className="menuSpan">+7 (911) 123-45-67</span>
          <span className="menuSpan">
            Новоостровский проспект, дом 36 лит. С
          </span>
        </div>
        <div className="submenu">
          <span className="menuString">Режим работы</span>
          <span className="menuSpan">С 10:00 до 21:00 (Пн-Пт)</span>
          <span className="menuSpan">С 11:00 до 20:00 (Сб-Вс)</span>
          <span className="menuSpan">
            Новоостровский проспект, дом 36 лит. С
          </span>
        </div>
      </div>
    </>
  );
};
export default Menu;
