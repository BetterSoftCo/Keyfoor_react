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
}

class MainRoomSetting extends BaseComponent<Props, State> {
  state = {
    roomCapacity: 10,
    accessToGame: true,
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
          <div className="w-100 group-Name d-flex flex-column align-items-start ">
            <label>نام و شناسه ی اتاق</label>
            <div className="w-100 d-flex flex-column align-items-center ">
              <input type="text" placeholder="اسپلندور شبانه" />
              <input type="text" placeholder="Spelendor12" />
            </div>
          </div>
          <div className="select-Game d-flex flex-column align-items-start mt-3">
            <label>بازی</label>
            <div className="w-100 d-flex flex-row align-items-center">
              <select>
                <option> اسپلندور Splendor</option>
                <option> اسپلندور Splendor</option>
                <option> اسپلندور Splendor</option>
              </select>
            </div>
          </div>
          <LabelButton
            type={Theme.dark}
            minHeight="42px"
            fontSize="12px"
            borderRadius="10px"
            className="profile-Option mt-3"
            backgroundColor="#fff"
            color="#787878"
            border="1px solid #F3F3F3"
            boxShadow="none"
            children={
              <div>
                <img src={EyeSlash} alt="eye-slash" />
                <span className="mx-2 text-nowrap">حریم خصوصی اتاق</span>
              </div>
            }
          />
          <LabelButton
            type={Theme.dark}
            minHeight="42px"
            fontSize="12px"
            borderRadius="10px"
            className="profile-Option mt-3"
            backgroundColor="#fff"
            color="#787878"
            border="1px solid #F3F3F3"
            boxShadow="none"
            children={
              <div className="w-100 d-flex flex-row align-items-center justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <img src={Lock} alt="lock" />
                  <span className="mx-2 text-nowrap">
                    دسترسی به میز بازی برای همه
                  </span>
                </div>
                <div className="toggle">
                  <input
                    type="checkbox"
                    id="switch"
                    onChange={() => {
                      this.setState({
                        accessToGame: !this.state.accessToGame,
                      });
                    }}
                    checked={this.state.accessToGame}
                    value="accessToGame"
                  />
                  <label htmlFor="switch">Toggle</label>
                </div>
              </div>
            }
          />
          <LabelButton
            type={Theme.dark}
            minHeight="42px"
            fontSize="12px"
            borderRadius="10px"
            className="profile-Option mt-3"
            backgroundColor="#fff"
            color="#787878"
            border="1px solid #F3F3F3"
            boxShadow="none"
            children={
              <div className="w-100 d-flex flex-row justify-content-between">
                <div>
                  <img src={PeopleBlack} alt="people" />
                  <span className="mx-2 text-nowrap">حریم خصوصی اتاق</span>
                </div>
                <div className="d-flex flex-row align-items-center ">
                  <button
                    onClick={() =>
                      this.setState({
                        roomCapacity: this.state.roomCapacity + 1,
                      })
                    }
                    className="increment-Btn d-flex align-items-center justify-content-center"
                  >
                    +
                  </button>
                  <span className="room-Capacity mx-2">
                    {this.state.roomCapacity}
                  </span>
                  <button
                    onClick={() =>
                      this.setState({
                        roomCapacity: this.state.roomCapacity - 1,
                      })
                    }
                    className="decrement-Btn d-flex align-items-center justify-content-center "
                  >
                    -
                  </button>
                </div>
              </div>
            }
          />
          <Link to="/createroom/addmember" className="text-decoration-none">
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

export default MainRoomSetting;
