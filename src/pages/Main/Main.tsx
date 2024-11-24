//import React from 'react'
import Section6Card from '@components/HomeSection6Scroll/Section6Card';
import * as S from './Main.styled';
import HomeSection1 from '@components/homeSection1/homeSection1';
import HomeSection7 from '@components/Main/Section7/HomeSection7';

const Main = () => {
  return (
    <S.MainWrapper>
      <HomeSection1 />
      <Section6Card />
      <HomeSection7 />
    </S.MainWrapper>
  );
};

export default Main;
