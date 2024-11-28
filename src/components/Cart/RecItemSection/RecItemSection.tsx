import { useState } from 'react';
import {
  IcCartGray,
  IcCartWhite,
  IcHeartGray,
  IcHeartWhite,
} from '@assets/svgs';
import * as S from './RecItemSection.styled';
import { REC_BOOKS } from '@constants/RecBooksConstants';
import { Book } from '@constants/RecBooksConstants';
import ArrowLeftButton from '@components/common/Button/ArrowLeftButton/ArrowLeftButton';
import ArrowRightButton from '@components/common/Button/ArrowRightButton/ArrowRightButton';

const RecItemSection = () => {
  const [isHeartHovered, setHeartHovered] = useState<number | null>(null);
  const [isCartHovered, setCartHovered] = useState<number | null>(null);

  return (
    <S.RecItemSectionWrapper>
      <ArrowLeftButton />
      <S.RecItemContainer>
        <h1>지금 장바구니에 담은 상품과 함께 구매한 상품입니다.</h1>
        <S.RecItemBox>
          {REC_BOOKS.map((book: Book) => (
            <S.RecItemCard key={book.id}>
              <S.RecItem>
                <book.image className="img-cartbook" />
                <div>
                  <S.HoverBtn
                    onMouseEnter={() => setHeartHovered(book.id)}
                    onMouseLeave={() => setHeartHovered(null)}
                  >
                    {isHeartHovered === book.id ? (
                      <IcHeartWhite />
                    ) : (
                      <IcHeartGray />
                    )}
                  </S.HoverBtn>
                  <S.HoverBtn
                    onMouseEnter={() => setCartHovered(book.id)}
                    onMouseLeave={() => setCartHovered(null)}
                  >
                    {isCartHovered === book.id ? (
                      <IcCartWhite />
                    ) : (
                      <IcCartGray />
                    )}
                  </S.HoverBtn>
                </div>
              </S.RecItem>
              <p>{book.title}</p>
            </S.RecItemCard>
          ))}
        </S.RecItemBox>
      </S.RecItemContainer>
      <ArrowRightButton />
    </S.RecItemSectionWrapper>
  );
};

export default RecItemSection;
