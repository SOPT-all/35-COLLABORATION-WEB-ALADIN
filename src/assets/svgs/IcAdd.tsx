import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <path stroke="#333" d="M2 5h6M5 2v6" />
  </svg>
);
export default SvgIcAdd;
