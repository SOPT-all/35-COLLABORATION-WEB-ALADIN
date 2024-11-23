import styled from '@emotion/styled';
import theme from '@styles/theme';

export const CartItemHeaderWrapper = styled.div`
  gap: 1.7rem;
  display: flex;
  padding: 1rem 1rem 1rem 1.6rem;
  border-bottom: 1px solid ${theme.colors.purple20};
`;

export const Title = styled.span`
  ${theme.fonts.title3_b_15};
  color: ${theme.colors.text_gray40};
`;
