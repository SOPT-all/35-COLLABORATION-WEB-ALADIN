import styled from '@emotion/styled';
import theme from '@styles/theme';

export const CartItemContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.stroke_gray10};
  display: flex;
`;

export const ToggleBox = styled.div`
  display: flex;
  width: 33rem;
  padding: 1rem 1rem 1rem 1.6rem;

  color: ${theme.colors.text_gray40};
  gap: 1.5rem;

  border-right: 1px solid ${theme.colors.stroke_gray10};
`;

export const BtnBox = styled.div`
  display: flex;

  ${theme.fonts.body7_r_12};
  border-right: 1px solid ${theme.colors.stroke_gray10};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 13.4rem;
  height: 13.2rem;
  padding: 3rem;
  gap: 1.7rem;

  color: ${theme.colors.text_gray40};
`;

export const ContentBox = styled.div`
  ${theme.fonts.body7_r_12};
  display: flex;
  width: 20rem;
  height: 13.2rem;
  padding: 1rem;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.text_gray30};
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const BookTitle = styled.span`
  ${theme.fonts.body5_b_13};
`;

export const BookPriceInfo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
`;

export const DiscountRate = styled.span`
  color: ${theme.colors.purple50};
  ${theme.fonts.body7_b_12};
`;

export const Price = styled.span`
  ${theme.fonts.body10_r_11};
  text-decoration: line-through;
`;

export const DiscountedPrice = styled.span`
  ${theme.fonts.body7_sb_12};
`;

export const Point = styled.span`
  ${theme.fonts.body10_r_11};
  color: ${theme.colors.text_gray30};
`;
