/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const colors = {
  purple60: '#2925A0',
  purple50: '#6358FA',
  purple40: '#7A71FF',
  purple20: '#E5E3FF',
  purple10: '#F7F6FF',

  text_gray10: '#737373',
  text_gray20: '#666666',
  text_gray30: '#444444',
  text_gray40: '#333333',

  white: '#FFFFFF',
  bg_gray10: '#F3F3F5',
  bg_banner_green: '#CAECC9',
  bg_gray50: '#EDEFF1',
  bg_gray90: '#2E2E2E',

  stroke_gray10: '#E6E6E6',
  stroke_gray20: '#DCDCDC',
  stroke_gray30: '#E2E2E2',
  stroke_gray40: '#BABABA',
  stroke_gray50: '#9E9E9E',
  stroke_gray60: '#808080',

  ic_gray10: '#B3B3B3',
  ic_gray20: '#B6B6B6',
  ic_gray30: '#8E8E8E',

  gradient_purple1: 'linear-gradient(291deg, #6358FA 24.8%, #AFA9FF 85.51%)',
  gradient2:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F2F2F4 100%)',

  tp_white50: 'rgba(255, 255, 255, 0.50)',
  tp_black50: 'rgba(0, 0, 0, 0.50)',
  tp_black70: 'rgba(0, 0, 0, 0.70)',
  tp_gray50: 'rgba(58, 58, 58, 0.50)',
};

const fonts = {
  head_b_24: css`
    font-family: 'AppleSDGothicNeoB00', sans-serif;

    font-size: 2.4rem;

    /* font-weight: 700; */
    line-height: 3.2rem;
    letter-spacing: 0%;
  `,

  title1_r_18: css`
    font-family: 'AppleSDGothicNeoR00', sans-serif;

    font-size: 1.8rem;

    /* font-weight: 400; */
    line-height: 3.5rem;
    letter-spacing: -0.1rem;
  `,
  title2_b_17: css`
    font-family: 'AppleSDGothicNeoB00', sans-serif;

    font-size: 1.7rem;

    /* font-weight: 700; */
    line-height: 2.1rem;
    letter-spacing: -0.05rem;
  `,
  title3_b_15: css`
    font-family: 'AppleSDGothicNeoB00', sans-serif;

    font-size: 1.5rem;

    /* font-weight: 700; */
    line-height: 1.8rem;
    letter-spacing: -0.015rem;
  `,
  title5_r_13: css`
    font-family: 'AppleSDGothicNeoR00', sans-serif;

    font-size: 1.3rem;

    /* font-weight: 400; */
    line-height: 3.7rem;
    letter-spacing: -0;
  `,

  body1_b_15: css`
    font-family: 'AppleSDGothicNeoB00', sans-serif;

    font-size: 1.5rem;

    /* font-weight: 700; */
    line-height: 1.8rem;
    letter-spacing: -0.05rem;
  `,
  body1_r_15: css`
    font-family: 'AppleSDGothicNeoR00', sans-serif;

    font-size: 1.5rem;

    /* font-weight: 400; */
    line-height: 1.8rem;
    letter-spacing: -0.05rem;
  `,
  body2_b_14: css`
    font-family: 'AppleSDGothicNeoB00', sans-serif;

    font-size: 1.4rem;

    /* font-weight: 700; */
    line-height: 2rem;
    letter-spacing: -0.05rem;
  `,
  body2_sb_14: css`
    font-family: 'AppleSDGothicNeoSB00', sans-serif;

    font-size: 1.4rem;

    /* font-weight: 600; */
    line-height: 2rem;
    letter-spacing: -0.05rem;
  `,
  body5_b_13: css`
    font-family: 'AppleSDGothicNeoB00', sans-serif;

    font-size: 1.3rem;

    /* font-weight: 700; */
    line-height: 1.8rem;
    letter-spacing: -0.015rem;
  `,
  body5_r_13: css`
    font-family: 'AppleSDGothicNeoR00', sans-serif;

    font-size: 1.3rem;

    /* font-weight: 400; */
    line-height: 1.8rem;
    letter-spacing: -0.015rem;
  `,
  body7_b_12: css`
    font-family: 'AppleSDGothicNeoB00', sans-serif;

    font-size: 1.2rem;

    /* font-weight: 700; */
    line-height: 1.8rem;
    letter-spacing: -0.05rem;
  `,
  body7_sb_12: css`
    font-family: 'AppleSDGothicNeoSB00', sans-serif;

    font-size: 1.2rem;

    /* font-weight: 600; */
    line-height: 1.8rem;
    letter-spacing: -0.05rem;
  `,
  body7_m_12: css`
    font-family: 'AppleSDGothicNeoM00', sans-serif;

    font-size: 1.2rem;

    /* font-weight: 500; */
    line-height: 1.5rem;
    letter-spacing: 0;
  `,
  body7_r_12: css`
    font-family: 'AppleSDGothicNeoR00', sans-serif;

    font-size: 1.2rem;

    /* font-weight: 400; */
    line-height: 1.8rem;
    letter-spacing: -0.05rem;
  `,
  body9_b_11: css`
    font-family: 'AppleSDGothicNeoB00', sans-serif;

    font-size: 1.1rem;

    /* font-weight: 700; */
    line-height: 3.7rem;
    letter-spacing: -0.05rem;
  `,
  body10_sb_11: css`
    font-family: 'AppleSDGothicNeoSB00', sans-serif;

    font-size: 1.1rem;

    /* font-weight: 600; */
    line-height: 1.5rem;
    letter-spacing: 0;
  `,
  body10_r_11: css`
    font-family: 'AppleSDGothicNeoR00', sans-serif;

    font-size: 1.1rem;

    /* font-weight: 400; */
    line-height: 1.5rem;
    letter-spacing: 0;
  `,
  body11_hvy_17: css`
    font-family: 'AppleSDGothicNeoH00', sans-serif;

    font-size: 1.7rem;

    /* font-weight: 800; */
    line-height: 1.7rem;
    letter-spacing: 0;
  `,
  body12_sb_13: css`
    font-family: 'AppleSDGothicNeoSB00', sans-serif;

    font-size: 1.3rem;

    /* font-weight: 600; */
    line-height: 1.5rem;
    letter-spacing: 0;
  `,

  caption2_b_11: css`
    font-family: 'AppleSDGothicNeoB00', sans-serif;

    font-size: 1.1rem;

    /* font-weight: 700; */
    line-height: 1.8rem;
    letter-spacing: -0.05rem;
  `,
  caption4_sb_16: css`
    font-family: 'AppleSDGothicNeoSB00', sans-serif;

    font-size: 1.6rem;

    /* font-weight: 600; */
    line-height: 2rem;
    letter-spacing: 0;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;

export type ColorType = typeof theme.colors;
export type FontType = typeof theme.fonts;
