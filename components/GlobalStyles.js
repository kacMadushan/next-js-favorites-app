import { createGlobalStyle } from 'styled-components';
import { COLORS, WEIGHTS, TYPE_SCALE, FAMILIES } from '../constants/themes';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  html, body, div, span, ol, ul, li, small,
  h1, h2, h3, h4, h5, h6, p, a, label,
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    margin: 0;
    padding: 0;
    border: 0;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
	  display: block;
  }

  *,
  *:before, 
  *:after {
    box-sizing: inherit;
  }
  
  html, body {
    height: 100%;
  }

  body {
    color: ${COLORS.gray[500]};
    font-weight: ${WEIGHTS.normal};
    font-size: ${TYPE_SCALE.paragraph};
    font-family: ${FAMILIES.sansSerif};
    background-color: ${COLORS.white};
  }

  ol, ul {
    list-style: none;
  }

  img {
    width: 100%;
    vertical-align: middle;
  }

  a {
    text-decoration: none;
  }

  .active {
    color: ${COLORS.urgent};
  }
`;

export default GlobalStyles;