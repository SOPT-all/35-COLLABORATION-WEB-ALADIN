import CartSmallBtn from '../CartSmallBtn/CartSmallBtn';
import * as S from './ShippingInfo.styled';

interface ShippingInfoProps {
  totalPrice: number;
}

const ShippingInfo = ({ totalPrice }: ShippingInfoProps) => {
  return (
    <S.ShippingInfoBox>
      {totalPrice >= 15000 ? (
        <S.ShippingComment>무료 배송 금액을 충족하셨어요!</S.ShippingComment>
      ) : (
        <S.ShippingComment>
          무료 배송까지 {15000 - totalPrice}원!
        </S.ShippingComment>
      )}
      <S.DeleveryBar />
      <S.FreeShippingNotice>
        1만 5천원 이상 구매시 무료배송
      </S.FreeShippingNotice>
      <CartSmallBtn text="더 담으러 가기" />
    </S.ShippingInfoBox>
  );
};

export default ShippingInfo;
