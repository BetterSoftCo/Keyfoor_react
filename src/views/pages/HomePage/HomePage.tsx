import { BaseComponent } from "utilities_js";
import { Theme } from "../../../core/utilis";
import { Box, Home, PeopleGreen, Slider } from "../../../assets";

import { Carousel } from "../../components/carousel";
import { RoomCard } from "../../components/room_card";
import { IconTextRow } from "../../components/icon_text_horizantal";
import { GroupYourFriends } from "../../components/group_your_friends";
import { TopGame } from "../../components/top_games";

// import required modules
import { Categories } from "../../components/category";
import Layout from "../../layout/Layout";
import Footer from "../../layout/footer/Footer";
interface IProps {
  title?: string;
}

interface IState {
  hello?: string;
  inputValue?: string;
}

export default class HomePage extends BaseComponent<IProps, IState> {
  state: IState = {
    hello: "",
    inputValue: "",
  };
  render() {
    return (
      <Layout>
        <div className="col-lg-10 col-12 h-100 home-content ">
          <section className="slider">
            <div className="parent-slider mx-auto">
              <Carousel
                ImageList={[
                  { child: [], img: Slider },
                  {
                    child: [Slider, Slider],
                    img: Slider,
                  },
                  { child: [], img: Slider },
                ]}
              />
            </div>
          </section>
          <section className="category mx-auto">
            <Categories />
          </section>
          <section className="top-games-section mx-auto">
            <div className="row">
              <div className="col-md-12">
                <IconTextRow
                  fontSize="18px"
                  className="lighter pointer"
                  text="بازی های برتر"
                  theme={Theme.light}
                  color="#787878"
                  fontWeight="700"
                  children={
                    <span className="mx-2">
                      <img src={Box} alt="Box" />
                    </span>
                  }
                ></IconTextRow>
              </div>
              <div className="col-md-12 mt-1  ">
                <TopGame />
              </div>
            </div>
          </section>
          <section className="active-rooms mx-auto">
            <div className="row">
              <div className="col-md-12">
                <IconTextRow
                  fontSize="18px"
                  className="lighter pointer"
                  text="اتاق های فعال برای شما"
                  theme={Theme.light}
                  color="#787878"
                  fontWeight="700"
                  children={
                    <span className="mx-2">
                      <img src={Home} alt="home" />
                    </span>
                  }
                ></IconTextRow>
              </div>
              <div className="col-md-12 mt-3 ">
                <div className="row">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div className="col-md-6 mb-2" key={item}>
                      <RoomCard />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="group-friends mt-3 mb-2 mx-auto">
            <div className="row">
              <div className="col-md-12">
                <IconTextRow
                  fontSize="18px"
                  className="lighter pointer"
                  text="گروه های دوستان شما"
                  theme={Theme.light}
                  color="#787878"
                  fontWeight="700"
                  children={
                    <span className="mx-2">
                      <img src={PeopleGreen} alt="people" />
                    </span>
                  }
                ></IconTextRow>
              </div>
              <div className="col-md-12 mt-3  ">
                <GroupYourFriends />
              </div>
            </div>
          </section>
          <section className="active-rooms mb-4 mx-auto">
            <div className="row">
              <div className="col-md-12">
                <IconTextRow
                  fontSize="18px"
                  className="lighter pointer"
                  text="اتاق های فعال دورتر"
                  theme={Theme.light}
                  color="#787878"
                  fontWeight="700"
                  children={
                    <span className="mx-2">
                      <img src={Home} alt="home" />
                    </span>
                  }
                ></IconTextRow>
              </div>
              <div className="col-md-12 mt-3 ">
                <div className="row">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div className="col-md-6 mb-2" key={item}>
                      <RoomCard />
                    </div>
                  ))}
                </div>
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
