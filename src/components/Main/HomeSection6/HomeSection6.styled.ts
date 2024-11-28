import styled from '@emotion/styled';

export const Section6 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3.5rem;
  margin-bottom: 10.5rem;
`;

export const Section6CardWrapper = styled.div`
  display: flex;
  width: 103rem;
  padding: 7rem 0 10.5rem;
  max-width: 120rem;
  flex-direction: column;
  gap: 3.5rem;
`;

export const Section6TitleLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 7rem;
`;

export const Title = styled.p`
  margin-left: 24.5rem;

  ${({ theme }) => theme.fonts.head_b_24};
  color: ${({ theme }) => theme.colors.text_gray40};
  flex-shrink: 0;
`;

export const Section6CardLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  overflow-x: scroll;
  scrollbar-width: none;
  max-width: 100vw;
`;

export const Section6CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CardLabel = styled.p`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 33.6rem;
  height: 3.8rem;
  padding: 1rem 1.2rem;
  align-items: center;

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.tp_white50};

  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme }) => theme.fonts.body1_b_15};
`;
