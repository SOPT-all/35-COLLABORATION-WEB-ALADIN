import styled from '@emotion/styled';

const commonBtn = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.4rem;
  height: 3.4rem;
  cursor: pointer;
  background-color: #F3F3F5;
`;

export const GoodsInfoWrapper = styled.section`
  display: flex;
  gap: 5.8rem;
  justify-content: center;
  padding: 7.6rem 0;
`;

export const GoodsInfoContainer = styled.div`
  width: 37.4rem;
`;

export const GoodsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  .shop-icon {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .img-goods {
    border-radius: 5px;
  }

  p {
    width: 18rem;

    ${({ theme }) => theme.fonts.body5_r_13};
    color: ${({ theme }) => theme.colors.text_gray40};
    text-align: center;
    white-space: pre-line;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.text_gray40};
  ${({ theme }) => theme.fonts.title2_b_17};

  h1 {
    .purple {
      color: ${({ theme }) => theme.colors.purple50};
    }
  }
`;

export const ButtonBox = styled.button`
  display: flex;
`;
export const PrevBtn = styled.button`
  ${commonBtn}
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
export const NextBtn = styled.button`
  ${commonBtn}
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GoodsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem 1.4rem;
  margin-top: 2rem;
`;

export const Img = styled.div`
  position: relative;
`;
