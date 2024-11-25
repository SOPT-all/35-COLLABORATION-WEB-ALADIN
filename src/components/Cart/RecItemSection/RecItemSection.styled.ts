import styled from '@emotion/styled';

export const RecItemSectionWrapper = styled.section`
  display: flex;
  gap: 2rem;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.purple10};
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
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
    white-space: pre-line;
    text-align: center;
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
    z-index: 10;
    bottom: 1.3rem;
    left: 50%;
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

export const LikeBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.8rem;
  height: 4.8rem;
  z-index: 10;
  filter: brightness(1);

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple50};
  }
`;

export const CartBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.8rem;
  height: 4.8rem;
  z-index: 10;
  filter: brightness(1);

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple50};
  }
`;

export const ArrowBtn = styled.button``;
