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
import Login from 'pages/Login';
import Register from 'pages/Register';
import InitialLoad from 'components/editor/InitialLoad';
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
  body * {
    scrollbar-width: thin;
    scrollbar-color:  #f1f1f1 #888;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

function App() {
  return (
    <ThemeProvider theme={themeData}>
      <InitialLoad/>
      <GlobalStyle/>
        <Navbar/>
        <Switch>
          <Route exact path={routes.home} render={props => <Home {...props}/>}/>
          <Route exact path={routes.faq} render={props => <Faq {...props}/>}/>
          <Route exact path={routes.editor} render={props => <Editor {...props}/>}/>
          <Route exact path={routes.login} render={props => <Login {...props}/>}/>
          <Route exact path={routes.register} render={props => <Register {...props}/>}/>
        </Switch>
    </ThemeProvider>
  );
}

export default App;
