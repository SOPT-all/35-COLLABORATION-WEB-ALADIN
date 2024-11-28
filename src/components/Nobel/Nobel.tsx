import * as S from './Nobel.styled';
import {
  IcRightarrowMediumTextgray40,
  HomeSection2Indicator,
} from '@assets/svgs';
import { NobelBookList } from '../../constants/nobel';
import ArrowLeftButton from '@components/common/Button/ArrowLeftButton/ArrowLeftButton';
import ArrowRightButton from '@components/common/Button/ArrowRightButton/ArrowRightButton';

const Nobel = () => {
  return (
    <S.NobelWrapper>
      <S.NobelMiddleWrapper>
        <ArrowLeftButton />
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
        <ArrowRightButton />
      </S.NobelMiddleWrapper>
      <HomeSection2Indicator />
    </S.NobelWrapper>
  );
};

export default Nobel;
