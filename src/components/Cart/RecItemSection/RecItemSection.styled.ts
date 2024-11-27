import styled from '@emotion/styled';

export const RecItemSectionWrapper = styled.section`
  display: flex;
  width: 100vw;
  padding: 4rem 0;

  background-color: ${({ theme }) => theme.colors.purple10};
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const RecItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  ${({ theme }) => theme.fonts.head_b_24};
`;

export const RecItemBox = styled.div`
  display: flex;
  gap: 2rem;
`;

export const RecItemCard = styled.div`
  p {
    ${({ theme }) => theme.fonts.body5_r_13};
    color: ${({ theme }) => theme.colors.text_gray40};
    text-align: center;
    white-space: pre-line;
  }

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const RecItem = styled.div`
  position: relative;

  .img-cartbook {
    transition: filter 0.3s ease;
    filter: brightness(1);
  }

  div {
    display: none;
    position: absolute;
    bottom: 1.4rem;
    left: 50%;
    z-index: 10;
    transform: translateX(-50%);
    gap: 2.5rem;
  }

  &:hover .img-cartbook {
    filter: brightness(0.5);
  }

  &:hover div {
    display: flex;
  }
`;

export const HoverBtn = styled.button`
  display: flex;
  z-index: 10;
  width: 4.8rem;
  height: 4.8rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple50};
  }
`;
