import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterWrapper = styled.footer`
  display: flex;
  width: 136.7rem;
  padding-bottom: 5rem;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;

  background: ${({ theme }) => theme.colors.white};
`;

export const FooterTop = styled.div`
  display: flex;
  width: 100%;
  height: 6.2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 2.6rem;

  border-top: 1px solid ${({ theme }) => theme.colors.stroke_gray10};
  border-bottom: 1px solid ${({ theme }) => theme.colors.stroke_gray10};
`;

export const FooterTopContent = styled.div<{ $isBold: boolean }>`
  display: flex;
  height: 1.8rem;

  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme, $isBold }) =>
    $isBold ? theme.fonts.body5_b_13 : theme.fonts.body5_r_13};

  align-items: center;
`;

export const FooterBottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.3rem;
  align-self: stretch;

  width: 100%;
  height: 15.5rem;
`;

export const LeftLayout = styled.div`
  display: flex;
  width: 71rem;
  padding-bottom: 3rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const LeftTitle = styled.div`
  align-self: stretch;

  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme }) => theme.fonts.title2_b_17};
`;

export const LeftContent = styled.div`
  display: flex;
  padding-bottom: 2rem;
  align-items: center;
  align-content: center;
  align-self: stretch;
  flex-wrap: wrap;
  max-width: 55rem;
`;

export const LeftSmallText = styled.span<{ $isHolder?: boolean }>`
  display: flex;
  padding: 0 1.8rem 0.5rem 0;
  justify-content: center;
  align-items: center;
  gap: ${({ $isHolder }) => ($isHolder ? '0.5rem' : '1rem')};

  ${({ theme }) => theme.fonts.body7_r_12};
`;

export const RightLayout = styled.div`
  display: flex;
  width: 32rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9rem;
`;

export const RightTitle = styled.div`
  align-self: stretch;

  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme }) => theme.fonts.title2_b_17};
`;

export const RightContent = styled.div`
  display: flex;
  padding: 0 0.8rem 0.5rem 0;
  align-items: center;
  gap: 1rem;
  align-self: stretch;

  color: ${({ theme }) => theme.colors.text_gray30};
  ${({ theme }) => theme.fonts.body7_r_12};
`;

export const RightBottomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  align-self: stretch;
`;

export const Btn = styled.button`
  display: flex;
  width: 15.7rem;
  height: 3.6rem;
  padding: 0.7rem 3.7rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors.stroke_gray30};
  background: ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme }) => theme.fonts.body5_r_13};
`;

export const LongBtn = styled.button`
  display: flex;
  height: 36px;
  padding: 7px 37px;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.stroke_gray30};
  background: ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme }) => theme.fonts.body5_r_13};
`;
