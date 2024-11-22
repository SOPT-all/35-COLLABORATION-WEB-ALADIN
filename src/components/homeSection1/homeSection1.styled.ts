import styled from "@emotion/styled";
import theme from "@styles/theme";

const commonFlexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeSectionWrapper = styled.div`
  ${commonFlexCenter}
  flex-direction: column;
  width: 100vw;
  height: 55.7rem;
  flex-shrink: 0;
  background: linear-gradient(180deg, #FFFFFF 0%, #F2F2F4 100%);
  cursor: default;
`;

export const HeadLayout = styled.div`
  ${commonFlexCenter}
  position: relative;
  width: 103rem;
  height: 3.2rem;
  margin-top: 4.2rem;
  margin-bottom: 1.8rem;
`;

export const TitleMent = styled.div`
  color: ${theme.colors.text_gray40};
  ${theme.fonts.head_b_24};
`;

export const Btn = styled.button`
  display: inline-flex;
  height: 2.6rem;
  position: absolute;
  align-items: center;
  right: 14.5rem; 
  gap: 0.6rem;
  padding: 0.4rem 1rem;
  border: 1px solid ${theme.colors.stroke_gray30};
  border-radius: 9.9rem;
  background-color: ${theme.colors.white};
  color: ${theme.colors.text_gray10};
  ${theme.fonts.body5_r_13};
  line-height: 0%;
`;

export const ImgContainer = styled.div`
  ${commonFlexCenter}
  width: 102rem;
  height: 38.5rem;
  flex-shrink: 0;
  margin-bottom: 3.6rem;
  padding: 2.4rem 3.8rem 0.9rem 3.7rem;
  gap:3.5rem;
`;

export const ImgBox = styled.div`
  display: flex;
  position: relative;
  width: 21rem;
  height: 36rem;
  flex-direction: column;
  align-items: center;
  gap:0.7rem;
`;

export const SalePrice = styled.div`
  display: inline-flex;
  position: absolute;
  top:-2rem;
  left: -1.25rem;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0.5rem 1.1rem 0.5rem;
  border-radius: 9.9rem;
  background-color: ${theme.colors.purple50};
  color: ${theme.colors.white};
  ${theme.fonts.head_b_24};
`;

export const ImgTitle = styled.p`
  margin-top: 3.6rem;
  color: ${theme.colors.text_gray30};
  ${theme.fonts.title3_b_15};
`;

export const ImgPrice = styled.div`
  display: flex;
  width: 17.8rem;
  align-items: center;
  justify-content: flex-start;
  color: ${theme.colors.purple50};
  ${theme.fonts.title3_b_15}; 
  white-space: nowrap;

  p{
    margin-right: 0.4rem;
    margin-left: 3.3rem;
    color: ${theme.colors.text_gray40};
  }
`;

export const RealPrice = styled.div`
  position: relative;
  color: ${theme.colors.stroke_gray40};
  ${theme.fonts.title3_b_15};
`;

export const ArrowIcon = styled.div`
  position: absolute;
  top:0;
  left:-0.1rem;
`;

export const ImgWriter = styled.p`
  color: ${theme.colors.text_gray10};
  ${theme.fonts.body5_r_13};
`;

export const ProgressLayout = styled.div`
  ${commonFlexCenter}
  width: 100vw;
  gap:3.8rem;
  background-color: ${theme.colors.white};
`;

export const ProgressMent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${theme.colors.text_gray20};
  ${theme.fonts.body5_b_13};

  p{
    display:flex;
    align-items: center;
  }
`;

export const ProgressBar = styled.div`
  max-width: 102.8rem;
  height: 0.2rem;
  flex-shrink: 0;
  border-radius: 99px;
  background: var(--purple50, #6358FA);
  transition: width 0.1s linear;
`;

export const ProgressBox = styled.div`
  ${commonFlexCenter}
  height: 6.2rem;
  flex-shrink: 0;
  gap:6rem;

p {
  ${commonFlexCenter}
  width: 10.9rem;

    &:hover {
      color: ${theme.colors.purple50};
    }
  }
`;

export const ProgressFocus = styled.div`
  ${commonFlexCenter}
  width: 10.9rem;
  height: 3.4rem;
  border-radius: 2rem;
  background-color: ${theme.colors.purple50};
  color: ${theme.colors.white};
  line-height: 0%;
`;

export const PlayBtn = styled.div`
  ${commonFlexCenter}
  padding-left: 3.8rem;
  cursor: pointer;
`;