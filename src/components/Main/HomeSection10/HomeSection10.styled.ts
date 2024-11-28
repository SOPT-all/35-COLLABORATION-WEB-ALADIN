import styled from '@emotion/styled';

export const HomeSection10 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 9.9rem;
  gap: 1.3rem;
`;

export const Section10 = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Section10Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Section10Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.fonts.head_b_24};
  color: ${({ theme }) => theme.colors.text_gray40};
`;

export const Section10Layer = styled.div`
  display: flex;
`;

export const Section10Container = styled.div`
  display: flex;
  gap: 4.125rem;
  position: relative;
`;

export const Section10Map = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
`;

export const IcAudio = styled.div`
  display: flex;
  position: absolute;
  bottom: 4.3rem;
  left: 15.3rem;
  gap: 17.025rem;
`;

export const CardName = styled.p`
  ${({ theme }) => theme.fonts.title2_b_17};
  color: ${({ theme }) => theme.colors.text_gray40};
`;
