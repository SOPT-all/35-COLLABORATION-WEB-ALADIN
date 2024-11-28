import theme from '@styles/theme';
import * as S from './PriceInfo.styled';

interface PriceInfoProps {
  productPrice: number;
  discountPrice: number;
}

const PriceInfo = ({ productPrice, discountPrice }: PriceInfoProps) => {
  const shippingFee = productPrice - discountPrice < 15000 ? 3000 : 0;
  const totalPrice = productPrice - discountPrice + shippingFee;

  return (
    <S.PriceInfoWrapper>
      <S.PriceInfoContainer>
        <S.TextBox gap="7.9rem">
          <S.Title>총 상품가격</S.Title>
          <S.Content>{productPrice.toLocaleString()}원</S.Content>
        </S.TextBox>
        <S.TextBox gap="7.2rem">
          <S.Title>상품할인금액</S.Title>
          <S.Content>{discountPrice.toLocaleString()}원</S.Content>
        </S.TextBox>
        <S.TextBox gap="10.2rem">
          <S.Title>배송비</S.Title>
          <S.Content>{shippingFee.toLocaleString()}원</S.Content>
        </S.TextBox>
      </S.PriceInfoContainer>
      <S.TotalPriceBox>
        <span>총 결제 예정 금액</span>
        <span>
          <span style={{ color: theme.colors.purple50 }}>
            {totalPrice.toLocaleString()}
          </span>
          원
        </span>
      </S.TotalPriceBox>
    </S.PriceInfoWrapper>
  );
};

export default PriceInfo;
