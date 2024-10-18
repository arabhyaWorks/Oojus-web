import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/Carosel.module.css";
import NavBar from "./navBar";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust speed as needed
    fade: true,
    lazyLoad: true,
    arrows: true, // Make sure this is enabled
  };

  const slides = [
    {
      image: "/carousel1.png",
      content: "Slide 1 Content",
    },
    {
      image: "/carousel1.png",
      content: "Slide 1 Content",
    },
    {
      image: "/carousel1.png",
      content: "Slide 1 Content",
    },
   
  ];

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.image}
              alt="Kashi at one place"
              className={styles.sliderCarousel}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;