import styled from '@emotion/styled';

export const Section8 = styled.div``;

export const Section8Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.head_b_24};
  color: ${({ theme }) => theme.colors.text_gray40};
`;

export const Section8Layout = styled.div`
  display: flex;
`;

export const Card = styled.div``;

export const CardLayout = styled.div`
  display: flex;
`;

export const CardImg = styled.div`
  ${({ theme }) => theme.fonts.title3_b_15};
  color: ${({ theme }) => theme.colors.text_gray40};
`;

export const CardName = styled.div`
  ${({ theme }) => theme.fonts.body7_r_12};
  color: ${({ theme }) => theme.colors.text_gray10};
`;

export const CardInfo = styled.div``;

// display: flex;
//   width: 19.5rem;
//   padding: 2rem 1.3rem 2.7rem;
//   border-radius: 0 0 0.5rem 0.5rem;
//   flex-direction: column;

//   background-color: ${({ theme }) => theme.colors.bg_gray10};
// `;
