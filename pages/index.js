import React from "react";
import Carousel from "./components/carousel";
import Services from "./components/services";
import Footer from "./components/footer";
import StickyHeader from "./components/stickyHeader";
import NavBar from "./components/navBar";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const HomePage = () => (
  <div>
    {/* <NavHeader /> */}
    {/* <StickyHeader /> */}
    {/* <NavBar /> */}
    <Carousel />
    <Services />
    {/* <Footer /> */}
    
  </div>
);

export default HomePage;
