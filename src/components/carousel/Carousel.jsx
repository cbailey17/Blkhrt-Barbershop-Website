/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './carousel.css';
import PropTypes from 'prop-types';

const Carousel = ({ images }) => {
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
    <div className="photo-container">
      <Swiper
        effect="coverflow"
        grabCursor="true"
        centeredSlides="true"
        spaceBetween={0}
        slidesPerView={4}
        loop="true"
        pagination={{ clickable: true, dynamicBullets: true }}
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
            slidesPerView: 4
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
  );
};

Carousel.propTypes = {
  images: PropTypes.array
};

export default Carousel;
