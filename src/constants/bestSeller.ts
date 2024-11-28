import React from 'react';
import { PropertyUp, PropertyDown, New } from '@assets/svgs';

export interface BestSeller {
  id: number;
  title: string;
  image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const list: BestSeller[] = [
  {
    id: 3,
    title: '도쿄 에일리언즈 9(트리플 ...)',
    image: New,
  },
  {
    id: 4,
    title: '작별하지 않는다',
    image: PropertyDown,
  },
  {
    id: 5,
    title: '채식주의자(리마스터판)',
    image: PropertyDown,
  },
  {
    id: 6,
    title: '흰',
    image: PropertyUp,
  },
  {
    id: 7,
    title: '희랍어 시간',
    image: PropertyDown,
  },
  {
    id: 8,
    title: '서랍에 저녁을 넣어 두었다',
    image: PropertyDown,
  },
  {
    id: 9,
    title: '언제나 언니 옆에 있을게! ...',
    image: PropertyUp,
  },
  {
    id: 10,
    title: '트렌드 코리아 2025',
    image: PropertyDown,
  },
];
