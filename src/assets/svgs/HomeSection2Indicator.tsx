import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHomeSection2Indicator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={8}
    fill="none"
    {...props}
  >
    <circle cx={4} cy={4} r={4} fill="#6358FA" />
    <circle cx={22} cy={4} r={4} fill="#B6B6B6" />
    <circle cx={40} cy={4} r={4} fill="#B6B6B6" />
  </svg>
);
export default SvgHomeSection2Indicator;
