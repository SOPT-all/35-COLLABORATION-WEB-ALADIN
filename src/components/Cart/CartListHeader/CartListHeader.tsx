import CartSmallBtn from '../CartSmallBtn/CartSmallBtn';
import CheckboxBtn from '../CheckboxBtn/CheckboxBtn';
import * as S from './CartListHeader.styled';

const CartListHeader = () => {
  return (
    <S.CartListHeaderWrapper>
      <S.CartListHeaderContainer>
        <S.SelectAllBox>
          <CheckboxBtn />
          <span>전체선택 2/2</span>
        </S.SelectAllBox>
        <S.DeliveryLabelBox>
          <span>알라딘 배송 2</span>
          <span>판매자 배송 0</span>
        </S.DeliveryLabelBox>
      </S.CartListHeaderContainer>

      <CartSmallBtn text="선택 삭제" />
    </S.CartListHeaderWrapper>
  );
};

export default CartListHeader;
