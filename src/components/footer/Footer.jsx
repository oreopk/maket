import React from 'react';
import omega from '../../assets/omega.png';
import instagram from '../../assets/instagram.png';
import style from '../footer/Footer.module.css';
const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <img className={style.footerimg} src={omega} alt="omega" />
        <div className={style.subfooter}>
          <span className={style.mainstring}>Контакты</span>
          <span className={style.footerSpan}>+7 (812) 123-45-67</span>
          <span className={style.footerSpan}>+7 (911) 123-45-67</span>
          <span className={style.footerSpan}>
            Новоостровский проспект, дом 36 лит. С
          </span>
        </div>
        <div className={style.subfooter}>
          <span className={style.mainstring}>Режим работы</span>
          <span className={style.footerSpan}>С 10:00 до 21:00 (Пн-Пт)</span>
          <span className={style.footerSpan}>С 11:00 до 20:00 (Сб-Вс)</span>
          <span className={style.footerSpan}>
            Новоостровский проспект, дом 36 лит. С
          </span>
        </div>
        <div className={style.subfooter}>
          <span className={style.mainstring}>Мы в Instagram</span>
          <img className={style.footerimg} src={instagram} alt="instagramm" />
        </div>
      </footer>
      <span className={style.copyright}>Copyright © 2017 - 2022</span>
    </>
  );
};
export default Footer;
