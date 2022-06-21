import React, {
  HTMLAttributes,
  memo,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import { Theme } from "../../core/utilis";
interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  border?: string;
  backgroundColor?: string;
  minHeight?: string;
  borderRadius?: string;
  minWidth?: string;
  display?: string;
  type?: Theme;
  fontSize?: string;
  className?: string;
  color?: string;
  boxShadow?: string;
  loading?: boolean;
  isActive?: boolean;
  bage?: ReactNode;
  bageClolor?: string;
}

export function LabelButton({
  border,
  backgroundColor,
  minHeight,
  minWidth,
  borderRadius,
  display,
  onClick,
  type,
  children,
  fontSize,
  className = "",
  color,
  boxShadow,
  isActive,
  bage,
  bageClolor,
}: Props): ReactElement {
  const [Activeate, setActiveate] = useState(false);
  let IsclassName;
  if (className !== undefined) {
    IsclassName = className;
  } else {
    IsclassName = "";
  }
  const handelonClick = () => {
    if (onClick) {
      onClick();
    }
    if (isActive) {
      setActiveate(!Activeate);
    }
  };
  let bageTemplete;
  if (bage) {
    bageTemplete = (
      <span className="badge badge-pill" style={{ background: bageClolor }}>
        {bage}
      </span>
    );
  }
  return (
    <button
      onClick={handelonClick}
      className={
        "label-button" +
        " " +
        `${IsclassName + " " + "theme" + type}` +
        " " +
        `${Activeate ? "is-active-labelbutton" : ""}`
      }
      style={{
        display: display,
        backgroundColor,
        border,
        borderRadius,
        minHeight,
        minWidth,
        fontSize,
        color,
        boxShadow,
      }}
    >
      {children}
      {bageTemplete}
    </button>
  );
}

export default memo(LabelButton);
