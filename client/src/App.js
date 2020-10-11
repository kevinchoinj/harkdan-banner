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
import {routes} from 'data/routes';
import Editor from 'pages/Editor';
import "react-toggle/style.css"

const GlobalStyle = createGlobalStyle`
  body{
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    background-color: ${props => props.theme.colorBackground};
    color: ${props => props.theme.colorText};
    font-family: 'Roboto', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <ThemeProvider theme={themeData}>
      <GlobalStyle/>
        <Navbar/>
        <Switch>
          <Route exact path={routes.home} render={props => <Home {...props}/>}/>
          <Route exact path={routes.faq} render={props => <Faq {...props}/>}/>
          <Route exact path={routes.editor} render={props => <Editor {...props}/>}/>
        </Switch>
    </ThemeProvider>
  );
}

export default App;
