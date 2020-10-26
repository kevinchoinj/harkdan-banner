import React from 'react';
import {Formik, Field} from 'formik';
import {StyledWrapper, StyledLeft, StyledRight, StyledForm} from 'components/auth/styling';

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