import type { SVGProps } from 'react';
const SvgIcCheckbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3 8 3.5 3.5L13 5"
    />
  </svg>
);
export default SvgIcCheckbox;
