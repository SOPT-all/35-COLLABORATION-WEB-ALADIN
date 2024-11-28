import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNumberIndicator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={86}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#9E9E9E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12 4-6 6 6 6"
    />
    <path
      fill="#9E9E9E"
      d="m21.442 14.467 3.25-7.592h-4.043V5.614h5.772v.949l-3.211 7.904zM27.183 15.819 30.29 4.782h1.3l-3.094 11.037zM34.424 14.519V7.187l-1.495.299V6.55l2.262-1.014h.845v8.983zm6.896.104c-1.95 0-3.458-1.248-3.458-4.277v-.559c0-3.185 1.638-4.329 3.471-4.329 1.846 0 3.432 1.157 3.432 4.29v.559c0 3.133-1.586 4.316-3.445 4.316m0-1.222c1.196 0 1.794-.858 1.794-2.99v-.663c0-2.119-.61-3.055-1.78-3.055-1.21 0-1.808.884-1.808 2.964v.689c0 2.067.585 3.055 1.794 3.055"
    />
    <path
      stroke="#9E9E9E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m54 4 6 6-6 6"
    />
    <path fill="#8E8E8E" d="M73 5h2v10h-2zM77 5h2v10h-2z" />
  </svg>
);
export default SvgNumberIndicator;
