import { ReactElement, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Discover,
  Logout,
  Message,
  Notification,
  UserSquare,
} from "../../../assets";
import { Theme } from "../../../core/utilis";
import { LabelButton } from "../../components/label_button";

function SideBar(): ReactElement {
  const location = useLocation().pathname;
  return (
    <div className="sidebar">
      <div className="sidebar-Link-Container">
        <NavLink
          to="/"
          className={({ isActive = String }) =>
            (isActive && location === "/") || location.includes("gamedetail")
              ? "active-Sidebar-Link"
              : "Sidebar-Link"
          }
        >
          <div className="link-Content d-flex flex-row align-items-center justify-content-start">
            <img src={Discover} alt="discover" className="me-2" />
            <span className="mx-1">کیفور</span>
          </div>
        </NavLink>
        <NavLink
          to="/whatsup"
          className={({ isActive = String }) =>
            isActive ? "active-Sidebar-Link" : "Sidebar-Link"
          }
        >
          <div className="link-Content">
            <div className="d-flex flex-row align-items-center justify-content-start">
              <img src={Notification} alt="notification" className="me-2" />
              <span className="mx-1">چه خبر</span>
            </div>
            <span className="numOfNews mx-2">121</span>
          </div>
        </NavLink>
        <NavLink
          to="/chat"
          className={({ isActive = String }) =>
            isActive ? "active-Sidebar-Link" : "Sidebar-Link"
          }
        >
          <div className="link-Content">
            <div className="d-flex flex-row align-items-center justify-content-start">
              <img src={Message} alt="message" className="me-2" />
              <span className="mx-1">چت</span>
            </div>
            <span className="numOfChat mx-2">21</span>
          </div>
        </NavLink>
        <NavLink
          to="/myusername"
          className={({ isActive = String }) =>
            isActive ? "active-Sidebar-Link" : "Sidebar-Link"
          }
        >
          <div className="link-Content d-flex flex-row align-items-center justify-content-start">
            <img src={UserSquare} alt="user" className="me-2" />
            <span className="mx-1">حساب کاربری</span>
          </div>
        </NavLink>
      </div>
      <LabelButton
        type={Theme.dark}
        minHeight="42px"
        minWidth="140px"
        fontSize="14px"
        borderRadius="10px"
        className="px-3  mt-3 mb-2 mx-auto logout-Button"
        backgroundColor="#FFFFFF"
        color="#787878"
        border="1px solid #F3F3F3"
        children={
          <div className="w-100">
            <img src={Logout} alt="logout" />
            <span className="mx-1">خروج از حساب کاربری</span>
          </div>
        }
      />
    </div>
  );
}

export default SideBar;
