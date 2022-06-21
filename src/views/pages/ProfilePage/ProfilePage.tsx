import { Link, NavLink, Outlet } from "react-router-dom";
import { BaseComponent, Theme } from "utilities_js";
import {
  ArrowDown,
  Chart,
  Cup,
  HomeBlack,
  ImgAvatar,
  PeopleBlack,
} from "../../../assets";
import { LabelButton } from "../../components/label_button";
import Layout from "../../layout/Layout";

export interface IProps {}
export interface IState {}

class ProfilePage extends BaseComponent<IProps, IState> {
  state = {};
  render() {
    const Items = [
      {
        to: "honors",
        name: "افتخارات",
        img: Cup,
        activeClass: "active-tab-Active-Room",

        id: 1,
      },
      {
        to: "win&lose",
        name: "برد و باخت",
        img: Chart,
        activeClass: "active-tab-Active-Room",

        id: 2,
      },
      {
        to: "activeroom",
        name: "اتاق های فعال",
        img: HomeBlack,
        activeClass: "active-tab-Active-Room",
        id: 3,
      },
      {
        to: "",
        name: " گروه ها",
        img: PeopleBlack,
        activeClass: "active-tab-Group",
        id: 4,
      },
    ];
    const location = window.location.pathname.split("/")[1];
    return (
      <div className="proflie-Page-Container">
        <Layout>
          <section className="d-flex flex-column align-items-center profile-page">
            <div className="w-100 d-flex justify-content-between align-items-center profile-Card mt-3">
              <div className=" d-flex flex-column justify-content-around align-items-start profile-Information">
                <div className="w-100 d-flex flex-row justify-content-between align-items-center ">
                  <div className="d-flex flex-column justify-content-between align-items-start ">
                    <img src={ImgAvatar} className="avatar mb-3" alt="avatar" />
                  </div>
                  <div className="d-flex flex-column justify-content-between align-items-center level">
                    <span>6</span>
                    <span>پایه</span>
                  </div>
                  <Link
                    to="/username/followings"
                    className="text-decoration-none"
                  >
                    <div className="d-flex flex-column justify-content-between align-items-center follow">
                      <span>256</span>
                      <span>Following</span>
                    </div>
                  </Link>
                  <Link
                    to="/username/followers"
                    className="text-decoration-none"
                  >
                    <div className=" d-flex flex-column justify-content-between align-items-center follow">
                      <span>236</span>
                      <span>Follower</span>
                    </div>
                  </Link>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-start username">
                  <div className=" d-flex flex-row justify-content-between align-items-start">
                    <span>مجید محرمی</span>
                    <span className="me-3">majidmoharami@</span>
                  </div>
                  <span className="date">اردیبهشت 1400</span>
                </div>
              </div>
              <div className=" flex-row  setting-Btn-container">
                {location === "myusername" ? (
                  <Link
                    to="/myusername/setting"
                    className="w-100 mw-100 d-flex align-items-center justify-content-center"
                  >
                    <button>تنظیمات</button>
                  </Link>
                ) : (
                  <>
                    <Link
                      to="#"
                      className="d-flex align-items-center justify-content-center "
                    >
                      <LabelButton
                        type={Theme.dark}
                        minHeight="42px"
                        fontSize="12px"
                        borderRadius="10px"
                        className="following-Btn"
                        backgroundColor="#fff"
                        color="#00DE8E"
                        border="1px solid #00DE8E"
                        boxShadow="none"
                        children={
                          <div>
                            <img
                              src={ArrowDown}
                              className="ms-5"
                              alt="arrow-down"
                            />
                            <span>Following</span>
                          </div>
                        }
                      />
                    </Link>
                    <Link
                      to="#"
                      className="d-flex align-items-center justify-content-center me-2"
                    >
                      <button>پیام</button>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className=" mb-2 mt-4 d-flex flex-column align-items-center tabs-Conteiner">
              <div className="w-100 d-flex flex-row justify-content-around align-items-center tabs">
                {Items.map((item) => (
                  <NavLink
                    key={item.id}
                    className={({ isActive = String }) =>
                      isActive ? item.activeClass : "tab"
                    }
                    end
                    to={item.to}
                  >
                    <div className="d-flex flex-column justify-content-around align-items-center">
                      <img src={item.img} alt="avatar-tab" />
                      <span>{item.name}</span>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
            <Outlet />
          </section>
        </Layout>
      </div>
    );
  }
}

export default ProfilePage;
