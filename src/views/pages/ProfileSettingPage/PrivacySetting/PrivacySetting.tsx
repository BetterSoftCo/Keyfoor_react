import { Link } from "react-router-dom";
import { BaseComponent, Theme } from "utilities_js";
import { ArrowLeft } from "../../../../assets";
import { LabelButton } from "../../../components/label_button";
import ProfileNav from "../../../components/profile-nav";
import Layout from "../../../layout/Layout";

export interface IProps {}
export interface IState {
  isCheck: string;
}

class PrivacySetting extends BaseComponent<IProps, IState> {
  state = {
    isCheck: "public",
  };

  render() {
    return (
      <Layout>
        <section className="w-100 d-flex flex-column align-items-center profile-Setting-Page">
          <ProfileNav backLink="/myusername/setting" title="تنظیمات حساب کاربری" />

          <div className="mx-4">
            <div className="my-4">
              <div className="d-flex flex-row align-items-center ">
                <span
                  onClick={() => this.setState({ isCheck: "public" })}
                  className={
                    this.state.isCheck === "public"
                      ? "active-Radio"
                      : "radio-Btn"
                  }
                />
                <label className="mx-3 radio-Label">عمومی</label>
              </div>
              <div className="radio-desc">
                <span>
                  دیگران برای بازدید از حساب کاربری شما نیازی به درخواست ندارند.
                </span>
              </div>
            </div>
            <div>
              <div className="d-flex flex-row align-items-center ">
                <span
                  onClick={() => this.setState({ isCheck: "private" })}
                  className={
                    this.state.isCheck === "private"
                      ? "active-Radio"
                      : "radio-Btn"
                  }
                />
                <label className="mx-3 radio-Label">خصوصی</label>
              </div>
              <div className="radio-desc">
                <span>
                  فقط کسانی که درخواستشان تایید شده باشد، می توانند از حساب
                  کاربری شما بازدید کنند
                </span>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default PrivacySetting;
