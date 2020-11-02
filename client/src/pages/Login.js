import React from 'react';
import {connect} from 'react-redux';
import {Formik, Field} from 'formik';
import {StyledWrapper, StyledCircle, StyledLeft, StyledRight, StyledForm} from 'components/auth/styling';
import {loginPassport} from 'actions/auth';

const Login = ({login}) => {
  return (
    <StyledWrapper>
      <StyledCircle/>
      <StyledLeft>
      </StyledLeft>
      <StyledRight>

      <Formik
        enableReinitialize
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={values => {
          console.log(values);
          // login(values);
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

const mapDispatchToProps = (dispatch) => {
  return {
    login: (values) => dispatch(loginPassport(values)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
