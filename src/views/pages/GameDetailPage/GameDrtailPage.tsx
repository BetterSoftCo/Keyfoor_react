import { Carousel } from "../../components/carousel";
import { IconTextRow } from "../../components/icon_text_horizantal";
import { Theme } from "../../../core/utilis";
import { RoomCard } from "../../components/room_card";
import { TopGame } from "../../components/top_games";
import { BaseComponent } from "utilities_js";

import Layout from "../../layout/Layout";
import {
  ArrowSquareDown,
  ArrowSquareLeft,
  ArrowSquareTop,
  Box,
  Home,
  Profile2User,
  ProfileTick,
  ScoreStar,
  Slider,
} from "../../../assets";
import Footer from "../../layout/footer/Footer";
import { Link } from "react-router-dom";

interface IProps {}

interface IState {
  isShow: boolean;
}

class GameDetailPage extends BaseComponent<IProps, IState> {
  state: IState = {
    isShow: false,
  };
  clickHandler = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  render() {
    return (
      <Layout>
        <div className="d-flex flex-column align-items-center game-Detail-Page">
          <div className="parent-slider game-Detail-Slider mx-auto">
            <Carousel
              ImageList={[
                { child: [], img: Slider },
                {
                  child: [Slider, Slider],
                  img: "",
                },
                { child: [], img: Slider },
              ]}
            />
          </div>
          <section className="d-flex flex-column desc-Container  mx-auto">
            <div className="d-flex flex-row justify-content-between align-items-start game-Name-box">
              <div className="d-flex flex-row justify-content-between align-items-center w-25">
                <p className="name-fa">نام بازی</p>
                <p className="year">سال ساخت 2018</p>
              </div>
              <p className="name-en">Tapestry</p>
            </div>
            <div className="d-flex flex-row w-100 mt-1 score-box">
              <IconTextRow
                fontSize="14px"
                className=""
                text="امتیاز: 6.25/10"
                theme={Theme.light}
                color="#FF8A00"
                fontWeight="300"
                children={
                  <span className="ms-2">
                    <img src={ScoreStar} alt="score-Star" />
                  </span>
                }
              />
              <IconTextRow
                fontSize="14px"
                className="btn"
                text=""
                theme={Theme.light}
                color="#3FA3FF"
                fontWeight="700"
                children={
                  <>
                    <span>امتیاز بده</span>
                    <span className="mx-2">
                      <img src={ArrowSquareLeft} alt="arrow-square" />
                    </span>
                  </>
                }
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2 game-rule-box ">
              <div className="d-flex flex-row justify-content-between align-items-center game-rules">
                <IconTextRow
                  fontSize="14px"
                  className=""
                  text="محدودیت سنی: +12"
                  theme={Theme.light}
                  color="#787878"
                  fontWeight="300"
                  children={
                    <span>
                      <img src={ProfileTick} alt="profile-tick" />
                    </span>
                  }
                />
                <IconTextRow
                  fontSize="14px"
                  className="mx-3"
                  text="تعداد بازیکن:  3-12"
                  theme={Theme.light}
                  color="#787878"
                  fontWeight="300"
                  children={
                    <span>
                      <img
                        src={Profile2User}
                        alt="profile-user"
                        className="mx-1"
                      />
                    </span>
                  }
                />
              </div>
              <Link
                to="/createroom"
                className=" text-decoration-none create-btn d-flex align-items-center justify-content-center"
              >
                <button className="">ایجاد اتاق بازی</button>
              </Link>
            </div>
            <div className="d-flex flex-column align-items-center my-4 game-Desc">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                {this.state.isShow ? (
                  <>
                    <br /> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                    روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                    فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                    ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد
                    گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                    تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                    الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                    در این صورت می توان امید داشت که تمام و دشواری موجود در
                    ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز
                    شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </>
                ) : null}
              </p>
              <button onClick={this.clickHandler}>
                <IconTextRow
                  fontSize="14px"
                  className=""
                  text={this.state.isShow ? "کمتر" : "بیشتر"}
                  theme={Theme.light}
                  color="#3FA3FF"
                  fontWeight="700"
                  children={
                    <span className="mx-2">
                      <img
                        src={
                          this.state.isShow ? ArrowSquareDown : ArrowSquareTop
                        }
                        alt="arrow-Square"
                      />
                    </span>
                  }
                />
              </button>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center btn-Container">
              <button className="help-btn">دفترچه راهنما</button>
              <button className="edu-btn">ویدئو آموزشی</button>
            </div>
            <div className="col-md-12 mt-3 room-Card ">
              <IconTextRow
                fontSize="18px"
                className=""
                text="اتاق های فعال این بازی"
                theme={Theme.light}
                color="#787878"
                fontWeight="700"
                children={
                  <span className="mx-2 my-3">
                    <img src={Home} alt="home" />
                  </span>
                }
              />
              <div className="row">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div className="col-md-6 mb-2">
                    <RoomCard />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="my-5 top-Game-Slider">
            <div className="col-md-12 mt-3 ">
              <IconTextRow
                fontSize="18px"
                className=""
                text="بازی های مشابه"
                theme={Theme.light}
                color="#787878"
                fontWeight="700"
                children={
                  <span className="me-5 my-3">
                    <img src={Box} alt="box" className="ms-2" />
                  </span>
                }
              />
              <div className="px-4">
                <TopGame />
              </div>
            </div>
          </section>
          <footer>
            <Footer />
          </footer>
        </div>
      </Layout>
    );
  }
}

export default GameDetailPage;
