import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSerachUnder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={5}
    fill="none"
    {...props}
  >
    <path stroke="#6358FA" d="m1 .5 3 3 3-3" />
  </svg>
);
export default SvgSerachUnder;
