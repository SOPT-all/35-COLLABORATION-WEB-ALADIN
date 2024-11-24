import {
  HomeSection2Indicator,
  Img91,
  Img92,
  Img93,
  Img94,
  Img95,
} from '@assets/svgs';
import * as S from './HomeSection9.styled';
import React from 'react';
import ArrowLeftButton from '@components/common/Button/ArrowLeftButton/ArrowLeftButton';
import ArrowRightButton from '@components/common/Button/ArrowRightButton/ArrowRightButton';

const HomeSection9 = () => {
  const cardData = [
    {
      id: 1,
      img: <Img91 />,
      name: '흑백 장르전',
      info: '정혜연, 범유진, 김청귤, 현찬양',
    },
    {
      id: 2,
      img: <Img92 />,
      name: 'GL 기획전',
      info: '매주 릴레이 무료 공개!',
    },
    {
      id: 3,
      img: <Img93 />,
      name: '단행본이라는 뉴미디어',
      info: '장강명',
    },
    {
      id: 4,
      img: <Img94 />,
      name: '여자말씨의 내력',
      info: '후미코',
    },
    {
      id: 5,
      img: <Img95 />,
      name: '<룩 백> 감상',
      info: '주간 무협',
    },
  ];
  return (
    <>
      <S.Section8>
        <S.Title>TO BE CONTINUED...추천 노트</S.Title>
        <S.Section8Wrapper>
          <S.Section8Layout>
            <ArrowLeftButton />
            <S.Card>
              {cardData.map((card, id) => (
                <S.CardLayout key={id}>
                  <S.CardImg>{card.img}</S.CardImg>
                  <S.CardName>{card.name}</S.CardName>
                  <S.CardInfo>{card.info}</S.CardInfo>
                </S.CardLayout>
              ))}
            </S.Card>
            <ArrowRightButton />
          </S.Section8Layout>
          <HomeSection2Indicator />
        </S.Section8Wrapper>
      </S.Section8>
    </>
  );
};

export default HomeSection9;
