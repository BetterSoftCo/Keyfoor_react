import { Component } from "react";
import { IconArrowGreen, IconCliboardTick, IconEyeSlash, IconPeople, IconProfileAdd, IconProfileDelete, ImageUser, TwoUserGreen, TwoUserOrange } from "../../../assets";
import { ButtonIcon, ButtonManager, ButtonWithSwicher, CardUserManager, ProfileNav } from "../../components/components";
import RoomController from "../../controllers/room_controller";
import Layout from "../../layout/Layout";

class AccessManager extends RoomController {
    render() {

        return (
            <Layout>
                <div className="room-manager">
                    <div className="room-manager-header">
                        <ProfileNav backLink={"/room/manager"} title={"دسترسی های مدیر"} />
                    </div>
                    <div className="divider">

                    </div>
                    <div className="room-manager-content">
                        <ButtonManager
                            image={ImageUser}
                            name={"سمانه احمدیان"}
                            accountName={"@SDASDS"}
                            location={""}
                        />
                        <ButtonWithSwicher icon={IconCliboardTick} nameButton={"مدیریت درخواست ها"} />
                        <ButtonWithSwicher icon={IconPeople} nameButton={"تنظیم ظرفیت اتاق"} />
                        <ButtonWithSwicher icon={IconEyeSlash} nameButton={"دسترسی به تنظیمات حریم خصوصی اتاق"} />
                        <ButtonWithSwicher icon={IconProfileAdd} nameButton={"افزودن عضو جدید"} />
                        <ButtonWithSwicher icon={IconProfileDelete} nameButton={"حذف کردن اعضا"} />
                    </div>
                </div>
            </Layout>
        );
    }
}

export default AccessManager;
