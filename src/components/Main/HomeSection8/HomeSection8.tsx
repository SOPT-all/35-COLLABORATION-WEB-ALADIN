import { HomeSection2Indicator, Img81, Img82, Img83 } from '@assets/svgs';
import * as S from './HomeSection8.styled';
import ArrowLeftButton from '@components/common/Button/ArrowLeftButton/ArrowLeftButton';
import ArrowRightButton from '@components/common/Button/ArrowRightButton/ArrowRightButton';

const HomeSection8 = () => {
  return (
    <>
      <S.Wrapper>
        <S.Layout>
          <ArrowLeftButton />
          <S.CardContainer>
            <Img81 />
            <Img82 />
            <Img83 />
          </S.CardContainer>
          <ArrowRightButton />
        </S.Layout>
        <HomeSection2Indicator />
      </S.Wrapper>
    </>
  );
};

export default HomeSection8;
