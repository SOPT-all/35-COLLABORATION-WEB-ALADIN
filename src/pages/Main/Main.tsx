//import React from 'react'
import HomeSection10 from '@components/Main/HomeSection10/HomeSection10';
import * as S from './Main.styled';
import HomeSection1 from '@components/homeSection1/homeSection1';
import HomeSection6 from '@components/Main/HomeSection6/HomeSection6';
import HomeSection7 from '@components/Main/HomeSection7/HomeSection7';
import HomeSection8 from '@components/Main/HomeSection8/HomeSection8';
import HomeSection9 from '@components/Main/HomeSection9/HomeSection9';
import HomeSection11 from '@components/Main/HomeSection11/HomeSection11';
import BestSeller from '@components/BestSeller/BestSeller';
import Ad from '@components/Ad/Ad';

const Main = () => {
  return (
    <S.MainWrapper>
      <HomeSection1 />
      <BestSeller />
      <Ad />
      <HomeSection6 />
      <HomeSection7 />
      <HomeSection8 />
      <HomeSection9 />
      <HomeSection10 />
      <HomeSection11 />
    </S.MainWrapper>
  );
};

export default Main;
