import styled from '@emotion/styled';
import theme from '@styles/theme';

export const CartSection = styled.section`
  display: flex;
  justify-content: center;
`;

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6.6rem 0;
  justify-content: center;

  & h1 {
    margin-bottom: 1.5rem;

    color: ${theme.colors.text_gray40};
    ${theme.fonts.head_b_24};
  }
`;
export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const DeliveryBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CartContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-top: 1.5rem;
`;

export const PriceBox = styled.span`
  padding: 1.7rem 0;
  border: 1px solid ${theme.colors.stroke_gray10};
  border-radius: 10px;

  background-color: ${theme.colors.bg_gray10};

  color: ${theme.colors.text_gray20};
  ${theme.fonts.body2_sb_14};
  text-align: center;
`;
