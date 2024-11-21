import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 19.5rem;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors.white};

  box-shadow: 0 0 30px 0 rgb(0 0 0 / 8%);
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.stroke_gray20};
  gap: 12rem;
`;

export const HeaderTopCategoryLayout = styled.div`
  display: flex;
  padding: 1rem 0;
  max-width: 83.9rem;
  align-items: center;
  gap: 0.7rem;
`;

export const CategoryDiv = styled.div<{ $isMain: boolean }>`
  display: flex;
  width: 5.9rem;
  height: 3rem;
  padding: 0 0.7rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  ${({ theme }) => theme.fonts.body5_b_13};
  color: ${({ $isMain, theme }) =>
    $isMain ? theme.colors.purple50 : theme.colors.ic_gray10};
  white-space: nowrap;
`;

export const HeaderTopUserLayout = styled.div`
  display: flex;
  min-width: 18rem;
  padding: 1rem 0;
  align-items: center;
  gap: 0.7rem;
`;

export const UserOptionDiv = styled.div`
  display: flex;
  width: 4.8rem;
  height: 3rem;
  padding: 0 0.7rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.ic_gray10};
  white-space: nowrap;
  ${({ theme }) => theme.fonts.body5_b_13};
`;

export const HeaderSearch = styled.div``;

export const HeaderBottom = styled.div``;
