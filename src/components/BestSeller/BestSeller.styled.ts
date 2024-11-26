import styled from '@emotion/styled';

const commonFlexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BestSellerWrapper = styled.div`
  ${commonFlexCenter}
  flex-direction: column;
  width: 100vw;
  height: 55.7rem;
  flex-shrink: 0;
  cursor: default;
`;

export const BestSellerContainer = styled.div`
  display: flex;
  width: 103rem;
  gap: 3.3rem;
`;

export const BestSellerTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 103rem;
  height: 3.2rem;

  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme }) => theme.fonts.head_b_24};

  p {
    height: 3.2rem;
    margin-right: 0.8rem;
  }
`;

export const Top2Box = styled.section`
  display: flex;
  flex-direction: column;
  width: 25rem;

  section {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    width: 25rem;
    height: 10.4rem;
    flex-shrink: 0;
    box-shadow: 0 1px 0 ${({ theme }) => theme.colors.stroke_gray10};
  }

  div {
    display: flex;
    width: 14.1rem;
    margin-right: 4.5rem;

    gap: 1.3rem;

    color: ${({ theme }) => theme.colors.purple50};
    ${({ theme }) => theme.fonts.title2_b_17};
  }

  p {
    color: ${({ theme }) => theme.colors.text_gray40};
  }

  span {
    ${commonFlexCenter}
    position: absolute;
    right: 0.5rem;
    bottom: 1rem;
    width: 4.3rem;
    height: 1.8rem;
    gap: 0.3rem;

    color: ${({ theme }) => theme.colors.text_gray10};
    ${({ theme }) => theme.fonts.body7_b_12};
  }
`;

export const TopBox = styled.section`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme }) => theme.fonts.title3_b_15};

  section {
    display: flex;
    align-items: center;
    height: 5.2rem;
    align-self: stretch;
    box-shadow: 0 1px 0 ${({ theme }) => theme.colors.stroke_gray10};
  }
`;

export const CountDiv = styled.div`
  ${commonFlexCenter}
  width: 4.3rem;
  height: 1.8rem;
  gap: 0.3rem;

  color: ${({ theme }) => theme.colors.text_gray10};
  ${({ theme }) => theme.fonts.body7_b_12};
`;

export const EBookBox = styled.section`
  overflow: hidden;
  position: relative;
  width: 19.4rem;
  height: 21.3rem;
  border: 1px solid ${({ theme }) => theme.colors.stroke_gray10};
  flex-shrink: 0;
  border-radius: 1rem;
`;

export const InfrontAd2 = styled.div`
  display: inline-flex;
  position: absolute;
  bottom: 0.9rem;
  left: 0.5rem;
`;
