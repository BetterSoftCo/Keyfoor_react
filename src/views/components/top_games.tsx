import { HTMLAttributes, memo, ReactElement, useRef } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ArrowLeft,
  ArrowLeftOutline,
  ArrowRightOutline,
  Cover,
} from "../../assets";
import ImageComponent from "./image_component";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
interface Props extends HTMLAttributes<HTMLDivElement> {}

export function TopGame({}: Props): ReactElement {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <div className="d-flex flex-row align-items-center">
      <img
        src={ArrowRightOutline}
        ref={navigationPrevRef}
        alt="arrow"
        className="prevBtn"
      />
      <div className="top-games-parent d-flex flex-row mx-auto">
        <Swiper
          slidesPerView={1.25}
          spaceBetween={0}
          slidesPerGroup={1}
          loop={false}
          navigation={{
            prevEl: ".prevBtn",
            nextEl: ".nextBtn",
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          onSwiper={(swiper: any) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;

              // Re-init navigation
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          modules={[Pagination, Navigation]}
          className="top-games-slider"
          breakpoints={{
            278: {
              slidesPerView: 1.35,
            },
            300: {
              slidesPerView: 1.45,
            },
            320: {
              slidesPerView: 1.55,
            },
            340: {
              slidesPerView: 1.65,
            },
            383: {
              slidesPerView: 1.85,
            },
            415: {
              slidesPerView: 2,
            },
            465: {
              slidesPerView: 2.25,
            },
            520: {
              slidesPerView: 2.5,
            },
            570: {
              slidesPerView: 2.75,
            },
            673: {
              slidesPerView: 3.25,
            },
            730: {
              slidesPerView: 3.5,
            },
            830: {
              slidesPerView: 4,
            },
            885: {
              slidesPerView: 4.25,
            },
            991: {
              slidesPerView: 4,
            },
            1060: {
              slidesPerView: 4.25,
            },
            1165: {
              slidesPerView: 4.75,
            },
            1285: {
              slidesPerView: 5.25,
            },
            1390: {
              slidesPerView: 5.75,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <SwiperSlide key={item}>
              <Link to="/gamedetail" className="text-decoration-none">
                <div className="card-game">
                  <ImageComponent height="100%" width="100%" image={Cover} />
                  <div className="info">
                    <span className="name-fa">اسپلندر</span>
                    <span className="name-en">Splendor</span>
                    <span className="time">40 - 80 Min</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <img
        src={ArrowLeftOutline}
        ref={navigationNextRef}
        alt="arrow"
        className="nextBtn"
      />
    </div>
  );
}

export default memo(TopGame);
