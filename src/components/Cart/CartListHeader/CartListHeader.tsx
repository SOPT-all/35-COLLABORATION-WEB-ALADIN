import CheckboxBtn from '../CheckboxBtn/CheckboxBtn';
import * as S from './CartListHeader.styled';
import CartSmallBtn from '../CartSmallBtn/CartSmallBtn';

interface CartListHeaderProps {
  totalQty: number;
  aladinDeliveryQty: number;
  onSelectAll: () => void;
  selectedItems: Set<number>;
  isAllSelected: boolean;
}

const CartListHeader = ({
  totalQty,
  aladinDeliveryQty,
  onSelectAll,
  selectedItems,

  isAllSelected,
}: CartListHeaderProps) => {
  return (
    <S.CartListHeaderWrapper>
      <S.CartListHeaderContainer>
        <S.SelectAllBox>
          <CheckboxBtn checked={isAllSelected} onChange={onSelectAll} />
          <span>
            전체선택 {selectedItems.size}/{totalQty}
          </span>
        </S.SelectAllBox>
        <S.DeliveryLabelBox>
          <span>알라딘 배송 {aladinDeliveryQty}</span>
          <span>판매자 배송 0</span>
        </S.DeliveryLabelBox>
      </S.CartListHeaderContainer>
      <CartSmallBtn text="선택 삭제" />
    </S.CartListHeaderWrapper>
  );
};

export default CartListHeader;
