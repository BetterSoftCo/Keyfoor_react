import React from "react";
import { useLocation } from "react-router-dom";
import { IconBell, IconKeyFoor, IconMessage, IconPerson } from "../../assets";
import Footer from "./footer/Footer";
import Navbar from "./Navbar/Navbar";
import BottomTab from "./Sidebar/bottom_tab";
import SideBar from "./Sidebar/Sidebar";

export type ILayoutProps = {};

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const location = useLocation().pathname;
  return (
    <main>
      <Navbar />
      <div className="d-flex  main-Content">
        <div className="col-lg-2 d-none d-lg-block">
          <SideBar />
        </div>
        {children}
      </div>
      {location.includes("/friends/") ||
      location.includes("/group/") ||
      location.includes("/room/chat") ? null : (
        <section className="bottom-tab d-lg-none ">
          <BottomTab
            TextItem="text"
            ValueItem="value"
            list={[
              {
                text: "کیفور",
                to: "/",
                value: "1",
                icon: <IconKeyFoor color={"#787878"} />,
              },
              {
                text: "چه خبر",
                to: "/whatsup",
                value: "2",
                icon: <IconBell color={"#787878"} />,
              },
              {
                text: "چت",
                to: "/chat",
                value: "3",
                icon: <IconMessage color={"#787878"} />,
              },
              {
                text: "حساب کاربری",
                to: "/myusername",
                value: "4",
                icon: <IconPerson color={"#787878"} />,
              },
            ]}
            onClickTab={() => {}}
          />
        </section>
      )}
    </main>
  );
};

export default Layout;
