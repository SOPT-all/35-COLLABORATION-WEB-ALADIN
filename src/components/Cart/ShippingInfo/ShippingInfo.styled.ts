import styled from '@emotion/styled';
import theme from '@styles/theme';

export const ShippingInfoBox = styled.div`
  display: flex;
  padding: 1.5rem 1rem;
  border: 1px solid ${theme.colors.stroke_gray10};

  background-color: ${theme.colors.white};
  align-items: center;
  border-radius: 10px;
  gap: 2rem;
`;

export const ShippingComment = styled.span`
  width: 18.3rem;

  color: ${theme.colors.text_gray40};
  ${theme.fonts.title3_b_15};
`;

export const DeleveryBar = styled.div`
  width: 47.8rem;
  height: 1.7rem;
  background: ${theme.colors.gradient_purple1};
  border-radius: 20px;
`;

export const FreeShippingNotice = styled.span`
  color: ${theme.colors.text_gray40};
  ${theme.fonts.caption3_r_9};
`;
