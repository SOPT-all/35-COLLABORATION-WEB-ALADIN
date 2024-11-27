import * as S from './Ad.styled';
import { ImgHomeAd1 } from '@assets/svgs';

const Ad = () => {
  return (
    <S.AdWrapper>
      <S.AdContainer>
        <ImgHomeAd1 />
        <S.AdTitle>
          독자 북펀드 &lt;내 어둠은 지상에서 작품이 되었다&gt;
          <p>AD</p>
        </S.AdTitle>
        <S.AdContent>1/2</S.AdContent>
      </S.AdContainer>
    </S.AdWrapper>
  );
};

export default Ad;
