import { ReactElement, memo } from "react";

interface Props {
  color: string;
  className?: string;
}

function IconKeyFoor({ color, className }: Props): ReactElement {
  let IsclassName;
  if (className !== undefined) {
    IsclassName = className;
  } else {
    IsclassName = "";
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={IsclassName}
    >
      <g
        id="vuesax_outline_discover"
        data-name="vuesax/outline/discover"
        transform="translate(-428 -508)"
      >
        <g id="discover">
          <path
            id="Vector"
            d="M3.732,21.622a3.7,3.7,0,0,1-2.7-1.03,4.229,4.229,0,0,1-.84-4.17l2.48-9.93a5.694,5.694,0,0,1,3.82-3.82l9.93-2.48a4.229,4.229,0,0,1,4.17.84,4.229,4.229,0,0,1,.84,4.17l-2.48,9.93a5.694,5.694,0,0,1-3.82,3.82L5.2,21.432A6.447,6.447,0,0,1,3.732,21.622ZM16.8,1.632l-9.93,2.49a4.262,4.262,0,0,0-2.74,2.73l-2.48,9.93a2.828,2.828,0,0,0,.44,2.75,2.823,2.823,0,0,0,2.75.44l9.93-2.48a4.247,4.247,0,0,0,2.73-2.73l2.48-9.93a2.828,2.828,0,0,0-.44-2.75A2.8,2.8,0,0,0,16.8,1.632Z"
            transform="translate(429.178 509.198)"
            fill={color}
          />
          <path
            id="Vector-2"
            data-name="Vector"
            d="M4.25,8.5A4.25,4.25,0,1,1,8.5,4.25,4.259,4.259,0,0,1,4.25,8.5Zm0-7A2.75,2.75,0,1,0,7,4.25,2.748,2.748,0,0,0,4.25,1.5Z"
            transform="translate(435.75 515.75)"
            fill={color}
          />
          <path
            id="Vector-3"
            data-name="Vector"
            d="M0,0H24V24H0Z"
            transform="translate(428 508)"
            fill="none"
            opacity="0"
          />
        </g>
      </g>
    </svg>
  );
}

export default memo(IconKeyFoor);
