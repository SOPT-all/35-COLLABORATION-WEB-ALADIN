import { useState, useEffect } from 'react';
import SvgIcCheckbox from '@assets/svgs/IcCheckbox';
import * as S from './Checkbox.styled';

interface CheckboxBtnProps {
  checked: boolean;
  onChange: () => void;
}

const CheckboxBtn = ({ checked, onChange }: CheckboxBtnProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    setIsChecked((prev) => !prev);
    onChange();
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <S.StyledBtn isChecked={isChecked} onClick={handleClick}>
      <SvgIcCheckbox />
    </S.StyledBtn>
  );
};

export default CheckboxBtn;
