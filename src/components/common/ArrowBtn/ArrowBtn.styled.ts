import styled from '@emotion/styled';

export const ArrowBtn = styled.button`
  display: flex;
  width: 4.2rem;
  height: 4.2rem;

  background-color: ${({ theme }) => theme.colors.bg_gray10};
  align-items: center;
  justify-content: center;
  border-radius: 100%;

  :hover {
    background-color: ${({ theme }) => theme.colors.stroke_gray20};
  }
`;
