import React from 'react';
import * as S from './HomeSection11.styled';
import {
  IcRightarrowMediumTextgray40,
  Img111,
  Img112,
  Img113,
  Img114,
  Img115,
} from '@assets/svgs';

const HomeSection11 = () => {
  const cardData = [
    {
      id: 1,
      img: <Img113 />,
      name: '너무나 정치적인 시골살이 양미X한디디X이라영',
      tag: '#라이브북토크',
      view: '라이브북토크 조회수 938',
    },
    {
      id: 2,
      img: <Img114 />,
      name: '10월, 가을에 읽는 개그만화 한국만화가협회X우동이즘 작가',
      tag: '#라이브북토크',
      view: '라이브북토크 조회수 1,454',
    },
    {
      id: 3,
      img: <Img115 />,
      name: '언어의 요가 요가 디렉터 김서진X버터북스 이승희',
      tag: '#라이브북토크',
      view: '라이브북토크 조회수 859',
    },
  ];

  const talkData = [
    {
      id: 4,
      img: <Img111 />,
      title: '<미야자키 히야오와 일상의 애니미즘>오선민 작가 북토크',
      date: '12월 11일(수) 오후 7시',
    },
    {
      id: 5,
      img: <Img112 />,
      title: '<미야자키 히야오와 일상의 애니미즘>오선민 작가 북토크',
      date: '12월 11일(수) 오후 7시',
    },
  ];

  return (
    <S.Section11Main>
      <S.Section11>
        <S.Wrapper1>
          <S.Layer1>
            <S.Title1>알라디너 TV</S.Title1>
            <IcRightarrowMediumTextgray40 style={{ height: '1.8rem' }} />
          </S.Layer1>
          <S.Container1>
            {cardData.map((card) => (
              <S.Map1 key={card.id}>
                <S.CardHeader>{card.img}</S.CardHeader>
                <S.CardFooter>
                  <S.CardName>{card.name}</S.CardName>
                  <S.CardTag>{card.tag}</S.CardTag>
                  <S.CardView>{card.view}</S.CardView>
                </S.CardFooter>
              </S.Map1>
            ))}
          </S.Container1>
        </S.Wrapper1>
        <S.Wrapper2>
          <S.Layer2>
            <S.Title2>작가와의 만남</S.Title2>
            <IcRightarrowMediumTextgray40 style={{ height: '2.3rem' }} />
          </S.Layer2>
          <S.Container2>
            {talkData.map((talk) => (
              <S.Map2 key={talk.id}>
                {talk.img}
                <S.TalkFooter>
                  <S.TalkTitle>{talk.title}</S.TalkTitle>
                  <S.TalkDate>{talk.date}</S.TalkDate>
                </S.TalkFooter>
              </S.Map2>
            ))}
          </S.Container2>
        </S.Wrapper2>
      </S.Section11>
    </S.Section11Main>
  );
};

export default HomeSection11;
