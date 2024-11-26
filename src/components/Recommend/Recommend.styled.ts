import styled from '@emotion/styled';

const commonFlexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RecommendWrapper = styled.div`
  ${commonFlexCenter}
  width: 100vw;
  height: 46rem;
  flex-shrink: 0;
  cursor: default;
`;

export const RecommendContainer = styled.div`
  width: 103rem;
  flex-shrink: 0;
`;

export const RecommendTitle = styled.div`
  width: 27.8rem;
  flex-shrink: 0;
  margin-bottom: 1rem;

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

export const BookItem = styled.div`
  height: 25rem;
`;

export const BookTitle = styled.p`
  width: 17.3rem;
  margin-top: 2rem;

  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme }) => theme.fonts.title2_b_17};
  text-align: left;
  overflow-wrap: break-word;
`;

export const RecommendLogin = styled.p`
  margin-bottom: 1.9rem;

  color: ${({ theme }) => theme.colors.text_gray20};
  ${({ theme }) => theme.fonts.body12_sb_13};

  span {
    margin-left: 0.8rem;

    color: ${({ theme }) => theme.colors.purple50};
    ${({ theme }) => theme.fonts.body5_b_13};
  }
`;
