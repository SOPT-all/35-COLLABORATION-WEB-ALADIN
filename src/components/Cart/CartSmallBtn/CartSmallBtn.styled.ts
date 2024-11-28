import styled from '@emotion/styled';

export const StyledBtn = styled.button`
  padding: 0.4rem 0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.stroke_gray50};

  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme }) => theme.fonts.body10_sb_11};
  border-radius: 0.5rem;

  white-space: nowrap;
`;
