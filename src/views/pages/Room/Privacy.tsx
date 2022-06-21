import { Component } from "react";
import { ProfileNav } from "../../components/components";
import RoomController from "../../controllers/room_controller";
import Layout from "../../layout/Layout";

class Privacy extends RoomController {
  render() {
    return (
      <Layout>
        <div className="room-privacy">
          <div className="room-privacy-header">
            <ProfileNav backLink={"/room/setting"} title={"حریم خصوصی اتاق"} />
          </div>
          <div className="divider"></div>
          <div className="room-privacy-content">
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
                  <label
                    className={
                      this.state.isCheck === "public"
                        ? "active-label mx-3"
                        : "radio-Label mx-3"
                    }
                  >
                    عمومی
                  </label>
                </div>
                <div className="radio-desc">
                  <span>همه می توانند وارد این اتاق شوند</span>
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
                    <label
                      className={
                        this.state.isCheck === "request"
                          ? "active-label mx-3"
                          : "radio-Label mx-3"
                      }
                    >
                      درخواستی
                    </label>
                  </div>
                  <div className="radio-desc">
                    <span>برای ورود باید درخواست ها را تایید کنید</span>
                  </div>
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
                  <label
                    className={
                      this.state.isCheck === "private"
                        ? "active-label mx-3"
                        : "radio-Label mx-3"
                    }
                  >
                    خصوصی
                  </label>
                </div>
                <div className="radio-desc">
                  <span>
                    فقط شما می توانید دیگران را به اتاق اضافه کنید، دیگران اتاق
                    شما را نمی بینند
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Privacy;
