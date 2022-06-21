import React, {
  Fragment,
  HTMLAttributes,
  memo,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from "react";
import { CloseCircle } from "../../assets";
export enum InputType {
  text,
  textarea,
}
interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  minWidth?: string;
  minHeigth?: string;
  backgroundColor?: string;
  className?: string;
  borderRadius?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  CleanInput: () => void;
  placeholder?: string;
  type: InputType | any;
  label?: ReactNode;
  popQuestion?: string;
  optional?: string;
  rows?: number;
  inValid?: string;
  value: string;
}

export function InputText({
  width,
  height,
  minWidth,
  minHeigth,
  backgroundColor,
  className,
  borderRadius,
  onChange,
  onBlur,
  CleanInput,
  placeholder,
  type,
  label,
  popQuestion,
  optional,
  rows = 4,
  inValid,
  value,
}: Props): ReactElement {
  const handelCleanText = (e: any) => {
    CleanInput();
  };
  let styles = {
    width: width,
    height: height,
    minWidth: minWidth,
    minHeigth: minHeigth,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
  };
  let IsclassName;
  if (className !== undefined) {
    IsclassName = className;
  } else {
    IsclassName = "";
  }
  let TemplateLabel;
  if (label !== null && label !== undefined) {
    TemplateLabel = (
      <span className="label d-flex align-items-center">{label}</span>
    );
  }
  let TemplateValidation;
  let IsinValid;
  if (inValid) {
    TemplateValidation = <div>{inValid}</div>;
    IsinValid = "is-invalid";
  }
  return type === InputType.text ? (
    <Fragment>
      {TemplateLabel}
      <div className="parent-input">
        <input
          type="text"
          style={styles}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={onBlur}
          className={`${
            IsclassName +
            " " +
            "InputComponentStyle" +
            " " +
            "form-control" +
            " " +
            IsinValid
          }`}
        />
        {value?.length > 2 ? (
          <span className="clean-button" onClick={handelCleanText}>
            <img src={CloseCircle} alt="clean" />
          </span>
        ) : null}
      </div>
      {TemplateValidation}
    </Fragment>
  ) : (
    <Fragment>
      {TemplateLabel}
      <textarea
        style={styles}
        rows={rows}
        className={`${
          IsclassName + " " + "InputComponentStyle" + " " + "form-control"
        }`}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      ></textarea>
      {TemplateValidation}
    </Fragment>
  );
}

export default memo(InputText);
