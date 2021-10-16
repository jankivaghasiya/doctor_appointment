import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonial.css";
import IMAGES1 from "../asset/testimonial_images.js";

class Testimonial extends Component {
  render() {
    return (
        <div>
        <h1 className="heading-font" id="categories">TestiMonials</h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >      
        <div>
          <img src={IMAGES1.img1} />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
            I have been using this app from quiet long but recently with Covid Scenario it became super helpful with online doctor consultation, YouHeal has experienced doctors who speak well and understand the situation well before giving any prescription.
         
            </p>
          </div>
        </div>

        <div>
          <img src={IMAGES1.img2} />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
            Hello YouHeal team, Helping people on very low cost through technology is the best you have done. Your service is the best.
            </p>
          </div>
        </div>

        <div>
          <img src={IMAGES1.img3} />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
            Super quick appointment in less than a minute, Good and super fast response from doctors.
            </p>
          </div>
        </div>
      </Carousel>
      </div>
  
    );
  }
}

export default  Testimonial;