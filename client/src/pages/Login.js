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
            <Field name="email" placeholder="Email"/>
            <Field name="password" type="password" placeholder="Password"/>
            <button type="submit">Login</button>
          </StyledForm>
        }
      </Formik>
      </StyledRight>
    </StyledWrapper>
  )
}

export default Login;