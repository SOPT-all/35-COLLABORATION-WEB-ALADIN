import React from 'react';
import * as S from './HomeSection7.styled';
import {
  HomeSection2Indicator,
  IcPick,
  Img71,
  Img72,
  Img73,
  Img74,
  Img75,
} from '@assets/svgs';

const HomeSection7 = () => {
  const cardData = [
    { id: 1, img: <Img71 />, label: '1', name: '이중 하나는 거짓말' },
    { id: 2, img: <Img72 />, label: '2', name: '불안 세대' },
    { id: 3, img: <Img73 />, label: '3', name: '니체의 자존감 수업' },
    { id: 4, img: <Img74 />, label: '4', name: '비 그친 오후의 헌책방' },
    { id: 5, img: <Img75 />, label: '5', name: '영원한 천국' },
  ];
  return (
    <>
      <S.Section7>
        <S.Section7ButtonLeft>{'<'}</S.Section7ButtonLeft>
        <S.Section7Wrapper>
          <S.Section7Layout>
            <S.Section7TitleLayout>
              <S.Section7TitleContainer>
                <S.Title>멤버십 선정 이달의 책 TOP 10</S.Title>
                <S.TitleButton>{'>'}</S.TitleButton>
              </S.Section7TitleContainer>
              <S.Section7LabelContainer>
                <IcPick />
                <S.LabelName>독자 투표</S.LabelName>
              </S.Section7LabelContainer>
            </S.Section7TitleLayout>
            <S.Section7BookLayout>
              {cardData.map((card, id) => (
                <S.CardContainer key={id}>
                  <S.CardBox>
                    {card.img}
                    <S.CardName>{card.name}</S.CardName>
                  </S.CardBox>
                  <S.CardLabel>{card.label}</S.CardLabel>
                </S.CardContainer>
              ))}
            </S.Section7BookLayout>
          </S.Section7Layout>
          <HomeSection2Indicator />
        </S.Section7Wrapper>
        <S.Section7ButtonRight>{'>'}</S.Section7ButtonRight>
      </S.Section7>
    </>
  );
};

export default HomeSection7;
