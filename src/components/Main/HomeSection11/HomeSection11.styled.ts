import styled from '@emotion/styled';

export const Section11Main = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 11.9rem;
`;

export const Section11 = styled.div`
  display: flex;
  gap: 4.5rem;
`;

export const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

export const Layer1 = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Title1 = styled.div`
  ${({ theme }) => theme.fonts.head_b_24};
  color: ${({ theme }) => theme.colors.text_gray40};
`;

export const Container1 = styled.div`
  display: flex;
  gap: 0.9rem;
`;
export const Map1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  width: 100%;
`;
export const CardHeader = styled.div`
  width: 20rem;
  height: 11.2rem;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;
export const CardName = styled.div`
  overflow: hidden;
  max-width: 20rem;
  word-wrap: break-word;

  ${({ theme }) => theme.fonts.body2_b_14};
  color: ${({ theme }) => theme.colors.text_gray40};
  white-space: normal;
`;
export const CardTag = styled.div`
  ${({ theme }) => theme.fonts.body7_sb_12};
  color: ${({ theme }) => theme.colors.purple50};
`;
export const CardView = styled.div`
  ${({ theme }) => theme.fonts.body7_sb_12};
  color: ${({ theme }) => theme.colors.text_gray30};
`;

export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Layer2 = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
export const Title2 = styled.div`
  ${({ theme }) => theme.fonts.head_b_24};
  color: ${({ theme }) => theme.colors.text_gray40};
`;
export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
export const Map2 = styled.div`
  display: flex;
  gap: 1.7rem;
  align-items: center;
`;
export const TalkFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 2rem 0;
`;
export const TalkTitle = styled.div`
  ${({ theme }) => theme.fonts.body2_b_14};
  color: ${({ theme }) => theme.colors.text_gray30};
`;
export const TalkDate = styled.div`
  ${({ theme }) => theme.fonts.body7_r_12};
  color: ${({ theme }) => theme.colors.text_gray10};
`;
