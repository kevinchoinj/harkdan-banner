import React from 'react';
import styled from 'styled-components';
import {Formik, Form, Field} from 'formik';

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
const StyledLeft = styled.div`
  width: 38.2%;
  background-color: #000;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
const StyledRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledForm = styled(Form)`
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: left;
  background-color: #262626;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 12px;
  label {
    font-size: 14px;
  }
  input {
    outline: 0;
    background-color: #393939;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    color: #ddd;
  }
  button {
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      background: #43A047;
    }
  }
`;

const Register = () => {
  return (
    <StyledWrapper>
      <StyledLeft>
        Left
      </StyledLeft>
      <StyledRight>

      <Formik
        enableReinitialize
        initialValues={{
          email: '',
          username: '',
          password: '',
        }}
        onSubmit={values => {
          console.log(values)
        }}
      >
        {() =>
          <StyledForm>
            <label for="Email">Email</label>
            <Field name="email"/>
            <label for="Username">Username</label>
            <Field name="username"/>
            <label for="Password">Password</label>
            <Field name="password" type="password"/>
            <button type="submit">Register</button>
          </StyledForm>
        }
      </Formik>
      </StyledRight>
    </StyledWrapper>
  )
}

export default Register;