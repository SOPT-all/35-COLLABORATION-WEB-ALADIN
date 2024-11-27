import styled from '@emotion/styled';

const commonFlexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NobelWrapper = styled.div`
  ${commonFlexCenter}
  width: 100%;
  flex-direction: column;
  height: 46rem;
  flex-shrink: 0;
  cursor: default;
  margin-top: 9.8rem;
`;

export const NobelMiddleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.1rem;
`;

export const NobelContainer = styled.div`
  width: 103rem;
  flex-shrink: 0;
  margin: 0 1.5rem;
`;

export const NobelTitle = styled.div`
  width: 27.8rem;
  flex-shrink: 0;
  margin-bottom: 2.6rem;

  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme }) => theme.fonts.head_b_24};
  font-size: 2.3rem;
`;

export const BookList = styled.div`
  display: flex;
  width: 1030px;
  justify-content: space-between;
  align-items: center;
`;

export const BookItem = styled.div``;

export const BookTitle = styled.p`
  margin-top: 2rem;

  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme }) => theme.fonts.title2_b_17};
  text-align: left;
`;
