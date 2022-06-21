import { HTMLAttributes, ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IconKeyFoor, IconBell, IconMessage, IconPerson } from "../../../assets";
const Icons = [
  <IconKeyFoor color={"#787878"} />,
  <IconBell color={"#787878"} />,
  <IconMessage color={"#787878"} />,
  <IconPerson color={"#787878"} />,
]

interface Props extends HTMLAttributes<HTMLDivElement> {
  list: any[];
  className?: string;
  onClickTab: (e: string | number) => void;
  border?: string;
  TextItem: string;
  ValueItem: string | number;
}
function BottomTab({
  list,
  TextItem,
  ValueItem,
  border,
  className,
  onClickTab,
}: Props): ReactElement {
  const location = useLocation()
  let IsclassName;
  if (className !== undefined) {
    IsclassName = className;
  } else {
    IsclassName = "";
  }
  return (
    <div className="bottom-tab-parent">
      <div className={`${IsclassName + " " + "bottom-tab-navigation"}`}>
        <ul className="bottom-tabs-parnet-bottom">
          <NavLink
            to={"/"}
            className={({ isActive = String }) =>
              isActive ? "tabs-item active" : "tabs-item "
            }
          >
            {Icons[0]}
            کیفور

          </NavLink>
          <NavLink to={"/whatsup"} className={({ isActive = String }) =>
            isActive ? "tabs-item active" : "tabs-item "
          }>
            {Icons[1]}
            چه خبر
          </NavLink>
          <NavLink to={"/chat"} className={({ isActive = String }) =>
            isActive ? "tabs-item active" : "tabs-item "
          }>
            {Icons[2]}
            چت
          </NavLink>
          <NavLink to={"/myusername"} className={({ isActive = String }) =>
            isActive || location.pathname.includes("/groups") || location.pathname.includes("/room")? "tabs-item active" : "tabs-item "
          }>
            {Icons[3]}
            حساب کاربری
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default BottomTab;
