import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: 16px 
  "Helvetica Neue", Arial, sans-serif;
  color: ${(props) => props.theme.colors["dark-gray"]};
}`;
