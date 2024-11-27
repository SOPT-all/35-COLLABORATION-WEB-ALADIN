import styled from '@emotion/styled';

export const Section8 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  padding: 0 0 6.9rem;
`;

export const Section8Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const TitleCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.fonts.head_b_24};
  color: ${({ theme }) => theme.colors.text_gray40};
`;

export const Section8Layout = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Card = styled.div`
  display: flex;
  gap: 1.4rem;
`;

export const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const CardImg = styled.div`
  ${({ theme }) => theme.fonts.title3_b_15};
  color: ${({ theme }) => theme.colors.text_gray40};
`;

export const CardNameInfo = styled.div`
  padding: 2rem 1.3rem 2.7rem;
  border-radius: 0 0 0.5rem 0.5rem;

  background-color: ${({ theme }) => theme.colors.bg_gray10};
`;

export const CardName = styled.div`
  width: 16.9rem;
  height: 3.6rem;

  ${({ theme }) => theme.fonts.title3_b_15};
  color: ${({ theme }) => theme.colors.text_gray40};
`;

export const CardInfo = styled.div`
  padding: 1.4rem 0 0;

  ${({ theme }) => theme.fonts.body7_m_12};
  color: ${({ theme }) => theme.colors.text_gray10};
`;

export const IndicatorBox = styled.div`
  align-items: center;
`;
