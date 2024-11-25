import { IcLocation, IcRightV } from '@assets/svgs';
import * as S from './Footer.styled';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.FooterWrapper>
        <S.FooterTop>
          <S.FooterTopContent $isBold={false}>회사소개</S.FooterTopContent>
          <S.FooterTopContent $isBold={false}>채용안내</S.FooterTopContent>
          <S.FooterTopContent $isBold={false}>이용약관</S.FooterTopContent>
          <S.FooterTopContent $isBold={true}>
            개인정보처리방침
          </S.FooterTopContent>
          <S.FooterTopContent $isBold={false}>
            청소년 보호정책
          </S.FooterTopContent>
          <S.FooterTopContent $isBold={false}>중고매장</S.FooterTopContent>
          <S.FooterTopContent $isBold={false}>
            제휴,마케팅 안내
          </S.FooterTopContent>
          <S.FooterTopContent $isBold={false}>판매자 매니저</S.FooterTopContent>
          <S.FooterTopContent $isBold={false}>
            출판사,공급사 안내
          </S.FooterTopContent>
          <S.FooterTopContent $isBold={false}>광고 안내</S.FooterTopContent>
          <S.FooterTopContent $isBold={false}>
            학교,기업,기관 대량구매
          </S.FooterTopContent>
        </S.FooterTop>

        <S.FooterBottomWrapper>
          <S.LeftLayout>
            <S.LeftTitle>(주)알라딘커뮤니케이션</S.LeftTitle>
            <S.LeftContent>
              <S.LeftSmallText>대표이사 최우영</S.LeftSmallText>
              <S.LeftSmallText>고객정보보호 책임자 최우영</S.LeftSmallText>
              <S.LeftSmallText>
                사업자등록 201-81-23094 <IcRightV />
              </S.LeftSmallText>
              <S.LeftSmallText>통신판매업신고 중구01520호</S.LeftSmallText>
              <S.LeftSmallText>이메일 privacy@aladin.co.kr</S.LeftSmallText>
              <S.LeftSmallText>
                호스팅 제공자 알라딘커뮤니케이션
              </S.LeftSmallText>
              <S.LeftSmallText>
                (본사) 서울시 중구 서소문로 89-31
              </S.LeftSmallText>
              <S.LeftSmallText>
                © Aladin Communication. All Rights Reserved.
              </S.LeftSmallText>
            </S.LeftContent>
          </S.LeftLayout>
          <S.RightLayout>
            <S.RightTitle>고객센터 1544-2514 (발신자 부담)</S.RightTitle>
            <S.RightContent>
              서울시 마포구 백범로 71 숨도빌딩 7층 Fax 02-6926-2600
            </S.RightContent>
            <S.BtnWrapper>
              <S.Btn>1:1 문의</S.Btn>
              <S.Btn>FAQ</S.Btn>
            </S.BtnWrapper>
            <S.LongBtn>
              <IcLocation />
              중고매장 위치, 영업시간 안내
            </S.LongBtn>
          </S.RightLayout>
        </S.FooterBottomWrapper>
      </S.FooterWrapper>
    </S.Wrapper>
  );
};

export default Footer;
