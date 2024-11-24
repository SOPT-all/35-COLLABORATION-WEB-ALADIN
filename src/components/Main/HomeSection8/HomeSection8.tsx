import SvgImg81 from '@assets/svgs/Img81';
import * as S from './HomeSection8.styled';
import ArrowLeftButton from '@components/common/Button/ArrowLeftButton/ArrowLeftButton';
import ArrowRightButton from '@components/common/Button/ArrowRightButton/ArrowRightButton';
import SvgImg82 from '@assets/svgs/Img82';
import SvgImg83 from '@assets/svgs/Img83';
import SvgHomeSection2Indicator from '@assets/svgs/HomeSection2Indicator';

const HomeSection8 = () => {
  return (
    <>
      <S.Wrapper>
        <S.Layout>
          <ArrowLeftButton />
          <S.CardContainer>
            <SvgImg81 />
            <SvgImg82 />
            <SvgImg83 />
          </S.CardContainer>
          <ArrowRightButton />
        </S.Layout>
        <SvgHomeSection2Indicator />
      </S.Wrapper>
    </>
  );
};

export default HomeSection8;
