import CheckboxBtn from '../CheckboxBtn/CheckboxBtn';
import * as S from './CartListHeader.styled';

interface CartListHeaderProps {
  totalQty: number;
  aladinDeliveryQty: number;
  onSelectAll: () => void;
  selectedItems: Set<number>;
}

const CartListHeader = ({
  totalQty,
  aladinDeliveryQty,
  onSelectAll,
  selectedItems,
}: CartListHeaderProps) => {
  const isAllSelected = selectedItems.size === totalQty;

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
    </S.CartListHeaderWrapper>
  );
};

export default CartListHeader;
