// import Swiper core and required modules
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import styles from "../styles/swiper.module.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperTest() {
  const data = [1, 3, 5, 6, 7, 11, 12, 13, 16, 18, 19, 21, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 48, 49, 51, 52, 53, 54, 55, 57, 59, 60, 61, 62, 64, 65, 66, 70, 71, 72, 73, 74, 78, 80, 82, 83, 84, 85, 86, 87, 88, 89, 90, 92, 93, 94, 95, 98, 99, 10]
  const [swiper, setSwiper] = React.useState();
  const prevRef = React.useRef();
  const nextRef = React.useRef();

  React.useEffect(() => {
    if (swiper) {
      console.log("Swiper instance:", swiper);
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <div className={styles.containerSwiper}>
        <div  className={styles.prevBtn} ref={prevRef}>
          prev
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
        pagination={{ clickable: true }}
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
          next
      </div>
    </div>
  );
};

