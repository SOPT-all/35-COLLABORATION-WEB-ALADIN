import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcPick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path fill="#6358FA" d="m10.606 0 10.607 10.607-7.607 7.606h-6L0 10.607z" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m6.606 11 2.5 2.5 5-5"
    />
    <path
      stroke="url(#ic_pick_svg__a)"
      strokeLinejoin="round"
      d="M2.606 18h15"
    />
    <defs>
      <linearGradient
        id="ic_pick_svg__a"
        x1={13.612}
        x2={13.233}
        y1={18.8}
        y2={16.651}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6358FA" />
        <stop offset={1} stopColor="#AFA9FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgIcPick;
