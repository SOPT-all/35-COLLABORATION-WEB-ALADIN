import * as S from './CartItemHeader.styled';
import CheckboxBtn from '../CheckboxBtn/CheckboxBtn';

interface CartItemHeaderProps {
  checked: boolean;
  onChange: () => void;
}

const CartItemHeader = ({ checked, onChange }: CartItemHeaderProps) => {
  return (
    <S.CartItemHeaderWrapper>
      <CheckboxBtn checked={checked} onChange={onChange} />
      <S.Title>알라딘배송</S.Title>
    </S.CartItemHeaderWrapper>
  );
};

export default CartItemHeader;
