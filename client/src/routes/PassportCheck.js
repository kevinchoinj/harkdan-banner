import React from 'react';
import {connect} from 'react-redux';
import PrivateRoutes from 'routes/PrivateRoutes';
import Login from 'pages/Login';

const PassportCheck = ({loggedIn}) => {
  return loggedIn ? (
    <PrivateRoutes/>
  ) : <Login/>
}

const mapStateToProps = (state) => {
  return {
    loggedIn: true,
  };
};

export default connect (mapStateToProps, null)(PassportCheck);