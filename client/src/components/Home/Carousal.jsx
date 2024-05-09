import React from "react";
import { Carousel } from "react-bootstrap";
import './carousel.css';
import Image1 from "../../assets/images/course1.png";
import Image2 from "../../assets/images/course2.png";
import Image3 from "../../assets/images/course3.png";

const MyCarousel = () => {
  return (
    <div className="carousel-con" style={{ height: '60vh' }}>
      <Carousel controls={true} indicators={true} interval={3000} pause="hover" style={{ height: '100%' }}>
        <Carousel.Item>
          <img className="d-block w-100 h-auto" src={Image3} alt="First slide" style={{ height: '100px' }} />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-auto" src={Image1} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-auto" src={Image2} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
