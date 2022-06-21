import {
  HTMLAttributes,
  memo,
  ReactElement,
  useCallback,
  MouseEvent,
  useState,
} from "react";
import { Link } from "react-router-dom";
import {
  IconArrow,
  IconPlusGray,
  IconPlusOrange,
  ImageUser,
  ImgAvatar,
} from "../../assets";
import Open_Button from "./open_button";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  image: string;
  name: string;
  accountName: string;
  showDotted?: boolean;
}

export function CardUserManager({
  onClick,
  image,
  name,
  accountName,
  showDotted,
}: Props): ReactElement {
  const [active, setActive] = useState(false);

  const handleOnClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      onClick?.(event);
      setActive(!active);
    },
    [onClick, active]
  );

  return (
    <div className="card-user-manager">
      <div className="section-user">
        <img src={image} alt="" className="image-user" />
        <div>
          <h5 className="name-user">{name}</h5>
          <h6 className="id-user">{accountName}</h6>
        </div>
      </div>

      {active === true ? (
        <img
          src={IconPlusOrange}
          alt=""
          className={`icon-arrow ${showDotted && 'd-none'}`}
          onClick={handleOnClick}
        />
      ) : (
        <img
          src={IconPlusGray}
          alt=""
          className={`icon-arrow ${showDotted && 'd-none'}`}
          onClick={handleOnClick}
        />
      )}
      {showDotted && (
        <div className="text-end d-flex justify-content-end">
          <Open_Button />
        </div>
      )}
    </div>
  );
}

export default memo(CardUserManager);
