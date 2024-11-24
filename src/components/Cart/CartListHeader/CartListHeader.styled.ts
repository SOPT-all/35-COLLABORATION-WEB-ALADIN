import styled from '@emotion/styled';
import theme from '@styles/theme';

export const CartListHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.3rem;
  border: 1px solid ${theme.colors.stroke_gray10};
  border-radius: 10px;

  background-color: ${theme.colors.bg_gray10};
  ${theme.fonts.body7_b_12};
  align-items: center;
`;

export const CartListHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const DeliveryLabelBox = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  & span {
    padding: 0.5rem 1rem;
    border-radius: 20px;
  }

  /* 알라딘 배송 */
  & span:nth-child(1) {
    background-color: ${theme.colors.purple40};

    color: ${theme.colors.purple10};
  }

  /* 판매자 배송 */
  & span:nth-child(2) {
    background-color: ${theme.colors.stroke_gray30};

    color: ${theme.colors.text_gray10};
  }
`;

export const SelectAllBox = styled.div`
  display: flex;
  gap: 1.7rem;
`;
