import React from 'react';
import Slider from "react-slick";
import styles from './Banner.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner({bannerlist})
{
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
   return(
    <>
     <div className='w-full'>
      <Slider {...settings}>
        {bannerlist.map((list) => (
            <div>
          <div key={list.id} className={styles['test']}>
            <div className={styles['text']}>
              <h1 
                data-aos="zoom-out"
                data-aos-duration="600" 
                data-aos-once="true">{list.subtitle}</h1>
              <h2 
              data-aos="zoom-out"
              data-aos-duration="700" 
              data-aos-once="true">{list.title}</h2>
              <div 
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="600"
              data-aos-dealy="200">
              <button type="button" className={`${styles['button']} btn btn-danger`}>See More</button>
              </div>
            </div>
            <div 
            data-aos="zoom-in"
            data-aos-once="true"
            className={styles['picture']}>
              <img src={list.img} alt={list.title} className={styles['image']}/>
            </div>
          </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
   ); 
}
export default Banner;