import * as S from './OrderBtn.styled';

interface OrderBtnProps {
  totalItems: number;
  totalPrice: number;
}

const OrderBtn = ({ totalItems, totalPrice }: OrderBtnProps) => {
  const shippingFee = totalPrice < 15000 && totalPrice > 0 ? 3000 : 0;
  const finalPrice = totalPrice + shippingFee;

  return (
    <S.StyledBtn disabled={finalPrice === 0}>
      {`${finalPrice.toLocaleString()}원 (${totalItems}) 주문하기`}
    </S.StyledBtn>
  );
};

export default OrderBtn;
