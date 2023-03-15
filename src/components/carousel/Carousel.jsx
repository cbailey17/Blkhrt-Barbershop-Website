// import Swiper and modules styles
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PropTypes from 'prop-types';

const Carousel = ({ images }) => {
  const slides = images.map((image) => {
    return (
      <div key={image.id} className="swiper-slide">
        <img src={image.photo} />
      </div>
    );
  });

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    breakpoints: {
      767: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 2
      },
      1270: {
        slidesPerView: 1
      }
    },
    loop: true,
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
    <div className="swiper w-[600px] h-[300px]">
      <div className="swiper-wrapper">{slides}</div>
      <div className="swiper-pagination"></div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <div className="swiper-scrollbar"></div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.array
};

export default Carousel;
