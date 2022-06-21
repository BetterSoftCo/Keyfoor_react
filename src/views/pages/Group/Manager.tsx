import { Component } from "react";
import { IconArrowGreen, ImageUser, TwoUserGreen, TwoUserOrange } from "../../../assets";
import { ButtonIcon, ButtonManager, CardUserManager, ProfileNav } from "../../components/components";
import GroupController from "../../controllers/room_controller";
import Layout from "../../layout/Layout";

class ManagerGroup extends GroupController {
    render() {

        return (
            <Layout>
                <div className="room-manager">
                    <div className="room-manager-header">
                        <ProfileNav backLink={"/group/setting"} title={"مدیریت مدیران گروه"} />
                    </div>
                    <div className="divider">

                    </div>
                    <div className="room-manager-content">
                        <div className="number-manager py-3">
                            <h5 className="title">
                                <span>
                                    <img src={TwoUserOrange} alt="" className="icon-users" />
                                </span>
                                مدیران اتاق
                            </h5>
                            <span className="number">
                                <span>
                                    1
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="divider my-1">
                        <div className="divider-orange">
                        </div>
                    </div>
                    <div className="manager-added">
                        <ButtonManager
                            image={ImageUser}
                            name={"سمانه احمدیان"}
                            accountName={"@SDASDS"}
                            location={"/groups/access-manager"}
                        />
                    </div>
                    <div className="manager-button">
                        <ButtonIcon titleButton={"افزودن به مدیران"} />
                    </div>
                    <div className="select-title">
                        <img src={IconArrowGreen} alt="" />
                        <h6 className="text">
                            از بین افراد حاضر در اتاق مدیر انتخاب کنید
                        </h6>
                    </div>
                    <div className="user-in-room">
                        <div className="room-user-content">
                            <div className="number-user py-3">
                                <h5 className="title">
                                    <span>
                                        <img src={TwoUserGreen} alt="" className="icon-users" />
                                    </span>
                                    مدیران اتاق
                                </h5>
                                <span className="number">
                                    <span>
                                        3
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="divider my-1">
                            <div className="divider-green">
                            </div>
                        </div>
                        <div className="user">
                            <CardUserManager
                                image={ImageUser}
                                name={"سمانه احمدیان"}
                                accountName={"@SDASDS"}
                            />
                            <div className="divider"></div>
                            <CardUserManager
                                image={ImageUser}
                                name={"سمانه احمدیان"}
                                accountName={"@SDASDS"}
                            />
                            <div className="divider"></div>
                            <CardUserManager
                                image={ImageUser}
                                name={"سمانه احمدیان"}
                                accountName={"@SDASDS"}
                            />
                            <div className="divider"></div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default ManagerGroup;
