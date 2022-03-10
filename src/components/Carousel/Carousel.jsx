import React from 'react';

import { Carousel, Button } from 'react-bootstrap';
import carouselImg from './slide-three.jpg';

const CarouselWrapper = () => {
  return (
    <Carousel
      indicators={false}
      nextIcon={
        <div className="carousel-control-wrap">
          <span
            aria-hidden="true"
            className="carousel-control-next-icon"
          ></span>
          <span className="visually-hidden">Next</span>
        </div>
      }
      prevIcon={
        <div className="carousel-control-wrap">
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon"
          ></span>
          <span className="visually-hidden">Previous</span>
        </div>
      }
    >
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImg} alt="First slide" />
        <Carousel.Caption>
          <p className="mb-0">نحن شركاء رحلتك</p>
          <h2 className="h1 mb-0">نحو حياة صحية سعيدة</h2>
          <Button className="mt-3">المزيد</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImg} alt="First slide" />
        <Carousel.Caption>
          <p className="mb-0">نحن شركاء رحلتك</p>
          <h2 className="h1 mb-0">نحو حياة صحية سعيدة</h2>
          <Button className="mt-3">المزيد</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImg} alt="First slide" />
        <Carousel.Caption>
          <p className="mb-0">نحن شركاء رحلتك</p>
          <h2 className="h1 mb-0">نحو حياة صحية سعيدة</h2>
          <Button className="mt-3">المزيد</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselWrapper;
