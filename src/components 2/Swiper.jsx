// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// import { useSwiper } from 'swiper/react';
// import { EffectFade } from 'swiper';

// Import Swiper styles
import styles from "../styles/swiper.module.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

export default function SwiperTest() {
  return (
    <div>
      <Swiper
        // install Swiper modules
        className={styles.containerSwiper}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <div>
          <SwiperSlide className={styles.sliderItem}>Slide 1</SwiperSlide>
          <SwiperSlide className={styles.sliderItem}>Slide 2</SwiperSlide>
          <SwiperSlide className={styles.sliderItem}>Slide 3</SwiperSlide>
          <SwiperSlide className={styles.sliderItem}>Slide 4</SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

