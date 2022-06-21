import React, { HTMLAttributes, memo, ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Autoplay]);
interface ImageList {
  img: string;
  child: string[];
}
interface Props extends HTMLAttributes<HTMLDivElement> {
  ImageList: ImageList[];
  className?: string;
}

export function Carousel({ ImageList, className }: Props): ReactElement {
  let IsclassName;
  if (className !== undefined) {
    IsclassName = className;
  } else {
    IsclassName = "";
  }
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {ImageList.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default memo(Carousel);
