import styled from '@emotion/styled';

export const ShippingInfoBox = styled.div`
  display: flex;
  padding: 1.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.stroke_gray10};

  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  border-radius: 10px;
  gap: 2rem;
`;

export const ShippingComment = styled.span`
  width: 18.3rem;

  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme }) => theme.fonts.title3_b_15};
`;

export const DeleveryBar = styled.div<{ percentage: number }>`
  position: relative;
  width: 47.8rem;
  height: 1.7rem;
  background: ${({ theme }) => theme.colors.bg_gray10};
  border-radius: 20px;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percentage }) => percentage || 0}%;
    height: 100%;
    content: '';
    background: ${({ theme }) => theme.colors.gradient_purple1};

    border-radius: 20px;
    transition: width 1s ease-in-out;
  }
`;

export const FreeShippingNotice = styled.span`
  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme }) => theme.fonts.caption3_r_9};
`;
