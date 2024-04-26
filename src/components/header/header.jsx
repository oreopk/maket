import React from 'react';
import omega from '../../assets/omega.png';
import instagram from '../../assets/instagram.png';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../routes.js';
import line from '../../assets/Line.png';
const Header = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink
        className={({ isActive }) =>
          [styles.link, isActive && styles.active].join(' ')
        }
        to={Paths.ROOT}
      >
        <img className={styles.imgstyle} src={instagram} alt="Instagramm" />
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          [styles.link, isActive && styles.active].join(' ')
        }
        to={Paths.ROOT}
      >
        Главная
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          [styles.link, isActive && styles.active].join(' ')
        }
        to={Paths.MASTERS}
      >
        Мастера
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          [styles.link, isActive && styles.active].join(' ')
        }
        to={Paths.BLANK}
      >
        Косметика
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          [styles.link, isActive && styles.active].join(' ')
        }
        to={Paths.BLANK}
      >
        <img className={styles.imgstyle} src={omega} alt="Omega" />
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          [styles.link, isActive && styles.active].join(' ')
        }
        to={Paths.BLANK}
      >
        Акции
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          [styles.link, isActive && styles.active].join(' ')
        }
        to={Paths.BLANK}
      >
        Отзывы
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          [styles.link, isActive && styles.active].join(' ')
        }
        to={Paths.BLANK}
      >
        Контакты
      </NavLink>
      <button className={styles.but}>
        <img className={styles.line} src={line} alt="line" />
        <img
          className={styles.line + ' ' + styles.line2}
          src={line}
          alt="line"
        />
        <img className={styles.line} src={line} alt="line" />
      </button>
    </nav>
  );
};

export default Header;
