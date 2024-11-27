import styled from '@emotion/styled';

const commonFlexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeSection2Wrapper = styled.div`
  ${commonFlexCenter}
  flex-direction: column;
  width: 100vw;
  height: 55.7rem;
  flex-shrink: 0;
  cursor: default;
`;

export const HomeSection2Container = styled.div`
  display: flex;
  width: 103rem;
  flex-direction: column;
  align-items: flex-start;
`;

export const HomeSection2Title = styled.div`
  display: flex;

  color: ${({ theme }) => theme.colors.text_gray20};
  ${({ theme }) => theme.fonts.body1_r_15};

  div {
    display: flex;
    width: 25.7rem;
    padding: 1.2rem 1.9rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;

    &.selected {
      background-color: ${({ theme }) => theme.colors.bg_gray10};

      ${({ theme }) => theme.fonts.title3_b_15};

      color: ${({ theme }) => theme.colors.text_gray40};
      border-radius: 1.5rem 1.5rem 0 0;
    }

    :hover {
      color: ${({ theme }) => theme.colors.purple50};
      ${({ theme }) => theme.fonts.title3_b_15};
    }
  }
`;

export const TypeBox = styled.div`
  display: flex;
  padding: 3rem 11.7rem 1rem;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
  border-radius: 2rem;
  background: ${({ theme }) => theme.colors.bg_gray10};

  p {
    overflow: hidden;
    width: 14.4rem;
    height: 3.6rem;

    color: ${({ theme }) => theme.colors.text_gray40};
    ${({ theme }) => theme.fonts.body5_r_13};
  }

  img {
    width: 13.9rem;
    height: 20.6rem;
    flex-shrink: 0;
  }
`;

export const BookTitle = styled.div`
  width: 13.9rem;
  height: 4.2rem;
  margin-top: 2rem;

  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme }) => theme.fonts.title2_b_17};
`;

export const BookBox = styled.div`
  width: 17.9rem;
  padding: 2rem;
  align-items: flex-start;
  gap: 2rem;
`;
