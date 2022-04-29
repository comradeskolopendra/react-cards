// import Swiper core and required modules
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import styles from "../styles/swiperTwo.module.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperTest() {
  const data = [1, 3, 5, 6, 7, 11, 12, 13, 16, 18, 19, 21, 25, 26, 27, 28, 29, 30, 31, 32]
  const [swiper, setSwiper] = React.useState();
  const prevRef = React.useRef();
  const nextRef = React.useRef();

  React.useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <div className={styles.containerSwiper}>
        <div  className={styles.prevBtn} ref={prevRef}>
          <svg width="13" height="13" viewBox="0 0 49 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.5 1L2 26.5L48.5 52" stroke="white" strokeWidth="6"/>
          </svg>
        </div>
      <Swiper
        // install Swiper modules
        className={styles.containerSwiper}
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current
        }}
        updateOnWindowResize
        observer
        observeParents
        initialSlide={2}
        onSwiper={setSwiper}
        allowSlideNext = {true}
        allowSlidePrev = {true}
        pagination={{ 
            clickable: true
        }}
      >
        <div>
            <SwiperSlide className={styles.sliderItem}>
              <div className={styles.slideHeader}>
                <h6>№ 870235</h6>
                <p>26.04.2022, 16:23</p>
              </div>
              <div className={styles.circulations}>
                {data.map((number) => (
                <span className={styles.itemCirc}>
                  {number}
                </span>))}
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.sliderItem}>
              <div className={styles.slideHeader}>
                <h6>№ 870235</h6>
                <p>26.04.2022, 16:23</p>
              </div>
              <div className={styles.circulations}>
                {data.map((number) => (
                <span className={styles.itemCirc}>
                  {number}
                </span>))}
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.sliderItem}>
              <div className={styles.slideHeader}>
                <h6>№ 870235</h6>
                <p>26.04.2022, 16:23</p>
              </div>
              <div className={styles.circulations}>
                {data.map((number) => (
                <span className={styles.itemCirc}>
                  {number}
                </span>))}
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.sliderItem}>
              <div className={styles.slideHeader}>
                <h6>№ 870235</h6>
                <p>26.04.2022, 16:23</p>
              </div>
              <div className={styles.circulations}>
                {data.map((number) => (
                <span className={styles.itemCirc}>
                  {number}
                </span>))}
              </div>
            </SwiperSlide>
        </div>
      </Swiper>
      <div className={styles.nextBtn} ref={nextRef}>
          <svg width="13" height="13" viewBox="0 0 49 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.5 1L2 26.5L48.5 52" stroke="white" strokeWidth="6"/>
          </svg>
      </div>
    </div>
  );
};