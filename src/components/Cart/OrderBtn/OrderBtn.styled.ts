import styled from '@emotion/styled';
import theme from '@styles/theme';

export const StyledBtn = styled.button`
  width: 25rem;
  height: 5.6rem;

  width: 25rem;
  height: 5.6rem;

  background-color: ${theme.colors.purple50};
  border-radius: 10px;

  color: white;
  ${theme.fonts.body2_b_14};
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;

  transform-origin: center;

  &:active {
    transform: scale(0.96);

    background-color: ${theme.colors.purple60};

    color: ${theme.colors.purple40};
  }
`;
