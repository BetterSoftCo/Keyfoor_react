import { RiSearch2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { BaseComponent, Theme } from "utilities_js";
import {
  ArrowRightOutline,
  CloseCircle,
  GroupDotGreen,
  ImgAvatar,
  LampSlash,
  Trash,
} from "../../../../assets";
import { LabelButton } from "../../../components/label_button";
import Layout from "../../../layout/Layout";

export interface IProps {}
export interface IState {
  isShow: number;
}

class Following extends BaseComponent<IProps, IState> {
  state = {
    isShow: 0,
  };

  render() {
    const followings = [
      {
        to: "/username",
        name: "سمانه احمدیان",
        username: "@samanehahmadian",
        img: ImgAvatar,
        id: 1,
      },
      {
        to: "/username",
        name: "مجید محرمی",
        username: "@majidmoharami",
        img: ImgAvatar,
        id: 2,
      },
      {
        to: "/username",
        name: "محمد جواد ابراهیمی",
        username: "@ebram",
        img: ImgAvatar,
        id: 3,
      },
      {
        to: "/username",
        name: "عباس مجیدی",
        username: "@abbas",
        img: ImgAvatar,
        id: 4,
      },
      {
        to: "/username",
        name: "سمانه احمدیان",
        username: "@samanehahmadian",
        img: ImgAvatar,
        id: 5,
      },
      {
        to: "/username",
        name: "مجید محرمی",
        username: "@majidmoharami",
        img: ImgAvatar,
        id: 6,
      },
      {
        to: "/username",
        name: "محمد جواد ابراهیمی",
        username: "@ebram",
        img: ImgAvatar,
        id: 7,
      },
      {
        to: "/username",
        name: "عباس مجیدی",
        username: "@abbas",
        img: ImgAvatar,
        id: 8,
      },
      {
        to: "/username",
        name: "مجید محرمی",
        username: "@majidmoharami",
        img: ImgAvatar,
        id: 9,
      },
      {
        to: "/username",
        name: "محمد جواد ابراهیمی",
        username: "@ebram",
        img: ImgAvatar,
        id: 10,
      },
      {
        to: "/username",
        name: "عباس مجیدی",
        username: "@abbas",
        img: ImgAvatar,
        id: 11,
      },
      {
        to: "/username",
        name: "مجید محرمی",
        username: "@majidmoharami",
        img: ImgAvatar,
        id: 12,
      },
      {
        to: "/username",
        name: "محمد جواد ابراهیمی",
        username: "@ebram",
        img: ImgAvatar,
        id: 13,
      },
      {
        to: "/username",
        name: "عباس مجیدی",
        username: "@abbas",
        img: ImgAvatar,
        id: 14,
      },
    ];
    return (
      <Layout>
        <section className=" d-flex flex-column align-items-center justify-content-start mx-auto follow-Page">
          <div className="profile-nav w-100 my-4  d-flex flex-row align-items-center justify-content-start">
            <Link to="/myusername">
              <LabelButton
                type={Theme.dark}
                minHeight="42px"
                fontSize="14px"
                borderRadius=""
                className=""
                backgroundColor="transparent"
                color="#787878"
                border=""
                boxShadow="none"
                children={
                  <div>
                    <img src={ArrowRightOutline} alt="arrowLeft" />
                  </div>
                }
              />
            </Link>
            <div className="w-100 h-100 d-flex flex-row justify-content-around align-items-center follower-following">
              <NavLink
                to="/username/followers"
                className={({ isActive = String }) =>
                  isActive ? "active-Followr-Following" : "h-100"
                }
              >
                Follower
              </NavLink>
              <NavLink
                to="/username/followings"
                className={({ isActive = String }) =>
                  isActive ? "active-Followr-Following" : "h-100"
                }
              >
                Following
              </NavLink>
            </div>
          </div>
          <div className="input-Search d-felx align-items-center justify-content-between">
            <RiSearch2Line className="icon-search mx-2" />

            <input type="search" className="input" placeholder="جستجو" />
          </div>
          <div className="user-list">
            {followings.map((following) => (
              <div
                key={following.id}
                className="w-100 d-flex flex-row justify-content-between align-items-center py-3 user"
              >
                <Link to={following.to} className="w-100 ">
                  <div className="d-flex flex-row align-items-center">
                    <img
                      src={following.img}
                      className="user-Avatar"
                      alt="user-Avatar"
                    />
                    <div className="d-flex flex-column justify-content-between align-items-start mx-3 username-box">
                      <span>{following.name}</span>
                      <span>{following.username}</span>
                    </div>
                  </div>
                </Link>
                <button
                  onClick={() => this.setState({ isShow: following.id })}
                  className={this.state.isShow === following.id ? "d-none" : ""}
                >
                  <img src={GroupDotGreen} alt="groupDot" />
                </button>
                <div
                  className={
                    this.state.isShow === following.id
                      ? "options-Container fade-in"
                      : "d-none"
                  }
                >
                  <button>
                    <img src={LampSlash} alt="volume" />
                  </button>
                  <button>
                    <img src={Trash} alt="trash" />
                  </button>
                  <button onClick={() => this.setState({ isShow: 0 })}>
                    <img src={CloseCircle} alt="close-circle" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}

export default Following;
