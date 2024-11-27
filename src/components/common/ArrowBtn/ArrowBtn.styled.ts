import styled from '@emotion/styled';

export const ArrowBtn = styled.button`
  width: 4.2rem;
  height: 4.2rem;
  background-color: ${({ theme }) => theme.colors.bg_gray10};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;

  :hover {
    background-color: ${({ theme }) => theme.colors.stroke_gray20};
  }
`;
