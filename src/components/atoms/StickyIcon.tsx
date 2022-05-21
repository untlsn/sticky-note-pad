import { SVGProps } from 'react';

function StickyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="353" height="352" viewBox="0 0 353 352" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3 62L63 2H353V352H3V62Z" fill="#FFE400" />
      <g filter="url(#filter0_d_11_1743)">
        <path d="M63 62L3 62L63 2L63 62Z" fill="#FFEE5A" />
      </g>
      <defs>
        <filter id="filter0_d_11_1743" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="1" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_1743" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_1743" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default StickyIcon;
