import { Link } from "react-router-dom";
import { BaseComponent, Theme } from "utilities_js";
import {
  ArrowLeft,
  EyeSlash,
  GallleryAdd,
  Lock,
  PeopleBlack,
} from "../../../assets";
import { LabelButton } from "../../components/label_button";

export interface Props {}
export interface State {
  roomCapacity: number;
  accessToGame: boolean;
  isCheck: string;
}

class MainGroupSetting extends BaseComponent<Props, State> {
  state = {
    roomCapacity: 10,
    accessToGame: true,
    isCheck: "public",
  };

  render() {
    return (
      <div>
        <div className="d-flex flex-column align-items-center justify-content-between my-3">
          <div>
            <button className="add-Avatar-Group">
              <img src={GallleryAdd} alt="gallery-Add" />
            </button>
          </div>
        </div>
        <div className="mt-4 group-Options d-flex flex-column align-items-center ">
          <div className="w-100 input-Container d-flex flex-column align-items-start ">
            <label>نام گروه</label>
            <div className="w-100 d-flex flex-column align-items-center ">
              <input type="text" placeholder="بچه های شمرون" />
            </div>
          </div>
          <div className="w-100 input-Container d-flex flex-column align-items-start mt-4 ">
            <label>در مورد این گروه</label>
            <div className="w-100 d-flex flex-column align-items-center ">
              <input
                type="text"
                placeholder="بچه های شمرون ها اینجا هستند تا ..."
              />
            </div>
          </div>
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
                <span>همه می توانند وارد این گروه شوند </span>
              </div>
            </div>
            <div className="my-4">
              <div className="d-flex flex-row align-items-center ">
                <span
                  onClick={() => this.setState({ isCheck: "request" })}
                  className={
                    this.state.isCheck === "request"
                      ? "active-Radio"
                      : "radio-Btn"
                  }
                />
                <label className="mx-3 radio-Label">درخواستی</label>
              </div>
              <div className="radio-desc">
                <span>برای ورود باید درخواست ها را تایید کنید</span>
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
                  فقط شما می توانید دیگران را به گروه اضافه کنید، دیگران گروه
                  شما را نمی بینند
                </span>
              </div>
            </div>
          </div>

          <Link
            to="/creategroup/addmember"
            className="text-decoration-none"
          >
            <button className="next-Step-Btn my-5 d-flex flex-row align-items-center justify-content-end">
              <span className="ms-5">مرحله بعد</span>
              <img src={ArrowLeft} alt="arrow-left" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainGroupSetting;
