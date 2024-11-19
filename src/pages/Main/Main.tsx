//import React from 'react'
import * as S from "./Main.styled"
import { BtnFloating } from '@assets/svgs'
import { Hihi } from "@assets/svgs"

const Main = () => {
  return (
    <S.MainWrapper>
      테스트테스트
      <BtnFloating width={'100px'} height={'100px'}/>
      <Hihi></Hihi>
    </S.MainWrapper>
  )
}

export default Main
