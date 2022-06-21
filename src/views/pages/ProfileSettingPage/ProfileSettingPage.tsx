import { Link } from "react-router-dom";
import { BaseComponent, Theme } from "utilities_js";
import {
  Brush,
  EmptyWallet,
  EyeSlash,
  GallleryAdd,
  HomeBlack,
  ImgAvatar,
  Lock,
  Logout,
  Notification,
  PeopleBlack,
} from "../../../assets";
import { LabelButton } from "../../components/label_button";
import ProfileNav from "../../components/profile-nav";
import Layout from "../../layout/Layout";

export interface IProps {}
export interface IState {}

class ProfileSettingPage extends BaseComponent<IProps, IState> {
  state = {};

  render() {
    const Items = [
      {
        to: "edit",
        label: " ویرایش مشخصات حساب کاربری",
        img: Brush,
        id: 1,
        class: "one",
      },
      {
        to: "#",
        label: "تنظیمات گروه ها",
        img: PeopleBlack,
        id: 2,
        class: "five",
      },
      {
        to: "privacy",
        label: "حریم خصوصی حساب کاربری",
        img: EyeSlash,
        id: 3,
        class: "two",
      },
      {
        to: "#",
        label: "تنظیمات اتاق ها",
        img: HomeBlack,
        id: 4,
        class: "six",
      },
      {
        to: "security",
        label: "امنیت حساب کاربری",
        img: Lock,
        id: 5,
        class: "three",
      },
    ];
    return (
      <Layout>
        <section className="d-flex flex-column align-items-center profile-Setting-Page mx-auto">
          <ProfileNav backLink="/myusername" title="تنظیمات حساب کاربری" />
          <div className=" flex-row align-items-center justify-content-between my-2 user-Info">
            <div className="d-flex flex-row align-items-center justify-content-between">
              <img src={ImgAvatar} className="avatar mx-2" alt="avatar" />
              <div className="d-flex flex-column align-items-center justify-content-between">
                <span>مجید محرمی</span>
                <span className="user-id mt-3">majidmoharami@</span>
              </div>
            </div>
            <span className="date mt-5">اردیبهشت 1400</span>
          </div>
          <div className="flex-column align-items-center justify-content-between my-5 user-Info-Desctop">
            <div>
              <button>
                <img src={GallleryAdd} alt="gallery-Add" />
              </button>
              <img src={ImgAvatar} className="avatar mx-2" alt="avatar" />
            </div>
            <span className="user-id mt-3">majidmoharami@</span>
          </div>
          <div className="mt-4 profile-Setting-Options">
            {Items.map((item) => (
              <Link to={item.to} className={item.class}>
                <LabelButton
                  key={item.id}
                  type={Theme.dark}
                  minHeight="42px"
                  fontSize="12px"
                  borderRadius="10px"
                  className="profile-Option"
                  backgroundColor="#fff"
                  color="#787878"
                  border="1px solid #F3F3F3"
                  boxShadow="none"
                  children={
                    <div>
                      <img src={item.img} alt="button" />
                      <span className="mx-2 text-nowrap">{item.label}</span>
                    </div>
                  }
                />
              </Link>
            ))}
            <LabelButton
              type={Theme.dark}
              minHeight="42px"
              fontSize="12px"
              borderRadius="10px"
              className="profile-Option seven"
              backgroundColor="#fff"
              color="#787878"
              border="1px solid #00DE8E"
              boxShadow="none"
              children={
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <span className=" text-nowrap">
                    <img src={EmptyWallet} alt="wallet" />
                    خرید اشتراک و تاریخچه پرداخت ها
                  </span>
                  <button>اشتراک دارید</button>
                </div>
              }
            />
            <LabelButton
              type={Theme.dark}
              minHeight="42px"
              fontSize="12px"
              borderRadius="10px"
              className="profile-Option four"
              backgroundColor="#fff"
              color="#787878"
              border="1px solid #F3F3F3"
              boxShadow="none"
              children={
                <div>
                  <img src={Notification} alt="notification" />
                  <span className="mx-2 text-nowrap">تنظیمات اعلان ها</span>
                </div>
              }
            />
          </div>
          <LabelButton
            type={Theme.dark}
            minHeight="42px"
            minWidth="140px"
            fontSize="15px"
            borderRadius="10px"
            className="px-3 mx-3 my-5 signout-Btn"
            backgroundColor="#FFFFFF"
            color="#787878"
            border="1px solid #F3F3F3"
            children={
              <div className="w-100">
                <img src={Logout} alt="logout" />
                <span className="mx-2">خروج از حساب کاربری</span>
              </div>
            }
          />
        </section>
      </Layout>
    );
  }
}

export default ProfileSettingPage;
