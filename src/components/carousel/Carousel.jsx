/* eslint-disable no-undef */
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './carousel.css';
import PropTypes from 'prop-types';

const Carousel = ({ images }) => {
  SwiperCore.use([Pagination, EffectCoverflow]);

  const slides = images.map((image) => {
    return (
      <SwiperSlide key={image.id} className="swiper-slide">
        <div className="slide-content">
          <img
            className="photos"
            src={require('../../assets/' + image.folder + '/' + image.photo + image.fileExtension)}
          />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <h1 id="carousel-title" className="text-white text-center sm:text-sm md:text-md">
        Cold beer, great energy, and even better haircuts
      </h1>
      <div className="photo-container">
        <Swiper
          slidesPerView={3}
          autoplay={true}
          loop={true}
          initialSlide={0}
          effect="coverflow"
          grabCursor="true"
          centeredSlides="true"
          spaceBetween={0}
          onSlideChange={() => console.log('slide change')}
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 20,
            stretch: 25,
            depth: 250,
            modifier: 1,
            slideShadows: false
          }}
          breakpoints={{
            700: {
              spaceBetween: 0,
              slidesPerView: 3
            },
            500: {
              spaceBetween: 100,
              slidesPerView: 2
            },
            411: {
              spaceBetween: 100,
              slidesPerView: 2
            },
            300: {
              spaceBetween: 0,
              slidesPerView: 1
            }
          }}>
          {slides}
        </Swiper>
      </div>
    </>
  );
};

Carousel.propTypes = {
  images: PropTypes.array
};

export default Carousel;
