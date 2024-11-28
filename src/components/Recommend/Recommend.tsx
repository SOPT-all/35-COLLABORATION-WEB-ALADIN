import * as S from './Recommend.styled';
import {
  IcRightarrowMediumTextgray40,
  HomeSection2Indicator,
} from '@assets/svgs';
import { RecommendbookList } from '../../constants/recommend';
import ArrowLeftButton from '@components/common/Button/ArrowLeftButton/ArrowLeftButton';
import ArrowRightButton from '@components/common/Button/ArrowRightButton/ArrowRightButton';

const Recommend = () => {
  return (
    <S.RecommendWrapper>
      <S.RecommendMiddleWrapper>
        <S.ArrowBtn>
          <ArrowLeftButton />
        </S.ArrowBtn>
        <S.RecommendContainer>
          <S.RecommendTitle>
            추천마법사의 선택
            <IcRightarrowMediumTextgray40
              style={{ height: '1.8rem', marginLeft: '0.8rem' }}
            />
          </S.RecommendTitle>
          <S.RecommendLogin>
            지금 로그인하시면 추천마법사가 선택한 책을 보여드려요{' '}
            <span>로그인하기</span>
          </S.RecommendLogin>

          <S.BookList>
            {RecommendbookList.map((book) => (
              <S.BookItem key={book.id}>
                <book.image />
                <S.BookTitle>{book.title}</S.BookTitle>
              </S.BookItem>
            ))}
          </S.BookList>
        </S.RecommendContainer>
        <S.ArrowBtn>
          <ArrowRightButton />
        </S.ArrowBtn>
      </S.RecommendMiddleWrapper>
      <HomeSection2Indicator />
    </S.RecommendWrapper>
  );
};

export default Recommend;
