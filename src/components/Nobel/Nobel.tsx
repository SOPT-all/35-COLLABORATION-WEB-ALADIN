import * as S from './Nobel.styled';
import { IcRightarrowMediumTextgray40 } from '@assets/svgs';
import { NobelBookList } from '../../constants/nobel';

const Nobel = () => {
  return (
    <S.NobelWrapper>
      <S.NobelContainer>
        <S.NobelTitle>
          한강 2024 노벨문학상 수상
          <IcRightarrowMediumTextgray40 />
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
    </S.NobelWrapper>
  );
};

export default Nobel;
