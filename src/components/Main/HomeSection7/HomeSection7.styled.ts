import styled from '@emotion/styled';

export const Section7Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.7rem;
  padding: 4.9rem 15.4rem;

  background-color: ${({ theme }) => theme.colors.purple10};
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
  gap: 4.2rem;
  position: relative;
`;

export const BtnLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

export const CardContainer = styled.div`
  display: flex;
  padding: 2rem 0;
  flex-direction: column;
  gap: 2rem;
`;

export const CardImg = styled.div`
  width: 17.3rem;
  height: 26.4rem;
`;

export const CardLabelAll = styled.div`
  display: flex;
  gap: 17rem;
  position: absolute;
  bottom: 4.3rem;
  left: 15.3rem;
`;

export const CardLabel = styled.div`
  display: flex;
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
