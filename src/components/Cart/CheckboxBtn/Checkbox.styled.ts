import styled from '@emotion/styled';
import theme from '@styles/theme';

interface StyledBtnProps {
  isChecked: boolean;
}

export const StyledBtn = styled.button<StyledBtnProps>`
  display: flex;
  align-items: center;
  border-radius: 3px;
  width: 1.8rem;
  height: 1.8rem;
  border: ${({ isChecked }) =>
    isChecked ? 'none' : `1px solid ${theme.colors.stroke_gray50}`};
  justify-content: center;

  background-color: ${({ isChecked }) =>
    isChecked ? theme.colors.purple50 : 'none'};
  transition: all 0.2s ease;
`;
