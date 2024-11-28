import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPropertyDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={6}
    fill="none"
    {...props}
  >
    <path fill="#8E8E8E" d="M3 6 .402 1.5h5.196z" />
  </svg>
);
export default SvgPropertyDown;
