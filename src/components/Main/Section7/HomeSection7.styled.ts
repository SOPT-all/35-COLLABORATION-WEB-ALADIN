import styled from '@emotion/styled';

export const Section7 = styled.div`
  position: relative;
  padding: 4.9rem 15.4rem;

  background-color: ${({ theme }) => theme.colors.purple10};
`;

export const Section7Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.7rem;
`;

export const Section7Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Section7TitleLayout = styled.div`
  display: flex;
  gap: 1.3rem;
  align-items: center;
`;

export const Section7TitleContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

export const Title = styled.p`
  display: flex;

  ${({ theme }) => theme.fonts.head_b_24};
  color: ${({ theme }) => theme.colors.text_gray40};
`;

export const TitleButton = styled.button`
  color: ${({ theme }) => theme.colors.text_gray40};
  font-size: 2rem;
`;

export const LabelName = styled.p`
  ${({ theme }) => theme.fonts.caption4_sb_16};
  color: ${({ theme }) => theme.colors.purple50};
`;

export const Section7LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 2rem 2rem 2rem 0;
  padding: 0.6rem 1.2rem;

  background: ${({ theme }) => theme.colors.purple20};
`;

export const Section7BookLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 2.25rem;
`;

export const Section7ButtonLeft = styled.button`
  display: flex;
  position: absolute;
  top: 24rem;
  left: 10rem;
  width: 4.2rem;
  height: 4.2rem;
  padding: 1.1rem;

  background-color: ${({ theme }) => theme.colors.bg_gray10};

  color: ${({ theme }) => theme.colors.stroke_gray60};
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.stroke_gray20};
  }
`;

export const Section7ButtonRight = styled.button`
  display: flex;
  position: absolute;
  top: 24rem;
  right: calc(50% - 515px);
  width: 4.2rem;
  height: 4.2rem;
  padding: 1.1rem;

  background-color: ${({ theme }) => theme.colors.bg_gray10};

  color: ${({ theme }) => theme.colors.stroke_gray60};
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.stroke_gray20};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-right: 4.2rem;
  padding: 2rem 0;
`;

export const CardLabel = styled.div`
  display: flex;
  position: absolute;
  right: 2.2rem;
  bottom: 4rem;
  width: 4.4rem;
  height: 4.4rem;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fonts.head_b_24};

  background-color: ${({ theme }) => theme.colors.purple50};

  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
`;

export const CardName = styled.div`
  ${({ theme }) => theme.fonts.title2_b_17};
  color: ${({ theme }) => theme.colors.text_gray40};
`;
