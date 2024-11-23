import { useState } from "react";
import SvgIcCheckbox from "@assets/svgs/IcCheckbox";
import * as S from "./Checkbox.styled";

const CheckboxBtn = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <S.StyledBtn isChecked={isChecked} onClick={handleClick}>
      <SvgIcCheckbox />
    </S.StyledBtn>
  );
};

export default CheckboxBtn;
