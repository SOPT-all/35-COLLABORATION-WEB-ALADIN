import React from 'react';
import { useRef } from 'react';
import * as S from './Section6Card.styled';
import {
  IcRightarrowMediumTextgray40,
  Img61,
  Img62,
  Img63,
  Img64,
  Img65,
  Img66,
  Img67,
  Img68,
  Img69,
} from '@assets/svgs';

const Section6Card = () => {
  //무언가 수정 ~
  const section6Scroll = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    if (section6Scroll.current) {
      section6Scroll.current.scrollLeft += e.deltaY;
    }
  };

  const cardData = [
    {
      id: 1,
      img: <Img61 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '15pt 중고매장 FAQ',
    },
    {
      id: 2,
      img: <Img62 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '책모양 오르골',
    },
    {
      id: 3,
      img: <Img63 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '북슬리브',
    },
    {
      id: 4,
      img: <Img64 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '퀄팅 북슬리브',
    },
    {
      id: 5,
      img: <Img65 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '미니 토트백',
    },
    {
      id: 6,
      img: <Img66 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '아크릴 스탠드',
    },
    {
      id: 7,
      img: <Img67 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '데스크 매트',
    },
    {
      id: 8,
      img: <Img68 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '아크릴 램프',
    },
    {
      id: 9,
      img: <Img69 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '스틸 북엔드',
    },
  ];

  return (
    <>
      <S.Section6CardWrapper>
        <S.Section6TitleLayout>
          <S.Title>알라딘이 만든 사은품</S.Title>
          <IcRightarrowMediumTextgray40 />
        </S.Section6TitleLayout>
        <S.Section6CardLayout ref={section6Scroll} onWheel={handleWheel}>
          {cardData.map((card, id) => (
            <S.Section6CardContainer key={id}>
              {card.img}
              <S.CardLabel>{card.label}</S.CardLabel>
            </S.Section6CardContainer>
          ))}
        </S.Section6CardLayout>
      </S.Section6CardWrapper>
    </>
  );
};

export default Section6Card;
