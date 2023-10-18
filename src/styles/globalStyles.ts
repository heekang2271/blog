import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
    font-size: 15px;
    word-break: keep-all;
    font-family: "Figtree", "Pretendard", sans-serif;
    background-color: ${(props) => props.theme.global.bgColor};
    color: ${(props) => props.theme.global.textColor};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    margin: 0;
    padding: 0;
    background-color: transparent;
    font: inherit;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    cursor: pointer;
  }

  input, textarea, select {
    font: inherit;
    color: inherit;
  }

  img {
    display: block;
  }
`;
