import React from 'react';
import item1 from '../../assets/item1.png';
import item2 from '../../assets/item2.png';
import item3 from '../../assets/item3.png';
import item4 from '../../assets/item4.png';
import item5 from '../../assets/item5.png';
import '../masters/Masters.css';
const Masters = () => {
  return (
    <>
      <h1 className="OurMasters">Наши мастера</h1>
      <div className="MastersMenu">
        <div className="cardspart">
          <div className="cardMenu">
            <div className="bordMaster">
              <img className="mastercard" src={item1} alt="card" />
            </div>
            <span className="name">Елена Васильева</span>
            <span className="work">Визажист</span>
          </div>

          <div className="cardMenu">
            <div className="bordMaster">
              <img className="mastercard" src={item2} alt="card" />
            </div>
            <span className="name">Елена Васильева</span>
            <span className="work">Визажист</span>
          </div>

          <div className="cardMenu">
            <div className="bordMaster">
              <img className="mastercard" src={item3} alt="card" />
            </div>
            <span className="name">Елена Васильева</span>
            <span className="work">Визажист</span>
          </div>
        </div>
        <div className="cardspart">
          <div className="cardMenu">
            <div className="bordMaster">
              <img className="mastercard" src={item4} alt="card" />
            </div>
            <span className="name">Елена Васильева</span>
            <span className="work">Визажист</span>
          </div>

          <div className="cardMenu">
            <div className="bordMaster">
              <img className="mastercard" src={item5} alt="card" />
            </div>
            <span className="name">Елена Васильева</span>
            <span className="work">Визажист</span>
          </div>

          <div className="cardMenu">
            <div className="bordMaster">
              <img className="mastercard" src={item1} alt="card" />
            </div>
            <span className="name">Елена Васильева</span>
            <span className="work">Визажист</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Masters;
