//import React from 'react'
import * as S from './Layout.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <S.LayoutWrapper>
      <Outlet />
    </S.LayoutWrapper>
  );
};

export default Layout;
