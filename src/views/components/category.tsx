import { HTMLAttributes, memo, ReactElement, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Theme } from "utilities_js";
import {
  BoxBlack,
  Cup,
  DesignTools,
  DirectBox,
  Flash,
  Glass,
  Layer,
  Message,
  Profile,
  Profile2User,
  SearchZoomIn,
  TrendUp,
} from "../../assets";
import { IconTextRow } from "./icon_text_horizantal";
interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Categories({}: Props): ReactElement {
  const [isActive, setActive] = useState(0);
  const items = [
    { id: 1, img: Glass, name: "هوش و تفکر", to: "/" },
    { id: 2, img: DirectBox, name: "کارتی", to: "/" },
    { id: 3, img: Profile2User, name: "دورهمی", to: "/" },
    { id: 4, img: Cup, name: "نفر اول", to: "/" },
    { id: 5, img: BoxBlack, name: "تاس دار", to: "/" },
    { id: 6, img: Flash, name: "هیجانی", to: "/" },
    { id: 7, img: Profile, name: "تک نفره", to: "/" },
    { id: 8, img: Profile2User, name: "تیمی", to: "/" },
    { id: 9, img: DirectBox, name: "کارتی", to: "/" },
    { id: 10, img: Message, name: "گفتگو محور", to: "/" },
    { id: 11, img: SearchZoomIn, name: "جستجوگر", to: "/" },
    { id: 12, img: TrendUp, name: "خرید و فروش", to: "/" },
    { id: 13, img: DesignTools, name: "هنری", to: "/" },
  ];
  return (
    <div className="row">
      <div className="col-md-12 d-none d-lg-block">
        <IconTextRow
          fontSize="18px"
          className="lighter pointer"
          text="دسته بندی ها"
          theme={Theme.light}
          color="#787878"
          fontWeight="700"
          children={
            <span className="mx-2">
              <img src={Layer} alt="layer" />
            </span>
          }
        ></IconTextRow>
      </div>
      <div className="col-md-12 mt-1 d-none d-lg-block">
        <div className="d-flex align-items-center flex-wrap pb-1 list-button">
          {items.map((item) => (
            <Link
              to="/"
              key={item.id}
              onClick={() => setActive(item.id)}
              className={
                isActive === item.id
                  ? "px-1 mx-2 mt-3 d-flex flex-row align-items-center active-Category-Item"
                  : "px-1 mx-2 mt-3 d-flex flex-row align-items-center category-Item"
              }
            >
              <div className="d-flex align-items-center ">
                <img src={item.img} />
                <span className="mx-2">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="col-md-12 d-block d-lg-none">
        <div className="row">
          <div className="col-md-12">
            <IconTextRow
              fontSize="18px"
              className="lighter pointer"
              text="دسته بندی ها"
              theme={Theme.light}
              color="#787878"
              fontWeight="700"
              children={
                <span className="mx-2">
                  <img src={Layer} alt="layer" />
                </span>
              }
            ></IconTextRow>
          </div>
          <div className="col-md-12 mt-1 list-Button me-1">
            <Swiper
              slidesPerView={1.65}
              // spaceBetween={10}
              // slidesPerGroup={3}
              loop={false}
              loopFillGroupWithBlank={false}
              modules={[Pagination]}
              className="group-friends-parent"
              breakpoints={{
                290: {
                  slidesPerView: 1.75,
                },
                306: {
                  slidesPerView: 1.85,
                },
                332: {
                  slidesPerView: 2,
                },
                375: {
                  slidesPerView: 2.25,
                },
                415: {
                  slidesPerView: 2.5,
                },
                455: {
                  slidesPerView: 2.75,
                },
                540: {
                  slidesPerView: 3.25,
                },
                625: {
                  slidesPerView: 3.75,
                },
                705: {
                  slidesPerView: 4.25,
                },
                790: {
                  slidesPerView: 4.75,
                },
                870: {
                  slidesPerView: 5.25,
                },
                950: {
                  slidesPerView: 5.75,
                },
              }}
            >
              {items.map((item) => (
                <SwiperSlide key={item.id}>
                  <NavLink
                    to={item.to}
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={
                      isActive === item.id
                        ? " mt-3 d-flex flex-row align-items-center justify-content-center active-Category-Item"
                        : " mt-3 d-flex flex-row align-items-center justify-content-center category-Item"
                    }
                  >
                    <div className="d-flex align-items-center ">
                      <img src={item.img} />
                      <span className="mx-2">{item.name}</span>
                    </div>
                  </NavLink>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Categories);
