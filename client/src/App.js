import React from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {themeData} from 'data/themeData';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Home from 'pages/Home';
import Faq from 'pages/Faq';
import Navbar from 'components/general/Navbar';

const GlobalStyle = createGlobalStyle`
  body{
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    background-color: ${props => props.theme.colorBackground};
    color: ${props => props.theme.colorText};
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
  return (
    <ThemeProvider theme={themeData}>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route exact path="/" render={props => <Home {...props}/>}/>
        <Route exact path="/faq" render={props => <Faq {...props}/>}/>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
