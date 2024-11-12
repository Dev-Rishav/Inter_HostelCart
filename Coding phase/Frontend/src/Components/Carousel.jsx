import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white z-10"
    onClick={onClick}
  >
    <FaArrowLeft size={30} style={{ color: 'black'}}/>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white z-10"
    onClick={onClick}
  >
    <FaArrowRight size={30} style={{ color: 'black'}}/>
  </div>
);

const Carousel = ({ images =[]}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative mt-6">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-6">
            <img src={image} alt={`Slide ${index}`} className="w-[500px] h-[250px] object-cover rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

