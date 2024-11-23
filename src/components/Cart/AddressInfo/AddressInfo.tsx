import { IcLocation } from '@assets/svgs';
import * as S from './AddressInfo.styled';
import CartSmallBtn from '../CartSmallBtn/CartSmallBtn';

const AddressInfo = () => {
  return (
    <S.AddressInfoContainer>
      <S.DeliveryLabel>
        <IcLocation />
        <span>배송지</span>
      </S.DeliveryLabel>
      <S.DeleveryType>알라딘 배송</S.DeleveryType>
      <S.AddressBox>
        <span>서울시 마포구 샬라샬라로 77 (솝트아파트) 102동 1504호</span>
        <CartSmallBtn text="변경" />
      </S.AddressBox>
    </S.AddressInfoContainer>
  );
};

export default AddressInfo;
