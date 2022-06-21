import { BaseComponent, Theme } from "utilities_js";
import {
  CloseCircle,
  GroupDotGreen,
  Mobile,
  Monitor,
  MonitorMobile,
  ShieldSecurity,
  ShieldTick,
  Trash,
  VolumeSlash,
} from "../../../../assets";
import { IconTextRow } from "../../../components/icon_text_horizantal";
import ProfileNav from "../../../components/profile-nav";
import Layout from "../../../layout/Layout";

export interface IProps {}
export interface IState {
  isShow: number;
}

class SecuritySetting extends BaseComponent<IProps, IState> {
  state = {
    isShow: 0,
  };

  render() {
    const Items = [
      {
        name: "Windows 10",
        img: Monitor,
        code: "1234554456",
        id: 1,
      },
      {
        name: "Android",
        img: Mobile,
        code: "1122889556",
        id: 2,
      },
      {
        name: "Windows 11",
        img: Monitor,
        code: "1234567809",
        id: 3,
      },
    ];
    return (
      <Layout>
        <section className="w-100 d-flex flex-column align-items-center profile-Setting-Page">
          <ProfileNav
            backLink="/myusername/setting"
            title="تنظیمات حساب کاربری"
          />
          <div className="privacy-Setting d-flex flex-row align-items-start justify-content-between">
            <div>
              <div>
                <label className="mb-2 input-Label">
                  شماره همراه متصل به حساب کاربری
                </label>
                <div className="edit-Input-Container d-flex flex-row">
                  <IconTextRow
                    fontSize="14px"
                    className="w-50"
                    text="تایید شده"
                    theme={Theme.light}
                    color="#00DE8E"
                    fontWeight="300"
                    children={
                      <>
                        <span className="mx-2">
                          <img src={ShieldTick} alt="shield" />
                        </span>
                      </>
                    }
                  />
                  <input placeholder="09128877160" className="edit-Input" />
                </div>
              </div>
              <div>
                <label className="mb-2 input-Label">
                  ایمیل متصل به حساب کاربری
                </label>
                <div className="edit-Input-Container d-flex flex-row">
                  <IconTextRow
                    fontSize="14px"
                    className="w-50"
                    text="در انتظار تایید"
                    theme={Theme.light}
                    color="#FF8A00"
                    fontWeight="300"
                    children={
                      <>
                        <span className="mx-2">
                          <img src={ShieldSecurity} alt="shield" />
                        </span>
                      </>
                    }
                  />
                  <input
                    placeholder="keyfoor@info.com"
                    className="edit-Input"
                  />
                </div>
                <span className=" email-Error">
                  ایمیل ارسال شده از طرف کیفور را تایید کنید
                </span>
              </div>
            </div>
            <div>
              <div className="d-flex flex-row align-items-center justify-content-between active-Sessions">
                <IconTextRow
                  fontSize="12px"
                  className=""
                  text="دستگاه های متصل به حساب کاربری"
                  theme={Theme.light}
                  color="#787878"
                  fontWeight="300"
                  children={
                    <span className="mx-2">
                      <img src={MonitorMobile} alt="monitor-Mobile" />
                    </span>
                  }
                />
                <span className="d-flex flex-row align-items-center justify-content-center numOf-Active-Sessions">
                  {Items.length}
                </span>
              </div>
              <div>
                {Items.map((item) => (
                  <div
                    key={item.id}
                    className=" d-flex flex-row justify-content-between align-items-center sessions"
                  >
                    <div className=" d-flex flex-row justify-content-between align-items-center avatar-Group">
                      <img src={item.img} className="mx-3" alt="avatar" />
                      <div className="d-flex flex-column justify-content-between align-items-start">
                        <div className="d-flex flex-column justify-content-between align-items-center sessions-Name">
                          <span>{item.name}</span>
                          <span>{item.code}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => this.setState({ isShow: item.id })}
                      className={this.state.isShow === item.id ? "d-none" : ""}
                    >
                      <img src={GroupDotGreen} alt="groupDot" />
                    </button>
                    <div
                      className={
                        this.state.isShow === item.id
                          ? "options-Container fade-in mx-2"
                          : "d-none"
                      }
                    >
                      <button>
                        <img src={VolumeSlash} alt="volume" />
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
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default SecuritySetting;
