import styled from '@emotion/styled';

export const ArrowRightBtn = styled.div`
  display: flex;
  width: 4.2rem;
  height: 4.2rem;
  padding: 1.1rem;

  background-color: ${({ theme }) => theme.colors.bg_gray10};

  color: ${({ theme }) => theme.colors.stroke_gray60};
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.stroke_gray20};
  }
`;
