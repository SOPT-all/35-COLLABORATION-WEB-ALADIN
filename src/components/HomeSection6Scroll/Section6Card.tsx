import * as S from './Section6Card.styled';
import {
  IcRightarrowMediumTextgray40,
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
        <S.Section6TitleLayout>
          <S.Title>알라딘이 만든 사은품</S.Title>
          <IcRightarrowMediumTextgray40/>
        </S.Section6TitleLayout>
        <S.Section6CardLayout>
          <S.Section6CardContainer>
            <Img61 style={{ flexShrink: 0, borderRadius: '1rem' }} />
            <S.CardLabel>15pt 중고매장 FAQ</S.CardLabel>
          </S.Section6CardContainer>
          <S.Section6CardContainer>
            <Img62 style={{ flexShrink: 0, borderRadius: '1rem' }} />
            <S.CardLabel>책모양 오르골</S.CardLabel>
          </S.Section6CardContainer>
          <S.Section6CardContainer>
            <Img63 style={{ flexShrink: 0, borderRadius: '1rem' }} />
            <S.CardLabel>북슬리브</S.CardLabel>
          </S.Section6CardContainer>
          <S.Section6CardContainer>
            <Img64 style={{ flexShrink: 0, borderRadius: '1rem' }} />
            <S.CardLabel>퀄팅 북슬리브</S.CardLabel>
          </S.Section6CardContainer>
          <S.Section6CardContainer>
            <Img65 style={{ flexShrink: 0, borderRadius: '1rem' }} />
            <S.CardLabel>미니 토트백</S.CardLabel>
          </S.Section6CardContainer>
          <S.Section6CardContainer>
            <Img66 style={{ flexShrink: 0, borderRadius: '1rem' }} />
            <S.CardLabel>아크릴 스탠드</S.CardLabel>
          </S.Section6CardContainer>
          <S.Section6CardContainer>
            <Img67 style={{ flexShrink: 0, borderRadius: '1rem' }} />
            <S.CardLabel>데스크 매트</S.CardLabel>
          </S.Section6CardContainer>
          <S.Section6CardContainer>
            <Img68 style={{ flexShrink: 0, borderRadius: '1rem' }} />
            <S.CardLabel>아크릴 램프</S.CardLabel>
          </S.Section6CardContainer>
          <S.Section6CardContainer>
            <Img69 style={{ flexShrink: 0, borderRadius: '1rem' }} />
            <S.CardLabel>스틸 북엔드</S.CardLabel>
          </S.Section6CardContainer>
        </S.Section6CardLayout>
      </S.Section6CardWrapper>
    </>
  );
};

export default Section6Card;
