import React from 'react';
import { Img51, Img52, Img53, Img54, Img55 } from '@assets/svgs';

export interface Recommend {
  id: number;
  title: string;
  image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const RecommendbookList: Recommend[] = [
  {
    id: 1,
    title: '어떤 어른',
    image: Img51,
  },
  {
    id: 2,
    title: '어떤 비밀',
    image: Img52,
  },
  {
    id: 3,
    title: '진짜 하루만에 이해하는 제약바이오 산업',
    image: Img53,
  },
  {
    id: 4,
    title: '흰',
    image: Img54,
  },
  {
    id: 5,
    title: '서랍에 저녁을 넣어 두었다',
    image: Img55,
  },
];
