import React from 'react';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import {themeData} from 'data/themeData';
const GlobalStyle = createGlobalStyle`
  body{
    width:100%;
    overflow-x: hidden;
    margin: 0;
  }
`;

function App() {
  return (
    <ThemeProvider theme={themeData}>
      <GlobalStyle/>
      micro dan
    </ThemeProvider>
  );
}

export default App;
