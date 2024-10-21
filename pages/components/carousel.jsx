import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/Carosel.module.css";
import useMediaQuery from "../../hooks/useMediaQuery";

const Carousel = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    lazyLoad: true,
    arrows: true,
  };

  const slides = [
    {
      image: isMobile ? "/responsiveCarousel.png" : "/carousel1.png",
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
