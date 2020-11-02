import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Editor from 'pages/Editor';
import Checkout from 'pages/Checkout';
import {routes} from 'data/routes';

const PrivateRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={routes.editor} render={props => <Editor {...props}/>}/>
        <Route exact path={routes.checkout} render={props => <Checkout {...props}/>}/>
      </Switch>
    </div>
  )
}

export default PrivateRoutes;