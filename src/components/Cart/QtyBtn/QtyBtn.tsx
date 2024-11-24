import { IcAdd, IcRemove } from '@assets/svgs';
import * as S from './QtyBtn.styled';

const QtyBtn = () => {
  return (
    <S.QtyBtnWrapper>
      <S.QtyBtn>
        <IcRemove />{' '}
      </S.QtyBtn>
      <S.Quantity>1</S.Quantity>
      <S.QtyBtn>
        <IcAdd />
      </S.QtyBtn>
    </S.QtyBtnWrapper>
  );
};

export default QtyBtn;
