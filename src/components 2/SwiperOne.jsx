// import Swiper core and required modules
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import styles from "../styles/swiperOne.module.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperTest() {
  const [swiper, setSwiper] = React.useState();
  const prevRef = React.useRef();
  const nextRef = React.useRef();

  const data = ["№2770573", "28.04.2022, 09:35", "21"]

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
              <path d="M48.5 1L2 26.5L48.5 52" stroke="white" strokeWidth="4"/>
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
        pagination={{ clickable: true }}
      >
        <div>
            <SwiperSlide className={styles.sliderItem}>
                <div className={styles.slideHeader}>
                  <h6>{data[0]}</h6>
                  <p>{data[1]}</p>
                </div>
                <span className={styles.itemCirc}>
                  {data[2]}
                </span>
                <div className={styles.borderBottom}></div>
                <div className={styles.slideHeader}>
                  <h6>{data[0]}</h6>
                  <p>{data[1]}</p>
                </div>
                <span className={styles.itemCirc}>
                  {data[2]}
                </span>
                <div className={styles.borderBottom}></div>
            </SwiperSlide>
            <SwiperSlide className={styles.sliderItem}>
              <div className={styles.slideHeader}>
                  <h6>{data[0]}</h6>
                  <p>{data[1]}</p>
                </div>
                <span className={styles.itemCirc}>
                  {data[2]}
                </span>
                <div className={styles.borderBottom}></div>
                <div className={styles.slideHeader}>
                  <h6>{data[0]}</h6>
                  <p>{data[1]}</p>
                </div>
                <span className={styles.itemCirc}>
                  {data[2]}
                </span>
              <div className={styles.borderBottom}></div>
            </SwiperSlide>
            <SwiperSlide className={styles.sliderItem}>
              <div className={styles.slideHeader}>
                  <h6>{data[0]}</h6>
                  <p>{data[1]}</p>
                </div>
                <span className={styles.itemCirc}>
                  {data[2]}
                </span>
                <div className={styles.borderBottom}></div>
                <div className={styles.slideHeader}>
                  <h6>{data[0]}</h6>
                  <p>{data[1]}</p>
                </div>
                <span className={styles.itemCirc}>
                  {data[2]}
                </span>
              <div className={styles.borderBottom}></div>
            </SwiperSlide>
            <SwiperSlide className={styles.sliderItem}>
              <div className={styles.slideHeader}>
                  <h6>{data[0]}</h6>
                  <p>{data[1]}</p>
                </div>
                <span className={styles.itemCirc}>
                  {data[2]}
                </span>
                <div className={styles.borderBottom}></div>
                <div className={styles.slideHeader}>
                  <h6>{data[0]}</h6>
                  <p>{data[1]}</p>
                </div>
                <span className={styles.itemCirc}>
                  {data[2]}
                </span>
              <div className={styles.borderBottom}></div>
            </SwiperSlide>
        </div>
      </Swiper>
      <div className={styles.nextBtn} ref={nextRef}>
        <svg width="13" height="13" viewBox="0 0 49 53" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48.5 1L2 26.5L48.5 52" stroke="white" strokeWidth="4"/>
        </svg>
      </div>
    </div>
  );
};

// sqlcmd -S DESKTOP-ORJ9247\SQLEXPRESS -E