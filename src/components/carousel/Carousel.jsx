/* eslint-disable no-undef */
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carousel.css';
import PropTypes from 'prop-types';

const Carousel = ({ images }) => {
  const slides = images.map((image) => {
    return (
      <div key={image.id} className="swiper-slide">
        <div className="slide-content">
          <img
            className="cuts"
            src={require('../../assets/' + image.folder + '/' + image.photo + '.jpg')}
          />
        </div>
      </div>
    );
  });

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    initialSlide: 0,
    keyboardControl: true,
    mousewheelControl: true,
    lazyLoading: true,
    preventClicks: false,
    preventClicksPropagation: false,
    lazyLoadingInPrevNext: true,
    coverflow: {
      rotate: 0,
      stretch: 0,
      depth: 250,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar'
    }
  });
  swiper;

  return (
    <div className="row swiper mt-24">
      <div className="swiper-wrapper">{slides}</div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination"></div>

      <div className="swiper-scrollbar"></div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.array
};

export default Carousel;
