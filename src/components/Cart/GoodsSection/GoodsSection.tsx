import {
  IcLeftarrowMediumGray50,
  IcRightarrowMediumGray50,
  ImgShopx2,
} from '@assets/svgs';
import * as S from './Goods.styled';
import { GOODS_INFO, X2_GOODS_INFO } from '@constants/GoodsInfoConstants';

const GoodsSection = () => {
  return (
    <S.GoodsInfoWrapper>
      <S.GoodsInfoContainer>
        <S.TitleBox>
          <S.Title>
            <h1>
              <span>알라딘</span> <span className="purple">굿즈</span>
            </h1>
          </S.Title>
          <S.ButtonBox>
            <S.PrevBtn>
              <IcLeftarrowMediumGray50 />
            </S.PrevBtn>
            <S.NextBtn>
              <IcRightarrowMediumGray50 />
            </S.NextBtn>
          </S.ButtonBox>
        </S.TitleBox>
        <S.GoodsList>
          {GOODS_INFO.map((goods) => (
            <S.GoodsInfo key={goods.id}>
              <goods.image className="img-goods" />
              <p>{goods.name}</p>
            </S.GoodsInfo>
          ))}
        </S.GoodsList>
      </S.GoodsInfoContainer>
      <S.GoodsInfoContainer>
        <S.TitleBox>
          <S.Title>
            <h1>
              <span>알라딘</span> <span className="purple">굿즈</span>
            </h1>
          </S.Title>
          <S.ButtonBox>
            <S.PrevBtn>
              <IcLeftarrowMediumGray50 />
            </S.PrevBtn>
            <S.NextBtn>
              <IcRightarrowMediumGray50 />
            </S.NextBtn>
          </S.ButtonBox>
        </S.TitleBox>
        <S.GoodsList>
          {X2_GOODS_INFO.map((goods) => (
            <S.GoodsInfo key={goods.id}>
              <S.Img>
                <ImgShopx2 className="shop-icon" />
                <goods.image className="img-goods" />
              </S.Img>
              <p>{goods.name}</p>
            </S.GoodsInfo>
          ))}
        </S.GoodsList>
      </S.GoodsInfoContainer>
    </S.GoodsInfoWrapper>
  );
};

export default GoodsSection;
