import { IcLeftarrowGray50, IcRightarrowGray50 } from '@assets/svgs';
import * as S from './ArrowBtn.styled';

interface ArrowBtnProps {
  direction: 'left' | 'right';
}

const ArrowBtn = ({ direction }: ArrowBtnProps) => {
  return (
    <S.ArrowBtn>
      {direction === 'left' ? <IcLeftarrowGray50 /> : <IcRightarrowGray50 />}
    </S.ArrowBtn>
  );
};

export default ArrowBtn;
