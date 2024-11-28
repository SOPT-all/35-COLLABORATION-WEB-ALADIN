import * as S from './OrderBtn.styled';

interface OrderBtnProps {
  totalItems: number;
  totalPrice: number;
}

const OrderBtn = ({ totalItems, totalPrice }: OrderBtnProps) => {
  return (
    <S.StyledBtn disabled={totalItems === 0}>
      {`${totalPrice.toLocaleString()}원 (${totalItems}) 주문하기`}
    </S.StyledBtn>
  );
};

export default OrderBtn;
