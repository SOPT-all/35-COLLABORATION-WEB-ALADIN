import styled from '@emotion/styled';

const commonFlexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeSection2Wrapper = styled.div`
  ${commonFlexCenter}
  width: 100%;
  height: 55.7rem;
  flex-shrink: 0;
  cursor: default;
`;

export const HomeSection2Container = styled.div`
  display: flex;
  width: 103rem;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 1.5rem;
`;

export const HomeSection2Title = styled.div`
  display: flex;
  position: relative;
  top: 1.45rem;

  color: ${({ theme }) => theme.colors.text_gray20};
  ${({ theme }) => theme.fonts.body1_r_15};

  div {
    ${commonFlexCenter}
    width: 25.75rem;
    padding: 2.5rem 1.9rem;
    padding-top: 1.2rem;
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
  position: relative;
  justify-content: center;
  padding: 3rem 11.7rem 1rem;
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

  &.aladingoods {
    width: 20.6rem;
    height: 2.1rem;
  }
`;

export const BookBox = styled.div`
  width: 17.9rem;
  height: 33.8rem;
  padding: 2rem;
  gap: 2rem;

  &.aladingoods {
    display: flex;
    width: 24.6rem;
    height: 33.8rem;
    flex-direction: column;

    img {
      width: 20.6rem;
      height: 18.6123rem;
      flex-shrink: 0;
    }
  }
`;

export const ArrowBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6rem;
`;
