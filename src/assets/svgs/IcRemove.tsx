import type { SVGProps } from 'react';
const SvgIcRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <path stroke="#333" d="M2 5h6" />
  </svg>
);
export default SvgIcRemove;
