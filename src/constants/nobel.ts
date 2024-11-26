import React from 'react';
import { Img41, Img42, Img43, Img44, Img45 } from '@assets/svgs';

export interface Nobel {
  id: number;
  title: string;
  image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const NobelBookList: Nobel[] = [
  {
    id: 1,
    title: '소년이 온다',
    image: Img41,
  },
  {
    id: 2,
    title: '작별하지 않는다',
    image: Img42,
  },
  {
    id: 3,
    title: '채식주의자',
    image: Img43,
  },
  {
    id: 4,
    title: '흰',
    image: Img44,
  },
  {
    id: 5,
    title: '서랍에 저녁을 넣어 두었다',
    image: Img45,
  },
];
