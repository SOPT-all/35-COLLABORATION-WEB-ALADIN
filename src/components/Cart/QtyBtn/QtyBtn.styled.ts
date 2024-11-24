import styled from '@emotion/styled';
import theme from '@styles/theme';

export const QtyBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.stroke_gray50};
  gap: 0.5rem;
  border-radius: 5px;
`;

export const QtyBtn = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.2rem;
  border: none;
  cursor: pointer;
`;

export const Quantity = styled.span`
  color: ${theme.colors.text_gray40};
`;
