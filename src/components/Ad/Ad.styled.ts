import styled from '@emotion/styled';

export const AdWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  flex-shrink: 0;
  cursor: default;
  align-self: stretch;
  background: ${({ theme }) => theme.colors.bg_banner_green};
`;

export const AdContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 9.9rem;
  background: ${({ theme }) => theme.colors.bg_banner_green};
`;

export const AdTitle = styled.div`
  margin-right: 5rem;
  margin-left: 1.9rem;

  ${({ theme }) => theme.fonts.head_b_24};
  color: ${({ theme }) => theme.colors.text_gray40};

  p {
    ${({ theme }) => theme.fonts.body5_b_13};
    color: ${({ theme }) => theme.colors.text_gray30};
  }
`;
export const AdContent = styled.div`
  display: flex;
  height: 12.4rem;
  align-items: center;

  ${({ theme }) => theme.fonts.body5_b_13};
  color: ${({ theme }) => theme.colors.text_gray10};
`;
