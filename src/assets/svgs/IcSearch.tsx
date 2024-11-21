import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#B6B6B6"
      d="M18.88 19.445a.5.5 0 1 0 .707-.707zm-4.95-4.95 4.95 4.95.707-.707-4.95-4.95z"
    />
    <circle
      cx={9.899}
      cy={9.9}
      r={6.5}
      stroke="#B6B6B6"
      transform="rotate(-45 9.9 9.9)"
    />
  </svg>
);
export default SvgIcSearch;
