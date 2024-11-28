import * as S from './Nobel.styled';
import {
  IcRightarrowMediumTextgray40,
  HomeSection2Indicator,
} from '@assets/svgs';
import { NobelBookList } from '../../constants/nobel';
import ArrowBtn from '@components/common/ArrowBtn/ArrowBtn';

const Nobel = () => {
  return (
    <S.NobelWrapper>
      <S.NobelMiddleWrapper>
        <ArrowBtn direction="left" />
        <S.NobelContainer>
          <S.NobelTitle>
            한강 2024 노벨문학상 수상
            <IcRightarrowMediumTextgray40
              style={{ height: '1.8rem', marginLeft: '0.5rem' }}
            />
          </S.NobelTitle>

          <S.BookList>
            {NobelBookList.map((book) => (
              <S.BookItem key={book.id}>
                <book.image />
                <S.BookTitle>{book.title}</S.BookTitle>
              </S.BookItem>
            ))}
          </S.BookList>
        </S.NobelContainer>
        <ArrowBtn direction="right" />
      </S.NobelMiddleWrapper>
      <HomeSection2Indicator />
    </S.NobelWrapper>
  );
};

export default Nobel;
