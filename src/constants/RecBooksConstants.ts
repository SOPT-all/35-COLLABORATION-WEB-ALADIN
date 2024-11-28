import {
  ImgCartbook1,
  ImgCartbook2,
  ImgCartbook3,
  ImgCartbook4,
  ImgCartbook5,
} from '@assets/svgs';
import { JSX } from 'react';
import React from 'react';

export interface Book {
  id: number;
  image: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

export const REC_BOOKS: Book[] = [
  {
    id: 1,
    image: ImgCartbook1,
    title: '시대예보: 호명사회',
  },
  {
    id: 2,
    image: ImgCartbook2,
    title: '머니트렌드 2025',
  },
  {
    id: 3,
    image: ImgCartbook3,
    title: '박태웅의 AI강의 2025',
  },
  {
    id: 4,
    image: ImgCartbook4,
    title: '2025 트렌드 노트',
  },
  {
    id: 5,
    image: ImgCartbook5,
    title: '진짜 하루만에 이해하는\n제약 바이오 산업',
  },
];
