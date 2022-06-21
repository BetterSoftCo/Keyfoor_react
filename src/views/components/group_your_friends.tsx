import { HTMLAttributes, memo, ReactElement, useRef } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Theme } from "utilities_js";
import { ArrowLeftOutline, ArrowRightOutline, People2 } from "../../assets";
import { LabelButton } from "./label_button";
interface Props extends HTMLAttributes<HTMLDivElement> {}

export function GroupYourFriends({}: Props): ReactElement {
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
      <div className="group-friends-parent mx-auto">
        <Swiper
          loop={false}
          loopFillGroupWithBlank={false}
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
          className="group-friends-slider"
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <SwiperSlide key={item}>
              <div className="card-friends py-2">
                <div className="card-friends-avatar">
                  <img src={People2} alt="people" className="icon" />
                </div>
                <span className="name">گروه بچه های شمرون</span>
                <LabelButton
                  type={Theme.dark}
                  minHeight="50px"
                  fontSize="15px"
                  borderRadius="10px"
                  className="w-100"
                  backgroundColor="#FF8A00"
                  color="#FFFFFF"
                  border="none"
                  boxShadow="0px 0px 20px rgba(255, 138, 0, 0.5)"
                  children={
                    <div className="w-100">
                      <span className="mx-2 text-nowrap">درخواست </span>
                    </div>
                  }
                ></LabelButton>
              </div>
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

export default memo(GroupYourFriends);
