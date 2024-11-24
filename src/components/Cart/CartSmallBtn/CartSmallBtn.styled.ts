import styled from '@emotion/styled';

export const StyledBtn = styled.button`
  color: ${({ theme }) => theme.colors.text_gray40};
  border: 1px solid ${({ theme }) => theme.colors.stroke_gray50};
  ${({ theme }) => theme.fonts.body10_sb_11};
  padding: 0.4rem 0.6rem;
  border-radius: 0.5rem;
`;
