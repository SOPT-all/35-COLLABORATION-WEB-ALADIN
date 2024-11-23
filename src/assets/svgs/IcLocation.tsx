import type { SVGProps } from 'react';
const SvgIcLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.5 5c0 2.49-4.5 8.5-4.5 8.5S2.5 7.49 2.5 5a4.5 4.5 0 0 1 9 0"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
    />
  </svg>
);
export default SvgIcLocation;
