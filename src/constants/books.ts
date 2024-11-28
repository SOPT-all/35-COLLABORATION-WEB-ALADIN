import React from 'react';
import { Img11, Img12, Img13, Img14 } from '@assets/svgs';

export interface Book {
  id: number;
  title: string;
  price: string;
  lowestPrice: string;
  author: string;
  image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const books: Book[] = [
  {
    id: 1,
    title: '무지의 즐거움',
    price: '16,200원',
    lowestPrice: '16,200원',
    author: '우치다 타츠루 지음, 박동섭 옮김',
    image: Img11,
  },
  {
    id: 2,
    title: '페리퍼럴 1',
    price: '16,200원',
    lowestPrice: '16,200원',
    author: '윌리엄 깁슨 지음, 장성주 옮김',
    image: Img12,
  },
  {
    id: 3,
    title: '수학 머리는 어떻게 만들어지는가',
    price: '16,200원',
    lowestPrice: '16,200원',
    author: '조 볼러 지음, 고현석 옮김',
    image: Img13,
  },
  {
    id: 4,
    title: '조금 망한 사랑',
    price: '16,200원',
    lowestPrice: '16,200원',
    author: '김지연 지음',
    image: Img14,
  },
];
