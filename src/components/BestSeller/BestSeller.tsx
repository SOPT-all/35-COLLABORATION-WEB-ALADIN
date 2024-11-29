import * as S from './BestSeller.styled';
import {
  IcRightarrowMediumTextgray40,
  Img31,
  Img32,
  ImgAd2,
  NumberIndicator,
  New,
  PropertyDown,
} from '@assets/svgs';
import { list } from '../../constants/bestSeller';

const BestSeller = () => {
  const top6List = list.filter((item) => item.id >= 3 && item.id <= 6);
  const top10List = list.filter((item) => item.id >= 7 && item.id <= 10);

  return (
    <S.BestSellerWrapper>
      <S.BestSellerTitle>
        <p>어제 베스트 셀러 TOP 10</p>
        <IcRightarrowMediumTextgray40 style={{ height: '1.8rem' }} />
      </S.BestSellerTitle>
      <S.BestSellerContainer>
        <S.Top2Box>
          <section>
            <Img31 />
            <div>
              1 <p>트럼프 2.0 시대</p>
            </div>
            <span>
              <New />
            </span>
          </section>
          <section>
            <Img32 />
            <div>
              2 <p>소년이 온다</p>
            </div>
            <span>
              <PropertyDown />1
            </span>
          </section>
        </S.Top2Box>

        <S.TopBox>
          {top6List.map((book) => (
            <section key={book.id}>
              <p style={{ width: '2rem' }}>{book.id}</p>
              <p style={{ width: '18.7rem' }}>{book.title}</p>
              <S.CountDiv>
                <book.image />
                <p>{book.id !== 3 && <span>1</span>} </p>
              </S.CountDiv>
            </section>
          ))}
        </S.TopBox>

        <S.TopBox>
          {top10List.map((book) => (
            <section key={book.id}>
              <p style={{ width: '2rem' }}>{book.id}</p>
              <p style={{ width: '18.7rem' }}>{book.title}</p>
              <S.CountDiv>
                <book.image />
                <p>{book.id !== 3 && <span>1</span>}</p>
              </S.CountDiv>
            </section>
          ))}
        </S.TopBox>

        <S.EBookBox>
          <ImgAd2 />
          <S.InfrontAd2>
            <NumberIndicator />
          </S.InfrontAd2>
        </S.EBookBox>
      </S.BestSellerContainer>
    </S.BestSellerWrapper>
  );
};

export default BestSeller;
