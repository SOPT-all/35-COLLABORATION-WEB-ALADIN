import * as S from './Section6Card.styled';
import {
  Img61,
  Img62,
  Img63,
  Img64,
  Img65,
  Img66,
  Img67,
  Img68,
  Img69,
} from '@assets/svgs';

const Section6Card = () => {
  return (
    <>
      <S.Section6CardWrapper>
        <S.Section6CardLayout>
          <S.Title>알라딘이 만든 사은품</S.Title>
          <button>&gt;</button>
        </S.Section6CardLayout>
        <Img61 />
        <Img62 />
        <Img63 />
        <Img64 />
        <Img65 />
        <Img66 />
        <Img67 />
        <Img68 />
        <Img69 />
      </S.Section6CardWrapper>
    </>
  );
};

export default Section6Card;
