import React from 'react';
import {connect} from 'react-redux';
import PrivateRoutes from 'routes/PrivateRoutes';
import Login from 'pages/Login';

const PassportCheck = ({loggedIn}) => {
  return loggedIn && (
    <PrivateRoutes/>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

export default connect (mapStateToProps, null)(PassportCheck);