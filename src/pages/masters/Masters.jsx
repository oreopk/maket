import React from 'react';

import '../masters/Masters.css';
import { masters } from '../../data/masters';
import Master from '../../components/master-item/master';
const Masters = () => {
  return (
    <>
      <h1 className="OurMasters">Наши мастера</h1>
      <div className="MastersMenu">
        {masters.map((master) => (
          <Master
            key={master.id}
            name={master.name}
            work={master.work}
            img={master.img}
          />
        ))}

        <div className="cardspart"></div>
      </div>
    </>
  );
};
export default Masters;
