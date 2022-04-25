// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import styles from "../styles/swiper.module.css"
// import '../styles'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

export default function SwiperTest() {
  return (
    <Swiper className={styles.containerSwiper}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className={styles.swiperSlide}>Slide 1</SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>Slide 2</SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>Slide 3</SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>Slide 4</SwiperSlide>
    </Swiper>
  );
};
