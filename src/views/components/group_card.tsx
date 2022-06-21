import { HTMLAttributes, memo, ReactElement } from "react";
import { People2 } from "../../assets";
import { Theme } from "../../core/utilis";
import { LabelButton } from "./label_button";
interface Props extends HTMLAttributes<HTMLDivElement> {}

export function GroupCard({}: Props): ReactElement {
  return (
    <div className="group-card-parent">
      <div className="d-flex align-items-center">
        <img src={People2} alt="" className="icon" />
        <span className="group-name">گروه متعصبین اسپلندور</span>
      </div>
      <button className="join-Btn">عضویت</button>
    </div>
  );
}

export default memo(GroupCard);
