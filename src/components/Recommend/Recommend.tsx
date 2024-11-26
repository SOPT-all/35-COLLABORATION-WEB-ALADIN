import * as S from './Recommend.styled';
import { IcRightarrowMediumTextgray40 } from '@assets/svgs';
import { RecommendbookList } from '../../constants/recommend';

const Recommend = () => {
  return (
    <S.RecommendWrapper>
      <S.RecommendContainer>
        <S.RecommendTitle>
          추천마법사의 선택
          <IcRightarrowMediumTextgray40 />
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
    </S.RecommendWrapper>
  );
};

export default Recommend;
