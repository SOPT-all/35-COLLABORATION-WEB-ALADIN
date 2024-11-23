import * as S from './CartItemHeader.styled';
import CheckboxBtn from '../CheckboxBtn/CheckboxBtn';

const CartItemHeader = () => {
  return (
    <S.CartItemHeaderWrapper>
      <CheckboxBtn />
      <S.Title>알라딘배송</S.Title>
    </S.CartItemHeaderWrapper>
  );
};

export default CartItemHeader;
