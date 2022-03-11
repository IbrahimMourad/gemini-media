import React from 'react';
import { PlusSquareFill } from 'react-bootstrap-icons';

import { data } from '../../assets/data';
const LatestNews = () => {
  return (
    <section className="news">
      <div className="container">
        <div className="header-wrapper">
          <h2 className="h1">أخر الأخبار</h2>
          <button className="btn d-flex justify-content-center align-items-center">
            <PlusSquareFill className="mx-2" />
            المزيد
          </button>
        </div>
        <div className="grid-wrapper">
          {data.map((el) => (
            <div
              key={el.id}
              className="card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img className="card-img-top" src={el.img} alt={el.text} />
              <h5 className="card-title">{el.text}</h5>
              <p className="card-text">{el.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
