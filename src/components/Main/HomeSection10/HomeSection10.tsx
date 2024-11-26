import React from 'react';
import * as S from './HomeSection10.styled';
import {
  IcAudio,
  IcRightarrowMediumTextgray40,
  Img101,
  Img102,
  Img103,
  Img104,
  Img105,
} from '@assets/svgs';
import SvgHomeSection2Indicator from '@assets/svgs/HomeSection2Indicator';
import ArrowLeftButton from '@components/common/Button/ArrowLeftButton/ArrowLeftButton';
import ArrowRightButton from '@components/common/Button/ArrowRightButton/ArrowRightButton';

const HomeSection10 = () => {
  const cardData = [
    {
      id: 1,
      img: <Img101 />,
      name: '참을 수 없는 존재의 MBTI',
      label: <IcAudio />,
    },
    {
      id: 2,
      img: <Img102 />,
      name: '씨 유 어게인',
      label: <IcAudio />,
    },
    {
      id: 3,
      img: <Img103 />,
      name: '시티-뷰',
      label: <IcAudio />,
    },
    {
      id: 4,
      img: <Img104 />,
      name: '완벽한 행운',
      label: <IcAudio />,
    },
    {
      id: 5,
      img: <Img105 />,
      name: '공자의 말들',
      label: <IcAudio />,
    },
  ];
  return (
    <S.HomeSection10>
      <S.Section10>
        <ArrowLeftButton />
        <S.Section10Wrapper>
          <S.Section10Title>
            <S.Title>알라딘 오디오 북</S.Title>
            <IcRightarrowMediumTextgray40 />
          </S.Section10Title>
          <S.Section10Layer>
            <S.Section10Container>
              {cardData.map((card, id) => (
                <S.Section10Map key={id}>
                  {card.img}
                  <S.CardName>{card.name}</S.CardName>
                </S.Section10Map>
              ))}
              <S.IcAudio>
                <IcAudio />
                <IcAudio />
                <IcAudio />
                <IcAudio />
                <IcAudio />
              </S.IcAudio>
            </S.Section10Container>
          </S.Section10Layer>
        </S.Section10Wrapper>
        <ArrowRightButton />
      </S.Section10>
      <SvgHomeSection2Indicator />
    </S.HomeSection10>
  );
};

export default HomeSection10;

//17.025
