import React from "react";
import { Link } from "react-router-dom";
import { Theme } from "utilities_js";
import { ArrowRightOutline } from "../../assets";
import { LabelButton } from "./label_button";

export type IProps = {
  backLink: string;
  title: string;
};

const ProfileNav: React.FC<IProps> = ({ backLink, title }) => {
  return (
    <div className="profile-nav my-4 d-flex flex-row align-items-center justify-content-between">
      <Link to={backLink}>
        <LabelButton
          type={Theme.dark}
          minHeight="42px"
          fontSize="14px"
          borderRadius=""
          className=""
          backgroundColor="transparent"
          color="#787878"
          border=""
          boxShadow="none"
          children={
            <div>
              <img src={ArrowRightOutline} alt="arrow" />
              <span className="mx-2 text-nowrap font-weight-lighter return-Text">
                بازگشت
              </span>
            </div>
          }
        />
      </Link>
      <span className="nav-text ">{title}</span>
      <div className="space">{""}</div>
    </div>
  );
};

export default ProfileNav;
