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
    autoplaySpeed: 2000,
    fade: true,
  };

  const slides = [
    {
      // image:
      //   "https://staticin.sadhguru.org/in/pub/media/om/homeslider/r/u/rudraksha_web.jpg",
      image:
        "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/OOJUS_Header1.png?alt=media&token=5b41983d-6cb7-41fb-8d4b-43a92a94cd9d",
      content: "Slide 1 Content",
    },
    // {
    //   image:
    //     "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/HomeBanner/Web-Banner/Home_Page_Hero_Banner_Iphone.jpg",
    //   content: "Slide 2 Content",
    // },
    // {
    //   image:
    //     "https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/HomeBanner/Web-Banner/Hotel-home-page-banner-web.jpg",
    //   content: "Slide 3 Content",
    // },
  ];

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
              <div
                className={styles.sliderCarousel}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  height: "80vh",
                }}
              >
                <NavBar />
                
              </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
