import { ReactElement, memo } from 'react';

interface Props {
  color: string;
}

function IconPerson({color}: Props): ReactElement {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g id="vuesax_outline_frame" data-name="vuesax/outline/frame" transform="translate(-108 -252)">
        <g id="frame">
          <path id="Vector" d="M5.35,10.37H5.27a.543.543,0,0,0-.18,0,5.145,5.145,0,1,1,.29,0ZM5.19,1.5a3.686,3.686,0,0,0-.14,7.37,1.651,1.651,0,0,1,.32,0A3.687,3.687,0,0,0,5.19,1.5Z" transform="translate(114.81 253.25)" fill={color} />
          <path id="Vector-2" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(108 252)" fill="none" opacity="0" />
          <path id="Vector-3" data-name="Vector" d="M7.57,10.112a9.878,9.878,0,0,1-5.42-1.5A4.291,4.291,0,0,1,0,5.062a4.336,4.336,0,0,1,2.15-3.57,10.588,10.588,0,0,1,10.84,0,4.314,4.314,0,0,1,2.15,3.55,4.336,4.336,0,0,1-2.15,3.57A9.9,9.9,0,0,1,7.57,10.112ZM2.98,2.752A2.876,2.876,0,0,0,1.5,5.072a2.869,2.869,0,0,0,1.48,2.3,9.037,9.037,0,0,0,9.18,0,2.876,2.876,0,0,0,1.48-2.32,2.869,2.869,0,0,0-1.48-2.3A9.084,9.084,0,0,0,2.98,2.752Z" transform="translate(112.6 264.438)" fill={color} />
        </g>
      </g>
    </svg>
  );
}

export default memo(IconPerson);
