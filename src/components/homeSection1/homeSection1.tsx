import * as S from './homeSection1.styled';
import {
  IcRightarrowSmall,
  IcArrowSaleBefore,
  Playno,
  Playyes,
} from '@assets/svgs';
import { useState, useEffect } from 'react';
import { books } from '../../constants/books';

const HomeSection1 = () => {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval: number | undefined;

    if (isPlaying) {
      interval = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 1;
        });
      }, 100);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying]);

  const handleProgress = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <S.HomeSectionWrapper>
      <S.HeadLayout>
        <S.TitleMent>바로 지금, 사람들이 많이 찾는 베스트 중고책</S.TitleMent>
        <S.Btn>
          중고 베스트 전체
          <IcRightarrowSmall />
        </S.Btn>
      </S.HeadLayout>
      <S.ImgContainer>
        {books.map((book) => (
          <S.ImgBox key={book.id}>
            <S.SalePrice>30%</S.SalePrice>
            <book.image />
            <S.ImgTitle>{book.title}</S.ImgTitle>
            <S.ImgPrice>
              <S.RealPrice>
                {book.price}
                <S.ArrowIcon>
                  <IcArrowSaleBefore />
                </S.ArrowIcon>
              </S.RealPrice>
              <p>최저</p>
              {book.lowestPrice}
            </S.ImgPrice>
            <S.ImgWriter>{book.author}</S.ImgWriter>
          </S.ImgBox>
        ))}
      </S.ImgContainer>
      <S.ProgressLayout>
        <S.ProgressMent>
          <S.ProgressBar style={{ width: `${progress}%` }} />
          <div style={{ display: 'flex' }}>
            <S.ProgressBox>
              <S.ProgressFocus>중고 종합 베스트</S.ProgressFocus>
              <p>중고 이번주 베스트</p>
              <p>중고 어제 베스트</p>
              <p>품절/절판 베스트</p>
              <p>최종 땡처리</p>
              <p>화제의 책</p>
            </S.ProgressBox>
            <S.PlayBtn onClick={handleProgress}>
              {isPlaying ? <Playno /> : <Playyes />}
            </S.PlayBtn>
          </div>
        </S.ProgressMent>
      </S.ProgressLayout>
    </S.HomeSectionWrapper>
  );
};

export default HomeSection1;
