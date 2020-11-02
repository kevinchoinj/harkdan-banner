import React from 'react';
import {connect} from 'react-redux';
import {Formik, Field} from 'formik';
import {StyledWrapper, StyledCircle, StyledLeft, StyledRight, StyledForm} from 'components/auth/styling';
import {registerPassport} from 'actions/auth';

const Register = ({register}) => {
  return (
    <StyledWrapper>
      <StyledCircle/>
      <StyledLeft>
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
          console.log(values);
          // register(values);
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

const mapDispatchToProps = (dispatch) => {
  return {
    register: (values) => dispatch(registerPassport(values)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
