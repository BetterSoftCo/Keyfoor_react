import { Component } from "react";
import {
  IconArrowGreen,
  IconCliboardTick,
  IconEyeSlash,
  IconProfileAdd,
  IconProfileDelete,
  ImageUser,
  TwoUserGreen,
  TwoUserOrange,
} from "../../../assets";
import {
  ButtonIcon,
  ButtonManager,
  ButtonWithSwicher,
  CardUserManager,
  ProfileNav,
} from "../../components/components";
import GroupController from "../../controllers/room_controller";
import Layout from "../../layout/Layout";

class AccessManagerGroup extends GroupController {
  render() {
    return (
      <Layout>
        <div className="room-manager">
          <div className="room-manager-header">
            <ProfileNav backLink={"/group/manager"} title={"دسترسی های مدیر"} />
          </div>
          <div className="divider"></div>
          <div className="room-manager-content">
            <ButtonManager
              image={ImageUser}
              name={"سمانه احمدیان"}
              accountName={"@SDASDS"}
              location={""}
            />
            <ButtonWithSwicher
              icon={IconCliboardTick}
              nameButton={"مدیریت درخواست ها"}
            />
            <ButtonWithSwicher
              icon={IconEyeSlash}
              nameButton={"دسترسی به تنظیمات حریم خصوصی اتاق"}
            />
            <ButtonWithSwicher
              icon={IconProfileAdd}
              nameButton={"افزودن عضو جدید"}
            />
            <ButtonWithSwicher
              icon={IconProfileDelete}
              nameButton={"حذف کردن اعضا"}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default AccessManagerGroup;
