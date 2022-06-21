/* eslint-disable no-useless-concat */
import React, { ReactNode } from "react";
import { Theme } from "../../core/utilis";

interface IconTextRowProp {
  text: string;
  theme: Theme;
  children: ReactNode;
  className?: string;
  fontSize?: string;
  color?:string;
  fontWeight?:string
}
export const IconTextRow: React.FC<IconTextRowProp> = ({
  text,
  theme,
  children,
  className,
  fontSize,
  color,
  fontWeight
}) => {
  let StyleTheme: string = "";
  if (theme === Theme.light) {
    StyleTheme = "IconTextVerticalLight";
  } else {
    StyleTheme = "IconTextVerticalDark";
  }
  let IsclassName;
  if (className !== undefined) {
    IsclassName = className;
  } else {
    IsclassName = "";
  }
  let Styles = {
    fontSize,
    color,
    fontWeight

  };
  return (
    <div
      style={Styles}
      className={`${IsclassName + " " + StyleTheme + " " + "IconTextRow"}`}
    >
      {children}
      <span>{text}</span>
    </div>
  );
};