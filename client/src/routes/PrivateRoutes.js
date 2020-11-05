import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Editor from 'pages/Editor';
import Checkout from 'pages/Checkout';
import EditorBasic from 'pages/EditorBasic';
import {routes} from 'data/routes';

const PrivateRoutes = ({loggedIn}) => {
  return (
    <div>
      <Switch>
        <Route exact path={routes.editor} render={props =><Editor {...props}/>}/>
        <Route exact path={routes.editorBasic} render={props => <EditorBasic {...props}/>}/>
        <Route exact path={routes.checkout} render={props => <Checkout {...props}/>}/>
      </Switch>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};
export default connect(mapStateToProps, null)(PrivateRoutes);