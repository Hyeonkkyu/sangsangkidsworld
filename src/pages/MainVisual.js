import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import"../css/dotCustom.css"
import { mainVisual } from "../data/Info.js";

const MainVisual = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false
  };
  return (
    <section className='mainVisual container'>
      <Slider {...settings} dotsClass="dotCustom">
        {
          mainVisual.map((it, idx) => {
            return (
              <figure key={idx} className={`thumb0${it.id}`}>
              </figure>
            )
          })
        }
      </Slider>
    </section>
  )
}

export default MainVisual