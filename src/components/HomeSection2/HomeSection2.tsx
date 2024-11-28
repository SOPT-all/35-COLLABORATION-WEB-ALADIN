import { useState, useEffect } from 'react';
import { instance } from '@apis/apis';
import * as S from './HomeSection.styled';
import { HomeSection2Indicator } from '@assets/svgs';
import ArrowLeftButton from '@components/common/Button/ArrowLeftButton/ArrowLeftButton';
import ArrowRightButton from '@components/common/Button/ArrowRightButton/ArrowRightButton';

const HomeSection2 = () => {
  const [books, setBooks] = useState<any>({
    EDITOR: [],
    FOREIGNBOOKS: [],
    EBOOKS: [],
    ALADINGOODS: [],
  });

  const [currentType, setCurrentType] = useState<string>('EDITOR');

  const fetchBooks = async (type: string) => {
    try {
      const response = await instance.get('/api/v1/books/main', {
        params: { type },
      });

      setBooks((prevBooks: any) => ({
        ...prevBooks,
        [type]: response.data.data,
      }));
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    ['EDITOR', 'FOREIGNBOOKS', 'EBOOKS', 'ALADINGOODS'].forEach((type) => {
      fetchBooks(type);
    });
  }, []);

  const handleTypeClick = (type: string) => {
    setCurrentType(type);
  };

  return (
    <S.HomeSection2Wrapper>
      <S.ArrowBtnWrapper>
        <ArrowLeftButton />
      </S.ArrowBtnWrapper>
      <S.HomeSection2Container>
        <S.HomeSection2Title>
          <div
            onClick={() => handleTypeClick('EDITOR')}
            className={currentType === 'EDITOR' ? 'selected' : ''}
          >
            편집장의 선택
          </div>
          <div
            onClick={() => handleTypeClick('FOREIGNBOOKS')}
            className={currentType === 'FOREIGNBOOKS' ? 'selected' : ''}
          >
            외국도서
          </div>
          <div
            onClick={() => handleTypeClick('EBOOKS')}
            className={currentType === 'EBOOKS' ? 'selected' : ''}
          >
            eBook
          </div>
          <div
            onClick={() => handleTypeClick('ALADINGOODS')}
            className={currentType === 'ALADINGOODS' ? 'selected' : ''}
          >
            알라딘굿즈
          </div>
        </S.HomeSection2Title>

        <S.TypeBox>
          {books[currentType] && books[currentType].length > 0 ? (
            books[currentType].map((book: any) => (
              <S.BookBox
                key={book.id}
                className={currentType === 'ALADINGOODS' ? 'aladingoods' : ''}
              >
                <img src={book.imageUrl} alt={book.title} />
                <S.BookTitle
                  className={currentType === 'ALADINGOODS' ? 'aladingoods' : ''}
                >
                  {book.title}
                </S.BookTitle>
                <p>{book.description}</p>
              </S.BookBox>
            ))
          ) : (
            <p>로딩중 🧞‍♂️</p>
          )}
          <HomeSection2Indicator
            style={{ position: 'absolute', bottom: '1rem' }}
          />
        </S.TypeBox>
      </S.HomeSection2Container>
      <S.ArrowBtnWrapper>
        <ArrowRightButton />
      </S.ArrowBtnWrapper>
    </S.HomeSection2Wrapper>
  );
};

export default HomeSection2;
