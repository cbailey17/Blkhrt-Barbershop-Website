/* eslint-disable no-undef */
import SwiperCore, { Pagination, EffectCoverflow, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import './carousel.css';
import PropTypes from 'prop-types';

const Carousel = ({ images }) => {
  SwiperCore.use([Pagination, EffectCoverflow, Autoplay]);

  const slides = images.map((image) => {
    return (
      <SwiperSlide key={image.id} className="swiper-slide">
        <img
          alt={image.photo}
          className="photos"
          src={require('../../assets/' +
            image.folder +
            '/' +
            image.photo +
            '-min' +
            image.fileExtension)}
        />
      </SwiperSlide>
    );
  });

  return (
    <>
      <h1 id="haircuts" className="carousel-title text-white text-center sm:text-sm md:text-md">
        Cold beer, great energy, and even better haircuts
      </h1>
      <div className="photo-container">
        <Swiper
          slidesPerView={3}
          autoplay={true}
          loop={true}
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
              slidesPerView: 2
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
