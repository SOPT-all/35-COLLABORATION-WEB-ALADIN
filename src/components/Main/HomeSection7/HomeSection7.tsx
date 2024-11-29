import React, { useEffect, useState } from 'react';
import * as S from './HomeSection7.styled';
// import SvgImg71 from '@assets/svgs/Img71';
// import SvgImg72 from '@assets/svgs/Img72';
// import SvgImg73 from '@assets/svgs/Img73';
// import SvgImg74 from '@assets/svgs/Img74';
// import SvgImg75 from '@assets/svgs/Img75';
import SvgIcPick from '@assets/svgs/IcPick';
import SvgHomeSection2Indicator from '@assets/svgs/HomeSection2Indicator';
import { IcRightarrowMediumTextgray40 } from '@assets/svgs';
import ArrowLeftButton from '@components/common/Button/ArrowLeftButton/ArrowLeftButton';
import ArrowRightButton from '@components/common/Button/ArrowRightButton/ArrowRightButton';
// import axios from 'axios';
import { getSection7 } from '@apis/getSection7';

interface BookItemType {
  id: number;
  name: string;
  imageUrl: string;
}

const HomeSection7 = () => {
  const [bookItems, setBookItems] = useState<BookItemType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const items = await getSection7();
        setBookItems(items.splice(0, 5));
      } catch (e) {
        setError('데이터를 가져오는 데 실패했습니다.');
      }
    };

    fetchBooks();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  // const cardData = [
  //   { id: 1, img: <SvgImg71 />, name: '이중 하나는 거짓말' },
  //   { id: 2, img: <SvgImg72 />, name: '불안 세대' },
  //   { id: 3, img: <SvgImg73 />, name: '니체의 자존감 수업' },
  //   { id: 4, img: <SvgImg74 />, name: '비 그친 오후의 헌책방' },
  //   { id: 5, img: <SvgImg75 />, name: '영원한 천국' },
  // ];

  return (
    <S.Section7Wrapper>
      <S.BtnLayout>
        <ArrowLeftButton />
        <S.Section7Layout>
          <S.Section7TitleLayout>
            <S.Section7TitleContainer>
              <S.Title>멤버십 선정 이달의 책 TOP 10</S.Title>
              <IcRightarrowMediumTextgray40 style={{ height: '1.8rem' }} />
            </S.Section7TitleContainer>
            <S.Section7LabelContainer>
              <SvgIcPick />
              <S.LabelName>독자 투표</S.LabelName>
            </S.Section7LabelContainer>
          </S.Section7TitleLayout>
          <S.Section7BookLayout>
            {bookItems.map((book, id) => (
              <S.CardContainer key={id}>
                <S.CardImg $src={book.imageUrl} />
                <S.CardName>{book.name}</S.CardName>
              </S.CardContainer>
            ))}
            <S.CardLabelAll>
              <S.CardLabel>1</S.CardLabel>
              <S.CardLabel>2</S.CardLabel>
              <S.CardLabel>3</S.CardLabel>
              <S.CardLabel>4</S.CardLabel>
              <S.CardLabel>5</S.CardLabel>
            </S.CardLabelAll>
          </S.Section7BookLayout>
        </S.Section7Layout>
        <ArrowRightButton />
      </S.BtnLayout>
      <SvgHomeSection2Indicator />
    </S.Section7Wrapper>
  );
};

export default HomeSection7;
