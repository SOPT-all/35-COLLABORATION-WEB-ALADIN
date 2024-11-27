import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcHeartGray = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.025}
      d="M24.009 34.99 12.83 24.867c-6.076-6.075 2.855-17.74 11.178-8.303 8.322-9.436 17.212 2.268 11.178 8.303z"
    />
  </svg>
);
export default SvgIcHeartGray;
