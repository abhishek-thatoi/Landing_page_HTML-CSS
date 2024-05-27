import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";                 // required package for Carousel surfing
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop                                                            // allows to navigate in a loop(not only  back and forth(like circular Queue))
        
        showStatus={false}                                                      // doesnt show index of photos added
        showArrows={false}                                                      // since we are going to use autoplay, remove arrows used to navigate manually 
        showThumbs={false}                                                      // doesnt show preview panel of navigation

        autoPlay
        interval={1000}                                                         // duration of shuffle
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
