import { HTMLAttributes, memo, ReactElement } from "react";
import { Theme } from "../../core/utilis";
import {
  Box,
  Cover,
  ImgAvatar,
  People,
  ProfileAdd,
  VideoCircle,
} from "../../assets";
import { AvatarGroup } from "./avatar_group";
import { IconTextRow } from "./icon_text_horizantal";
import { Link } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function RoomCard({ className }: Props): ReactElement {
  return (
    <div className={"room-card-parent" + " " + className}>
      <div className="d-flex">
        <img src={Cover} alt="cover" className="room-Cover" />
        <div className="info d-flex flex-column justify-content-between">
          <IconTextRow
            fontSize="14px"
            className="room-Name"
            text="اتاق دوئل باز های قدیمی"
            theme={Theme.light}
            children={<img src={Box} alt="box" className="mx-2" />}
          ></IconTextRow>
          <AvatarGroup
            ImageItem="image"
            list={[
              { name: "1", image: ImgAvatar, to: "usernaeme" },
              { name: "1", image: ImgAvatar, to: "usernaeme" },
              { name: "1", image: ImgAvatar, to: "usernaeme" },
            ]}
          />
          <IconTextRow
            fontSize="10px"
            className="lighter pointer text-muted "
            text="بازی دوئل  Duel"
            theme={Theme.light}
            children={<img src={VideoCircle} alt="" className="mx-2" />}
          ></IconTextRow>
          <IconTextRow
            fontSize="10px"
            className="lighter pointer text-muted mt-2 "
            text="گروه پسرخاله ها و دختر خاله های خاندان ... "
            theme={Theme.light}
            children={<img src={People} alt="people" className="mx-2" />}
          ></IconTextRow>
        </div>
      </div>
      <div className="d-flex align-items-center room-Btn-Conteiner">
        <Link
          to="/room/chat"
          className="text-decoration-none request-Btn d-flex align-items-center justify-content-center"
        >
          <button>درخواست ورود</button>
        </Link>
        <div className="d-flex justify-content-between align-items-center w-100 info">
          <IconTextRow
            fontSize="10px"
            className="lighter pointer text-muted"
            text="3 جای خالی"
            theme={Theme.light}
            children={
              <img src={ProfileAdd} alt="profileAdd" className="mx-2" />
            }
          ></IconTextRow>
          <small className="text-muted text-time">40 - 80 Min</small>
        </div>
      </div>
    </div>
  );
}

export default memo(RoomCard);
