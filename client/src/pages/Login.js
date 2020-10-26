import React from 'react';
import {Formik, Field} from 'formik';
import {StyledWrapper, StyledLeft, StyledRight, StyledForm} from 'components/auth/styling';

const Login = () => {
  return (
    <StyledWrapper>
      <StyledLeft>
        Left
      </StyledLeft>
      <StyledRight>

      <Formik
        enableReinitialize
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={values => {
          console.log(values)
        }}
      >
        {() =>
          <StyledForm>
            <label for="Username">Username</label>
            <Field name="username"/>
            <label for="Password">Password</label>
            <Field name="password" type="password"/>
            <button type="submit">Login</button>
          </StyledForm>
        }
      </Formik>
      </StyledRight>
    </StyledWrapper>
  )
}

export default Login;