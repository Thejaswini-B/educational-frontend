import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = () => {
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div interval={3000} className="eachCarousel">
          <img
            className="images"
            img-fluid="true"
            src="assets/edu1.jpg"
            alt="Image1"
          />
        </div>
        <div interval={2000} className="eachCarousel">
          <img
            className="images"
            img-fluid="true"
            src="assets/edu2.jpg"
            alt="Image2"
          />
        </div>
        <div className="eachCarousel">
          <video className="images" controls width="100%">
            <source src="assets/e-learning.mp4" type="video/mp4" />
          </video>
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
