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
import EditorBasic from 'pages/EditorBasic';
import Login from 'pages/Login';
import PassportCheck from 'routes/PassportCheck';
import InitialLoad from 'components/editor/InitialLoad';
import CheckLogin from 'components/auth/CheckLogin';
import "react-toggle/style.css"

const GlobalStyle = createGlobalStyle`
  body{
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    background-color: ${props => props.theme.colorBackground};
    color: ${props => props.theme.colorText};
    font-family: 'Inter', sans-serif;
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



  @keyframes fade {
    from {
      opacity: 0;
      transform: scale3D(0.95, 0.95, 0.95);
    }
    to {
      opacity: 1;
      transform: scale3D(1, 1, 1);
    }
  }

  .Form {
    animation: fade 200ms ease-out;
  }

  .FormGroup {
    margin: 0 15px 20px;
    padding: 0;
    border-style: none;
    will-change: opacity, transform;
    border-radius: 4px;
  }

  .FormRow {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15px;
  }

  .FormRow:first-child {
    border-top: none;
  }

  .FormRowLabel {
    width: 15%;
    min-width: 70px;
    padding: 11px 0;
    color: #c4f0ff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @keyframes void-animation-out {
    0%,
    to {
      opacity: 1;
    }
  }
  .FormRowInput:-webkit-autofill {
    -webkit-text-fill-color: #fce883;
    /* Hack to hide the default webkit autofill */
    transition: background-color 100000000s;
    animation: 1ms void-animation-out;
  }

  .FormRowInput {
    font-size: 16px;
    width: 100%;
    padding: 11px 15px 11px 0;
    color: #fff;
    animation: 1ms void-animation-out;
    background-color: #181818;
    padding: 12px 6px;
    border: none;
    border-radius: 12px;
    outline: none;
  }

  .FormRowInput::placeholder {
    color: #666;
  }
  .InputElement::placeholder {
    color: #666;
  }

  .StripeElement--webkit-autofill {
    background: transparent !important;
  }

  .StripeElement {
    width: 100%;
    padding: 11px 15px;
    background-color: #181818;
  }

  .SubmitButton {
    display: block;
    font-size: 16px;
    width: calc(100% - 30px);
    height: 40px;
    margin: 40px 15px 0;
    background-color: #5588a3;
    border-radius: 12px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 100ms ease-in-out;
    border: none;
  }

  .SubmitButton:active {
    background-color: #446c81;
    transform: scale(0.99);
  }

  .SubmitButton.SubmitButton--error {
    transform: translateY(15px);
  }
  .SubmitButton.SubmitButton--error:active {
    transform: scale(0.99) translateY(15px);
  }

  .SubmitButton:disabled {
    opacity: 0.5;
    cursor: default;
    background-color: #666;
    box-shadow: none;
  }

  .ErrorMessage {
    color: #fff;
    position: absolute;
    display: flex;
    justify-content: center;
    padding: 0 15px;
    font-size: 13px;
    margin-top: 0px;
    width: 100%;
    transform: translateY(-15px);
    opacity: 0;
    animation: fade 150ms ease-out;
    animation-delay: 50ms;
    animation-fill-mode: forwards;
    will-change: opacity, transform;
  }

  .ErrorMessage svg {
    margin-right: 10px;
  }

  .Result {
    margin-top: 50px;
    text-align: center;
    animation: fade 200ms ease-out;
  }

  .ResultTitle {
    color: #fff;
    font-weight: 500;
    margin-bottom: 8px;
    font-size: 17px;
    text-align: center;
  }

  .ResultMessage {
    color: #9cdbff;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 25px;
    line-height: 1.6em;
    text-align: center;
  }

  .ResetButton {
    border: 0;
    cursor: pointer;
    background: transparent;
  }
`;

function App() {
  return (
    <ThemeProvider theme={themeData}>
      <InitialLoad/>
      <GlobalStyle/>
        <CheckLogin/>
        <Navbar/>
        <Switch>
          <Route exact path={routes.home} render={props => <Home {...props}/>}/>
          <Route exact path={routes.faq} render={props => <Faq {...props}/>}/>
          <Route exact path={routes.editorBasic} render={props => <EditorBasic {...props}/>}/>
          <Route exact path={routes.login} render={props => <Login {...props}/>}/>
          <Route path={"/"} render={props => <PassportCheck {...props}/>}/>
        </Switch>
    </ThemeProvider>
  );
}

export default App;
