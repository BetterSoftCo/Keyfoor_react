import { ReactElement, memo } from 'react';

interface Props {
  color: string;
}

function IconMessage({color}: Props): ReactElement {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g id="vuesax_outline_message" data-name="vuesax/outline/message" transform="translate(-684 -188)">
        <g id="message">
          <path id="Vector" d="M10.75,21.56a2.265,2.265,0,0,1-1.8-.96l-1.5-2a.472.472,0,0,0-.2-.1h-.5C2.58,18.5,0,17.37,0,11.75v-5C0,2.33,2.33,0,6.75,0h8c4.42,0,6.75,2.33,6.75,6.75v5c0,4.42-2.33,6.75-6.75,6.75h-.5a.261.261,0,0,0-.2.1l-1.5,2A2.265,2.265,0,0,1,10.75,21.56ZM6.75,1.5C3.17,1.5,1.5,3.17,1.5,6.75v5C1.5,16.27,3.05,17,6.75,17h.5a1.876,1.876,0,0,1,1.4.7l1.5,2a.694.694,0,0,0,1.2,0l1.5-2a1.752,1.752,0,0,1,1.4-.7h.5C18.33,17,20,15.33,20,11.75v-5c0-3.58-1.67-5.25-5.25-5.25Z" transform="translate(685.25 189.25)" fill={color} />
          <path id="Vector-2" data-name="Vector" d="M1,2A1,1,0,1,1,2,1,1,1,0,0,1,1,2Z" transform="translate(695 198)" fill={color} />
          <path id="Vector-3" data-name="Vector" d="M1,2A1,1,0,1,1,2,1,1,1,0,0,1,1,2Z" transform="translate(699 198)" fill={color} />
          <path id="Vector-4" data-name="Vector" d="M1,2A1,1,0,1,1,2,1,1,1,0,0,1,1,2Z" transform="translate(691 198)" fill={color} />
          <path id="Vector-5" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(684 188)" fill="none" opacity="0" />
        </g>
      </g>
    </svg>
  );
}

export default memo(IconMessage);

