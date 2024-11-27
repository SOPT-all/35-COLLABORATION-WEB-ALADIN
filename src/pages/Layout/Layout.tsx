//import React from 'react'
import Header from '@components/Header/Header';
import * as S from './Layout.styled';
import { Outlet } from 'react-router-dom';
import Footer from '@components/Footer/Footer';

const Layout = () => {
  return (
    <S.LayoutWrapper>
      <Header />
      <Outlet />
      <Footer />
    </S.LayoutWrapper>
  );
};

export default Layout;
