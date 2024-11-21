import React from 'react';
import * as S from './Header.styled';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderTop>
        <S.HeaderTopCategoryLayout>
          <S.CategoryDiv $isMain={true}>HOME</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>국내도서</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>외국도서</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>eBook</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>알라딘굿즈</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>온라인중고</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>우주점</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>중고매장</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>커피</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>음반</S.CategoryDiv>
          <S.CategoryDiv $isMain={false}>블루레이</S.CategoryDiv>
        </S.HeaderTopCategoryLayout>
        <S.HeaderTopUserLayout>
          <S.UserOptionDiv>로그인</S.UserOptionDiv>
          <S.UserOptionDiv>회원가입</S.UserOptionDiv>
          <S.UserOptionDiv>고객센터</S.UserOptionDiv>
        </S.HeaderTopUserLayout>
      </S.HeaderTop>
      <S.HeaderSearch></S.HeaderSearch>
      <S.HeaderBottom></S.HeaderBottom>
    </S.HeaderWrapper>
  );
};

export default Header;
