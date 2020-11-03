import React, { useEffect, useMemo } from 'react';
import {connect} from 'react-redux';
import {loginPassport} from 'actions/auth';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  min-height: 100vh;
  width: 100%;
  text-align: center;
`;
const Login = ({location, login}) => {

  const hashString = useMemo(() => {
    if (location) {
      return location.hash;
    }
  }, [location]);
  useEffect(() => {
    const result = {};
    hashString
      .split("#")[1]
      .split("&")
      .forEach((item) => {
        result[item.split("=")[0]] = decodeURIComponent(item.split("=")[1]);
      });
    // const accessToken = btoa(result.access_token);

    const idToken = JSON.parse(atob(result.id_token.split(".")[1]));
    if (idToken) {
      login(idToken);
    }
  }, [login, hashString]);

  return (
   <StyledWrapper>
     login success! (placeholder)
   </StyledWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (values) => dispatch(loginPassport(values)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
