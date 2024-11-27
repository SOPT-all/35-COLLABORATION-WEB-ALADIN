import * as React from 'react';
import type { SVGProps } from 'react';
const SvgImgShopx2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={54}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#img_shopx2_svg__a)">
      <path fill="url(#img_shopx2_svg__b)" d="M0 0h54v32H0z" />
    </g>
    <defs>
      <clipPath id="img_shopx2_svg__a">
        <path fill="#fff" d="M0 5a5 5 0 0 1 5-5h49v27a5 5 0 0 1-5 5H0z" />
      </clipPath>
      <pattern
        id="img_shopx2_svg__b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#img_shopx2_svg__c" transform="scale(.0107 .0192)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="img_shopx2_svg__c"
        width={97}
        height={53}
      />
    </defs>
  </svg>
);
export default SvgImgShopx2;