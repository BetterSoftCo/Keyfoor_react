import { HTMLAttributes, memo, ReactElement } from "react";
import { ImgAvatar } from "../../assets";
interface Props extends HTMLAttributes<HTMLDivElement> {}

export function ProfileCard({}: Props): ReactElement {
  return (
    <div className="profile-card-parent d-flex flex-row align-items-center">
      <img src={ImgAvatar} alt="avatar" className="avatar" />
      <div className="info-profile ">
        <span className="name">سمانه احمدیان</span>
        <span className="username">@samanehahmadian</span>
      </div>
    </div>
  );
}

export default memo(ProfileCard);
