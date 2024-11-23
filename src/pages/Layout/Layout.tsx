//import React from 'react'
import Header from '@components/Header/Header';
import * as S from './Layout.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <S.LayoutWrapper>
      <Header />
      <Outlet />
    </S.LayoutWrapper>
  );
};

export default Layout;
