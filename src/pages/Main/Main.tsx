//import React from 'react'
import * as S from './Main.styled';
import HomeSection1 from '@components/homeSection1/homeSection1';
import HomeSection6 from '@components/Main/HomeSection6/HomeSection6';
import HomeSection7 from '@components/Main/HomeSection7/HomeSection7';
import HomeSection8 from '@components/Main/HomeSection8/HomeSection8';
import HomeSection9 from '@components/Main/HomeSection9/HomeSection9';

const Main = () => {
  return (
    <S.MainWrapper>
      <HomeSection1 />
      <HomeSection6 />
      <HomeSection7 />
      <HomeSection8 />
      <HomeSection9 />
    </S.MainWrapper>
  );
};

export default Main;
