import React from "react";
import Carousel from "react-bootstrap/Carousel";
//import ExampleCarouselImage from "components/ExampleCarouselImage";
import { Image } from "react-bootstrap";

const Carousal = () => {
  return (
    <Carousel
      style={{
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <Carousel.Item>
        <Image src="https://loremflickr.com/3000/1500/dog" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://loremflickr.com/3000/1500/dog" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://loremflickr.com/3000/1500/dog" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousal;
