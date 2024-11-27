import {
  ImgCart31,
  ImgCart32,
  ImgCart33,
  ImgCart34,
  ImgCart35,
  ImgCart36,
  ImgCart37,
  ImgCart38,
} from '@assets/svgs';
import { JSX } from 'react';
import React from 'react';

export interface Goods {
  id: number;
  image: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  name: string;
}

export const GOODS_INFO: Goods[] = [
  {
    id: 1,
    image: ImgCart31,
    name: '밑줄 긋기 쉬운 휘어지는 자\n(20cm)',
  },
  {
    id: 2,
    image: ImgCart32,
    name: '전통 문양 책갈피',
  },
  {
    id: 3,
    image: ImgCart33,
    name: '글자를 가리지 않는 스티키 북마크\n(40매)',
  },
  {
    id: 4,
    image: ImgCart34,
    name: '본투리드 초저점도 3색 볼펜 0.7mm',
  },
];

export const X2_GOODS_INFO: Goods[] = [
  {
    id: 1,
    image: ImgCart35,
    name: '콜드브루 디카페인 날개',
  },
  {
    id: 2,
    image: ImgCart36,
    name: '드립백 에티오피아 예가체프 하루수케',
  },
  {
    id: 3,
    image: ImgCart37,
    name: '진드립백 가을하다',
  },
  {
    id: 4,
    image: ImgCart38,
    name: '캡슐 파우스트',
  },
];
