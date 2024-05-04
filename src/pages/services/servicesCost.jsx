import React from 'react';
import { useEffect, useState } from 'react';
import servicepng from '../../assets/service.png';
import '../services/servicesCost.css';
import { servicescost } from '../../data/services-cost';
import ServiceCost from '../../components/servicecost-item/service-cost';
const ServicesCost = () => {
  const [priceList, setPriceList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/services/get-list')
      .then((res) => res.json())
      .then((data) => setPriceList(data));
  }, []);
  useEffect(() => {
    console.log(priceList);
  }, [priceList]);
  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  const result = chunkArray(priceList, 4);
  let x = result.length - 1;

  const servicesJSX = [];
  let order = 'order';
  while (x >= 0) {
    if (x % 2 === 0) {
      order = '';
    } else {
      order = 'order';
    }

    servicesJSX.push(
      <div className="servicespart">
        <img
          className={'servicepng ' + order}
          src={servicepng}
          alt="servicepng"
        />
        <div className="ServicesList">
          {result[x].map((service) => (
            <ServiceCost
              key={service.id}
              name={service.name}
              cost={service.cost}
              desc={service.description}
            />
          ))}
        </div>
      </div>
    );

    x--;
  }
  servicesJSX.reverse();
  return (
    <>
      <h1 className="OurServices">Цены на услуги</h1> {servicesJSX}
    </>
  );
};
export default ServicesCost;
