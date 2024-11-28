import React, { useState } from 'react';
import { useRef } from 'react';
import * as S from './HomeSection6.styled';
import SvgImg61 from '@assets/svgs/Img61';
import SvgImg62 from '@assets/svgs/Img62';
import SvgImg63 from '@assets/svgs/Img63';
import SvgImg64 from '@assets/svgs/Img64';
import SvgImg65 from '@assets/svgs/Img65';
import SvgImg66 from '@assets/svgs/Img66';
import SvgImg67 from '@assets/svgs/Img67';
import SvgImg68 from '@assets/svgs/Img68';
import SvgImg69 from '@assets/svgs/Img69';
import IcRightarrowMediumTextgray40 from '@assets/svgs/IcRightarrowMediumTextgray40';

const HomeSection6 = () => {
  const section6Scroll = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - section6Scroll.current!.offsetLeft);
    setScrollLeft(section6Scroll.current!.scrollLeft);
    section6Scroll.current!.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) {
      return;
    }
    const x = e.pageX - section6Scroll.current!.offsetLeft;
    const scroll = scrollLeft - (x - startX);
    section6Scroll.current!.scrollLeft = scroll;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    section6Scroll.current!.style.cursor = 'grab';
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      section6Scroll.current!.style.cursor = 'grab';
    }
  };

  const cardData = [
    {
      id: 1,
      img: <SvgImg61 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '15pt 중고매장 FAQ',
    },
    {
      id: 2,
      img: <SvgImg62 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '책모양 오르골',
    },
    {
      id: 3,
      img: <SvgImg63 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '북슬리브',
    },
    {
      id: 4,
      img: <SvgImg64 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '퀄팅 북슬리브',
    },
    {
      id: 5,
      img: <SvgImg65 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '미니 토트백',
    },
    {
      id: 6,
      img: <SvgImg66 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '아크릴 스탠드',
    },
    {
      id: 7,
      img: <SvgImg67 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '데스크 매트',
    },
    {
      id: 8,
      img: <SvgImg68 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '아크릴 램프',
    },
    {
      id: 9,
      img: <SvgImg69 style={{ flexShrink: 0, borderRadius: '1rem' }} />,
      label: '스틸 북엔드',
    },
  ];

  return (
    <S.Section6>
      <S.Section6TitleLayout>
        <S.Title>알라딘이 만든 사은품</S.Title>
        <IcRightarrowMediumTextgray40 />
      </S.Section6TitleLayout>
      <S.Section6CardLayout
        ref={section6Scroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{ width: '22.5rem', flexShrink: '0' }} />
        {cardData.map((card, id) => (
          <S.Section6CardContainer key={id}>
            {card.img}
            <S.CardLabel>{card.label}</S.CardLabel>
          </S.Section6CardContainer>
        ))}
        <div style={{ width: '22.5rem', flexShrink: '0' }} />
      </S.Section6CardLayout>
    </S.Section6>
  );
};
export default HomeSection6;
