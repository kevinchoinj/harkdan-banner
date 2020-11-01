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
            <Field name="email" placeholder="Email"/>
            <Field name="password" type="password" placeholder="Password"/>
            <button type="submit">Register</button>
          </StyledForm>
        }
      </Formik>
      </StyledRight>
    </StyledWrapper>
  )
}

export default Register;