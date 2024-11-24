import styled from "@emotion/styled";
import theme from "@styles/theme";

interface StyledBtnProps {
  isChecked: boolean;
}

export const StyledBtn = styled.button<StyledBtnProps>`
  border-radius: 3px;
  border: ${({ isChecked }) =>
    isChecked ? "none" : `1px solid ${theme.colors.stroke_gray50}`};
  background-color: ${({ isChecked }) =>
    isChecked ? theme.colors.purple50 : "none"};
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
`;
