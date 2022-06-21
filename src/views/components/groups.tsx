import React, { useState } from "react";
import Layout from "../layout/Layout";
import iconDote from "../../assets/images/icons/group-doted.svg";
import iconCircleArrow from "../../assets/images/icons/circle-arrow.svg";
import iconCopy from "../../assets/images/icons/icon-copy.svg";
import iconAddNew from "../../assets/images/icons/icon-add-new.svg";
import iconRwquest from "../../assets/images/icons/icon-request.svg";
import iconEditInformation from "../../assets/images/icons/icon-edit-information.svg";
import iconPrivacy from "../../assets/images/icons/icon-privacy.svg";
import iconAccess from "../../assets/images/icons/icon-access.svg";
import iconLimitGroup from "../../assets/images/icons/icon-limit-group.svg";
import iconManager from "../../assets/images/icons/icon-manager-room.svg";
import iconLeaveRoom from "../../assets/images/icons/icon-leave-room.svg";
import iconDeleteRoom from "../../assets/images/icons/icon-delete-room.svg";

import Switcher from "./switcher";
import { CardUserManager } from "./card_user_manager";
import {
  IconArrowGreen,
  ImageUser,
  TwoUserGreen,
  TwoUserOrange,
  ArrowLeft,
  EyeSlash,
  GallleryAdd,
  Lock,
  PeopleBlack,
  IconArrowOrange,
  IconDotOrange,
} from "../../assets";
import { BaseComponent, Theme } from "utilities_js";
import { LabelButton } from "./label_button";
import { Link } from "react-router-dom";

const Groups = () => {
  const [limit, setLimit] = useState(12);
  return (
    <Layout>
      <div className="col-10 room-Setting mx-auto">
        <div className="border-bottom">
          <div className="  mt-4 d-flex justify-content-center button-name-group-orange mb-3">
            <div className="row  w-100 ">
              <div className="col-4 text-end">
                <img src={IconArrowOrange} />
              </div>

              <div className="col-4  d-flex align-items-center justify-content-space-between">
                <div className="text-center mx-auto">نام گروه</div>
              </div>
              <div className="col-4 text-start">
                {" "}
                <img src={IconDotOrange} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-title mt-3">لینک دعوت به اتاق</div>
        </div>
        <div className="link-card mt-3 d-flex jusdtify-content-between align-items-center">
          <div className="copy-box">
            <img src={iconCopy} />
          </div>
          <div className="text-start w-100">
            <div className="text-copy text-center">
              keyfoor.com/rooms/iuba98h347uh
            </div>
          </div>
        </div>
        <div className="mt-3 row border-bottom py-3">
          <div className="col-6">
            <div className="button-add-new">
              <img src={iconAddNew} />
              <span style={{ marginRight: "4%" }}>افزودن عضو جدید</span>
            </div>
          </div>
          <div className="col-6 p-relative">
            <div className="button-request-new">
              <div className="badge">121</div>
              <img src={iconRwquest} />
              <span style={{ marginRight: "4%" }}> درخواست های عضویت</span>{" "}
            </div>
          </div>
        </div>
        <div>
          <div className="button-with-swicher">
            <Link to="/groups/edit">
              <div className="section-user">
                <img src={iconEditInformation} alt="" className="image-user" />
                <div>
                  <h5 className="name-user">ویرایش مشخصات اتاق</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="button-with-swicher mt-2">
            <Link to="/groups/privacy">
              <div className="section-user">
                <img src={iconPrivacy} alt="" className="image-user" />
                <div>
                  <h5 className="name-user">حریم خصوصی اتاق</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="button-with-swicher mt-2">
          <Link to="/groups/manager">
            <div className="section-user">
              <img src={iconManager} alt="" className="image-user" />
              <div>
                <h5 className="name-user">مدیریت مدیران گروه</h5>
              </div>
            </div>
          </Link>
        </div>
        <div className=" w-100"> </div>
        <div className="room-manager">
          <div className="user-in-room">
            <div className="room-user-content">
              <div className="number-user py-3">
                <h5 className="title">
                  <span>
                    <img src={TwoUserGreen} alt="" className="icon-users" />
                  </span>
                  مدیران گروه
                </h5>
                <span className="number">
                  <span>3</span>
                </span>
              </div>
            </div>
            <div className="divider my-1">
              <div className="divider-green"></div>
            </div>
            <div className="user">
              <CardUserManager
                image={ImageUser}
                name={"سمانه احمدیان"}
                accountName={"@SDASDS"}
                showDotted={true}
              />
              <div className="divider"></div>
              <CardUserManager
                image={ImageUser}
                name={"سمانه احمدیان"}
                accountName={"@SDASDS"}
                showDotted={true}
              />
              <div className="divider"></div>
              <CardUserManager
                image={ImageUser}
                name={"سمانه احمدیان"}
                accountName={"@SDASDS"}
                showDotted={true}
              />
              <div className="divider"></div>
              <CardUserManager
                image={ImageUser}
                name={"سمانه احمدیان"}
                accountName={"@SDASDS"}
                showDotted={true}
              />
              <div className="divider"></div>
            </div>
          </div>
          <div className="row mt-2 mb-4">
            <div className="col-6">
              <div className="leave-button">
                <img src={iconLeaveRoom} />
                <span>ترک گروه</span>
              </div>
            </div>
            <div className="col-6">
              <div className="leave-button">
                <img src={iconDeleteRoom} />
                <span>حذف گروه</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Groups;
