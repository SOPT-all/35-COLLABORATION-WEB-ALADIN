/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body,
  button,
  dd,
  dl,
  dt,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  legend,
  li,
  ol,
  p,
  select,
  table,
  td,
  textarea,
  th,
  ul {
    margin: 0;
    padding: 0;
  }

  body,
  button,
  input,
  select,
  table,
  textarea {
    font-family: "AppleSDGothicNeoH00", "AppleSDGothicNeoB00", "AppleSDGothicNeoM00", 
      "AppleSDGothicNeoR00", "AppleSDGothicNeoSB00", -apple-system, BlinkMacSystemFont,
      "Malgun Gothic", "맑은 고딕", helvetica, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    line-height: inherit;
  }

  textarea {
    border: 0;

    background-color: transparent;
    backface-visibility: hidden;
    word-break: keep-all;
    word-wrap: break-word;
  }

  button,
  input {
    border-radius: 0;
    border: 0;
  }

  button {
    background-color: transparent;
  }

  fieldset,
  img {
    border: 0;
  }

  img {
    vertical-align: top;
  }

  ol,
  ul {
    list-style: none;
  }

  address,
  em {
    font-style: normal;
  }

  a {
    display: flex;
    text-decoration: none;
  }

  iframe {
    overflow: hidden;
    margin: 0;
    padding: 0;
    border: 0;

    vertical-align: top;
  }

  mark {
    background-color: transparent;
  }

  i {
    font-style: normal;
  }

  #root {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 100vh;
  }

  @font-face {
    font-family: "AppleSDGothicNeoH00";
    src: url("/fonts/AppleSDGothicNeoH.ttf") format("truetype");
  }

  @font-face {
    font-family: "AppleSDGothicNeoB00";
    src: url("/fonts/AppleSDGothicNeoB.ttf") format("truetype");
  }

  @font-face {
    font-family: "AppleSDGothicNeoR00";
    src: url("/fonts/AppleSDGothicNeoR.ttf") format("truetype");
  }

  @font-face {
    font-family: "AppleSDGothicNeoM00";
    src: url("/fonts/AppleSDGothicNeoM.ttf") format("truetype");
  }

  @font-face {
    font-family: "AppleSDGothicNeoSB00";
    src: url("/fonts/AppleSDGothicNeoSB.ttf") format("truetype");
  }

  html {
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgb(0 0 0 / 0%);
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  body {
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;

    scrollbar-width: none;
    justify-content: center;
    align-items: center;
    scroll-behavior: smooth;
  }
`;

const GlobalStyle = () => <Global styles={globalStyles} />;

export default GlobalStyle;