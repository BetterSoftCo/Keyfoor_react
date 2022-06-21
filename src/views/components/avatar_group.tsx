import React, { HTMLAttributes, memo, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
interface Props extends HTMLAttributes<HTMLDivElement> {
  list: any[];
  className?: string;
  onClick?: () => void;
  border?: string;
  ImageItem: string;
}

export function AvatarGroup({
  children,
  className,
  list,
  border = "1px solid #00DE8E",
  ImageItem,
}: Props): ReactElement {
  let IsclassName;
  if (className !== undefined) {
    IsclassName = className;
  } else {
    IsclassName = "";
  }
  let Styles = {
    border,
  };
  return (
    <div className={`${IsclassName + " " + "avatar-container"}`}>
      {list.map((item, index) => (
        <Link to={item.to} className="avatar-container-item" key={index}>
          <img style={Styles} src={item[`${ImageItem}`]} alt="avatar" />
        </Link>
      ))}
    </div>
  );
}

export default memo(AvatarGroup);
