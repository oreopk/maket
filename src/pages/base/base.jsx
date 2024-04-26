import React from 'react';
import Header from '../../components/header/header';
import { Outlet } from 'react-router-dom';
import style from './base.module.css';

import Footer from '../../components/footer/Footer';
const Base = () => {
  return (
    <div className={style.base}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Base;
