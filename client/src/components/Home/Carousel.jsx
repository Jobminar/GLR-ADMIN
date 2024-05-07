import React from "react";
import { Carousel } from "react-bootstrap";
import Image1 from "../../assets/images/course1.png";
import Image2 from "../../assets/images/course2.png";
import Image3 from "../../assets/images/course3.png";

const MyCarousel = () => {
  return (
    <Carousel
      controls={true}
      indicators={true}
      interval={3000}
      pause="hover"
      style={{ margin: "0", width: "100vw" }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="First slide"
          style={{
            height: "auto",
            maxHeight: "85vh",
            objectFit: "contain",
            margin: "0.1px",
          }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="Second slide"
          style={{ height: "auto", maxHeight: "85vh", objectFit: "contain" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Third slide"
          style={{ height: "auto", maxHeight: "85vh", objectFit: "contain" }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
