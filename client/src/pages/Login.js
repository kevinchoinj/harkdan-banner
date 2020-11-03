import React, { useEffect, useMemo } from 'react';
import {connect} from 'react-redux';
import {loginPassport} from 'actions/auth';

const Login = ({location, login}) => {

  const queryParams = useMemo(() => {
    if (location) {
      return location.query;
    }
  }, [location]);
  useEffect(() => {
    if (queryParams) {
      login(queryParams);
    }
  }, [login, queryParams]);

  return (
   <div>
     login success!
   </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (values) => dispatch(loginPassport(values)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
