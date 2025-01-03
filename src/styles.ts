import { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  white: '#FFF8F2',
  beige: '#FFEBD9',
  blackOpacity: '#040404a3'
}

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
  body {
    background-color: ${colors.white};
    color: ${colors.red};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

  }

`
