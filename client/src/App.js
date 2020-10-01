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
import TrackMouse from 'components/general/TrackMouse';
import {routes} from 'data/routes';
import GridLock from 'components/home/GridLock';

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
      <TrackMouse>
        <GridLock/>
        <Navbar/>
        <Switch>
          <Route exact path={routes.home} render={props => <Home {...props}/>}/>
          <Route exact path={routes.faq} render={props => <Faq {...props}/>}/>
        </Switch>
      </TrackMouse>
    </ThemeProvider>
  );
}

export default App;
