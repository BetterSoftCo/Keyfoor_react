import React, { Component } from "react";
import { IconTextRow } from "../../components/icon_text_horizantal";
import Footer from "../../layout/footer/Footer";
import Layout from "../../layout/Layout";
import Navbar from "../../layout/Navbar/Navbar";
import {
  ArrowSquareDown,
  ArrowSquareLeft,
  ArrowSquareTop,
  Box,
  Home,
  Profile2User,
  ProfileTick,
  ScoreStar,
  Slider,
  GallleryAdd,
  AvatarImage,
  ShieldTick,
} from "../../../assets";
import { Theme } from "../../../core/utilis";
import ProfileNav from "../../components/profile-nav";
import { Link } from "react-router-dom";
import { LabelButton } from "../../components/label_button";
import GroupController from "../../controllers/group-controllers";
import { InputText } from "../../components/input_text";

class EditRoom extends GroupController {
  render() {
    return (
      <Layout>
        <div className="room-privacy ">
          <div className="room-privacy-header">
            <ProfileNav
              backLink={"/room/setting"}
              title={"ویرایش مشخصات اتاق"}
            />
          </div>
          <div className="divider"></div>
          <div className="room-privacy-content">
            <div className="d-flex flex-column align-items-center justify-content-between my-3">
              <div className="d-flex">
                <button className="">
                  <img src={GallleryAdd} alt="gallery-Add" />
                </button>
                <img src={AvatarImage} />
              </div>
            </div>
            <div className="edit-Form-Container profile-Options">
              <div className="one  mx-auto">
                <label className="my-2 mx-2">نام و شناسه ی اتاق</label>
                <div className="edit-Input-Container">
                  <input placeholder="اسپلندور شبانه" className="edit-Input" />
                  <input
                    placeholder="Spelendor12"
                    className="text-left edit-Input-2"
                  />
                </div>
              </div>
              <div className="two mx-auto">
                <label className="mb-2">بازی</label>
                <div className="edit-Input-Container">
                  <select className="edit-Input">
                    <option value="1"> اسپلندورSplendor </option>
                    <option value="2">زن</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="room-botton">
              <h6 className="text-button">ثبت تغییرات</h6>
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}
export default EditRoom;
