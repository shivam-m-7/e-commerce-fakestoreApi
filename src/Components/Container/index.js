import React from 'react';

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Container = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,    
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <>
    <div className='carousel'>
        
        <Slider {...settings}>
          <div>
          <img src='https://i.postimg.cc/x8cQt2Ty/tamanna-rumee-lp-Gm415q9-JA-unsplash-3.jpg' width={'100%'} border='0' alt='promotion-fashion-banner'/>
          </div>
          <div>
          <img src='https://i.postimg.cc/rm9GgBYm/aayudh-bhattacharya-87a-Wa1mutz-U-unsplash-1.jpg' width={'100%'} border='0' alt='promotion-fashion-banner'/>
          </div>
          <div >
          <img src='https://i.postimg.cc/v8PCXknD/markus-spiske-BTKF6-G-O8f-U-unsplash-1.jpg' width={'100%'} border='0' alt='promotion-fashion-banner'/>
          </div>
        
        </Slider>
      </div>
    <div className="container mx-auto">
      {props.children}
    </div>
    </>
  )
}

export default Container