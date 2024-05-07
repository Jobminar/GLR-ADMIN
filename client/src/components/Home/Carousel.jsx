import React from "react";
import { Carousel } from "react-bootstrap";
import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import Image3 from "../../assets/images/image3.jpg";

const MyCarousel = () => {
  return (
    <Carousel
      controls={true}
      indicators={true}
      interval={3000}
      pause="hover"
      style={{
        margin: "0",
        width: "98vw",
        padding: "1.8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
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
