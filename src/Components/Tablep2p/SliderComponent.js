import React, { Component } from "react";
import Slider from "react-slick";

function SliderComponent() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>asdhalkfjhasldkjhasfaslkdjasaskjf</h3>
        </div>
        <div>
        <h3>asdhalkfjhasldkjhasfaslkdjasaskjf</h3>
        </div>
        <div>
        <h3>asdhalkfjhasldkjhasfaslkdjasaskjf</h3>
        </div>
        <div>
        <h3>asdhalkfjhasldkjhasfaslkdjasaskjf</h3>
        </div>
        <div>
        <h3>asdhalkfjhasldkjhasfaslkdjasaskjf</h3>
        </div>
        <div>
        <h3>asdhalkfjhasldkjhasfaslkdjasaskjf</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SliderComponent;
