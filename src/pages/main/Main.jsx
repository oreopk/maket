import './Main.css';

import cav from '../../assets/cav.png';
import React, { useState } from 'react';
import kevin from '../../assets/kevin.png';
import oribe from '../../assets/oribe.png';
import alterna from '../../assets/alterna.png';
import aldo from '../../assets/aldo.png';
import works1 from '../../assets/work-1.png';
import works2 from '../../assets/work-2.png';
import works3 from '../../assets/work-3.png';
import works4 from '../../assets/work-4.png';
import works5 from '../../assets/work-5.png';
import works6 from '../../assets/work-6.png';
import works7 from '../../assets/work-7.png';
import works8 from '../../assets/work-8.png';
import works9 from '../../assets/work-9.png';

import { services } from '../../data/services.js';
import Service from '../../components/service-item/service.jsx';
function Main() {
  return (
    <>
      <div className="backgroundImage">
        <h1 className="mainText">
          Салон красоты <br />
          «Delote-Beauty» <br />
          на Крестовском
        </h1>
        <p className="tip">Прокрутите вниз</p>
      </div>

      <img className="cavstyle" src={cav} alt="cav" />
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh
        vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan
        risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis
        tristique. Viverra augue lorem ut quisque quam tortor, malesuada
        iaculis.
        <br /> <br />
        Et elementum at nulla venenatis, faucibus integer. Auctor neque eros,
        viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit
        imperdiet sapien fringilla vestibulum sit fames.
      </p>

      <div className="cardsMenu">
        {services.map((service) => (
          <Service key={service.id} name={service.name} img={service.img} />
        ))}
      </div>
      <div className="icons">
        <img className="icon" src={kevin} alt="card" />
        <img className="icon" src={oribe} alt="card" />
        <img className="icon" src={alterna} alt="card" />
        <img className="icon" src={aldo} alt="card" />
      </div>
      <div className="works">
        <span>Наши работы</span>
        <div className="worksmenu">
          <h2>Показать все</h2>
          <h2>Парихмахерские услуги</h2>
          <h2>Маникюр</h2>
          <h2>Педикюр</h2>
        </div>
      </div>
      <div className="examples">
        <img className="example" src={works1} alt="card" />
        <img className="example" src={works2} alt="card" />
        <img className="example" src={works3} alt="card" />
        <img className="example" src={works4} alt="card" />
        <img className="example" src={works5} alt="card" />
        <img className="example" src={works6} alt="card" />
        <img className="example" src={works7} alt="card" />
        <img className="example" src={works8} alt="card" />
        <img className="example" src={works9} alt="card" />
      </div>
    </>
  );
}

export default Main;
