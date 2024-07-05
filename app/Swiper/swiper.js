'use client'
import React from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../css/index.css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



const Slider = () => {
  const items = [
    { key: '1', image: './imgs/Group 11 (1).png' },
    { key: '2', image: './imgs/Group 11.png' },
    { key: '3', image: './imgs/Rectangle 3.png' },
    { key: '4', image: './imgs/Group 11 (1).png' },
    { key: '5', image: './imgs/Group 11.png' },
    { key: '6', image: './imgs/Rectangle 3.png' },
 
  ];
  return (
<>
    <div className='swiper-top-text' >
        <h2>Featured Images</h2>
        <p>The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent & awe inspiring.</p>
    </div>

    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
    >
      {items.map(item => (
        <SwiperSlide key={item.key}>
          <img src={`${item.image}`} />
        </SwiperSlide>
      ))}
      </Swiper>
      </>
  );
};
export default Slider;