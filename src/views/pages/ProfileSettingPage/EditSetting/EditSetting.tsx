import { BaseComponent, Theme } from "utilities_js";
import {
  Calender,
  GallleryAdd,
  ImgAvatar,
  ShieldSecurity,
  ShieldTick,
} from "../../../../assets";
import { IconTextRow } from "../../../components/icon_text_horizantal";
import ProfileNav from "../../../components/profile-nav";
import Layout from "../../../layout/Layout";

export interface IProps {}
export interface IState {}

class EditSetting extends BaseComponent<IProps, IState> {
  state = {};

  render() {
    return (
      <Layout>
        <section className=" d-flex flex-column align-items-center profile-Setting-Page mx-auto mb-5">
          <ProfileNav backLink="/myusername/setting" title="تنظیمات حساب کاربری" />
          <div className="d-flex flex-column align-items-center justify-content-between change-Profile ">
            <div>
              <button>
                <img src={GallleryAdd} alt="gallery-Add" />
              </button>
              <img src={ImgAvatar} className="avatar mx-2" alt="avatar" />
            </div>
            <span className="user-id mt-3">majidmoharami@</span>
            <span className="date me-3 mt-2 ">اردیبهشت 1400</span>
          </div>
          <div className="edit-Form-Container profile-Options">
            <div className="one">
              <label className="my-2">نام و نام خانوادگی</label>
              <div className="edit-Input-Container">
                <input placeholder="مجید" className="edit-Input" />
                <input placeholder="محرمی" className="edit-Input-2" />
              </div>
            </div>
            <div className="four">
              <label className="mb-2">شماره همراه متصل به حساب کاربری</label>
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
                <input
                  placeholder="09128877160"
                  className="edit-Input input-text"
                />
              </div>
            </div>

            <div className="two">
              <label className="mb-2">جنسیت</label>
              <div className="edit-Input-Container">
                <select className="edit-Input">
                  <option value="مرد">مرد</option>
                  <option value="زن">زن</option>
                </select>
              </div>
            </div>
            <div className="five">
              <label className="mb-2">ایمیل متصل به حساب کاربری</label>
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
                  className="edit-Input  input-text"
                />
              </div>
              <span className=" email-Error">
                ایمیل ارسال شده از طرف کیفور را تایید کنید
              </span>
            </div>

            <div className="three">
              <label className="mb-2 mt-4">تاریخ تولد</label>
              <div className="edit-Input-Container d-flex flex-row">
                <img src={Calender} className="mx-2" alt="calender" />
                <input
                  placeholder="سال"
                  className="edit-Input birthday  input-text"
                />
                <input
                  placeholder="ماه"
                  className="edit-Input birthday  input-text"
                />
                <input placeholder="روز" className="edit-Input   input-text" />
              </div>
            </div>
            <button className="register-Change mt-5 mb-2 six">
              ثبت تغییرات
            </button>
          </div>
        </section>
      </Layout>
    );
  }
}

export default EditSetting;
