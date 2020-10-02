import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Formik, Form, Field} from 'formik';
import Editor from 'components/home/Editor';
import {StyledButton} from 'components/general/styling';
import {setStreamer} from 'actions/form';

const StyledWrapper = styled.div`
  background-color: ${props => props.theme.colorBackgroundElevated};
  padding: 0 2rem 2rem 2rem;
  border-radius: 12px;
`;
const StyledLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledLabel = styled.div`
  padding: 1rem 0;
  font-weight: 500;
  color: ${props => props.theme.colorTextElevated};
`;
const StyledRow = styled.div`
  display: flex;
  background-color: ${props => props.theme.colorBackgroundEmphasized};
  border: ${props => `1px solid ${props.theme.colorInputBorder}`};
  padding: 0 3px;
  border-radius: 3px;
  input {
    flex: 1;
    background-color: transparent;
    border: none;
    color: ${props => props.theme.colorTextElevated};
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    &:active, &:focus {
      outline: none;
    }
  }
`;

const BannerForm = ({streamer, updateStreamer}) => {
  return (
    <StyledWrapper>
      <Formik
        initialValues={{
          'streamer': ''
        }}
        onSubmit={values => updateStreamer(values.streamer)}
        render={() => (
          <Form>
            <StyledLabelWrapper>
              <StyledLabel>
                Please insert a streamer's name
              </StyledLabel>
              <StyledRow>
                <Field name={`streamer`} autocomplete="off" />
                <StyledButton type="submit" inactive={streamer}>
                  Submit
                </StyledButton>
              </StyledRow>
            </StyledLabelWrapper>

          </Form>
        )}
      />
      {streamer &&
        <Editor/>
      }
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    streamer: state.form.streamer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateStreamer: (value) => dispatch(setStreamer(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BannerForm);