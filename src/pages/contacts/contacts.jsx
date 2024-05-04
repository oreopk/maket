import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './contacts.css';
const Contacts = () => {
  // Инициализация карты и установка точки центра и масштаба
  const position = [51.505, -0.09];

  return (
    <>
      <h1 className="Contacts">Контакты</h1>
      <MapContainer className="map" center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      <div className="contmain">
        <div className="contactsfooter">
          <div className="subcontacts">
            <span className="maincontacts">Контакты</span>
            <span className="contactsSpan">+7 (812) 123-45-67</span>
            <span className="contactsSpan">+7 (911) 123-45-67</span>
            <span className="contactsSpan">
              Новоостровский проспект, дом 36 лит. С
            </span>
          </div>
          <div className="subcontacts">
            <span className="maincontacts">Режим работы</span>
            <span className="contactsSpan">С 10:00 до 21:00 (Пн-Пт)</span>
            <span className="contactsSpan">С 11:00 до 20:00 (Сб-Вс)</span>
            <span className="contactsSpan">
              Новоостровский проспект, дом 36 лит. С
            </span>
          </div>
        </div>
        <div className="contactsfooter">
          <div className="subcontacts">
            <span className="maincontacts">Контакты</span>
            <span className="contactsSpan">+7 (812) 123-45-67</span>
            <span className="contactsSpan">+7 (911) 123-45-67</span>
            <span className="contactsSpan">
              Новоостровский проспект, дом 36 лит. С
            </span>
          </div>
          <div className="subcontacts">
            <span className="maincontacts">Режим работы</span>
            <span className="contactsSpan">С 10:00 до 21:00 (Пн-Пт)</span>
            <span className="contactsSpan">С 11:00 до 20:00 (Сб-Вс)</span>
            <span className="contactsSpan">
              Новоостровский проспект, дом 36 лит. С
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contacts;
