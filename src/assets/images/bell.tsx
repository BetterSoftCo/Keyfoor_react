import { ReactElement, memo } from 'react';

interface Props {
  color: string;
}

function IconBell({color}: Props): ReactElement {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g id="vuesax_outline_notification" data-name="vuesax/outline/notification" transform="translate(-172 -163)">
        <g id="notification" transform="translate(0 -25)">
          <path id="Vector" d="M8.793,18.36a21.674,21.674,0,0,1-6.87-1.11A2.782,2.782,0,0,1,.163,15.6a2.7,2.7,0,0,1,.27-2.38l1.15-1.91a4.048,4.048,0,0,0,.46-1.67V6.75a6.75,6.75,0,0,1,13.5,0V9.64A4.179,4.179,0,0,0,16,11.32l1.14,1.9a2.768,2.768,0,0,1,.22,2.38,2.72,2.72,0,0,1-1.71,1.65A21.568,21.568,0,0,1,8.793,18.36Zm0-16.86a5.256,5.256,0,0,0-5.25,5.25V9.64a5.64,5.64,0,0,1-.67,2.44l-1.15,1.91a1.243,1.243,0,0,0-.15,1.09,1.265,1.265,0,0,0,.83.74,20,20,0,0,0,12.79,0,1.221,1.221,0,0,0,.77-.75,1.246,1.246,0,0,0-.1-1.08l-1.15-1.91a5.62,5.62,0,0,1-.67-2.45V6.75A5.249,5.249,0,0,0,8.793,1.5Z" transform="translate(175.227 190.17)" fill={color} />
          <path id="Vector-2" data-name="Vector" d="M4.455,2.76a.761.761,0,0,1-.21-.03,7.047,7.047,0,0,0-.84-.18,5.847,5.847,0,0,0-2.44.18.744.744,0,0,1-.91-.99A2.724,2.724,0,0,1,2.6,0a2.71,2.71,0,0,1,2.55,1.74.763.763,0,0,1-.14.78A.773.773,0,0,1,4.455,2.76Z" transform="translate(181.425 189.18)" fill={color} />
          <path id="Vector-3" data-name="Vector" d="M3.75,3.75A3.764,3.764,0,0,1,1.1,2.65,3.764,3.764,0,0,1,0,0H1.5a2.265,2.265,0,0,0,.66,1.59,2.265,2.265,0,0,0,1.59.66A2.253,2.253,0,0,0,6,0H7.5A3.751,3.751,0,0,1,3.75,3.75Z" transform="translate(180.27 207.06)" fill={color} />
          <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(172 188)" fill="none" opacity="0" />
        </g>
      </g>
    </svg>
  );
}

export default memo(IconBell);

