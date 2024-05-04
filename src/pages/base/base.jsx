import React, { useState } from 'react';
import Header from '../../components/header/header';
import { Outlet } from 'react-router-dom';
import style from './base.module.css';
import Menu from '../../components/menu/menu';

import Footer from '../../components/footer/Footer';
const Base = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className={style.base}>
      <div className={style.menuflex}>
        {isMenuOpen && <Menu toggleMenu={toggleMenu} />}

        <div className={style.base}>
          <Header toggleMenu={toggleMenu} />

          <Outlet />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Base;
