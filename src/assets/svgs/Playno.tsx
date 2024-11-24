import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlayno = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <path fill="gray" d="M14 12h2v12h-2zM19 12h2v12h-2z" />
  </svg>
);
export default SvgPlayno;
