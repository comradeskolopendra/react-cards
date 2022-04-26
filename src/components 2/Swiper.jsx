// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import styles from "../styles/swiper.module.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperTest() {
  const data = [1, 3, 5, 6, 7, 11, 12, 13, 16, 18, 19, 21, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 48, 49, 51, 52, 53, 54, 55, 57, 59, 60, 61, 62, 64, 65, 66, 70, 71, 72, 73, 74, 78, 80, 82, 83, 84, 85, 86, 87, 88, 89, 90, 92, 93, 94, 95, 98, 99, 100]
  // const swiper = useSwiper();
  return (
    <div>
      <Swiper
        // install Swiper modules
        className={styles.containerSwiper}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <div>
            <SwiperSlide className={styles.sliderItem}>
              {data.map((number) => (
              <span className={styles.itemCirc}>
                {number}
              </span>))}
            </SwiperSlide>
            <SwiperSlide className={styles.sliderItem}>
              {data.map((number) => (
                <div className={styles.itemCirc}>
                  {number}
                </div>
              ))}
            </SwiperSlide>
            <SwiperSlide className={styles.sliderItem}>
            {data.map((number) => (
              <div className={styles.itemCirc}>
                {number}
              </div>))}
            </SwiperSlide>
            <SwiperSlide className={styles.sliderItem}>
            {data.map((number) => (
              <div className={styles.itemCirc}>
                {number}
              </div>))}
            </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

