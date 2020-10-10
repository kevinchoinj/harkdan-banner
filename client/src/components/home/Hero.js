import React from 'react';
import styled from 'styled-components';
import video from 'data/somegarbo.mp4';
import {Formik, Form, Field} from 'formik';
import {setStreamer} from 'actions/form';
import {connect} from 'react-redux';

const Video = ({className}) => (
  <video
    playsInline
    autoPlay
    muted
    loop
    className={className}
  >
    <source
      src={video}
      type="video/mp4"
    />
  </video>
);
const StyledVideo = styled(Video)`
  position: absolute;
  top: 0;
  right: 0;
  min-height: 100%;

  width: auto;
  height: auto;
  background-size: cover;
  background-position: center center;
`;

const StyledWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;
const StyledContentContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 38.2%;
  height: 100%;
  color: ${props => props.theme.colorText};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colorBackground};
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  h1 {
    font-weight: 400;
    font-size: 4rem;
  }
  input {
    background-color: transparent;
    outline: none;
    height: 32px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colorText};
    color: ${props => props.theme.colorText};
    font-size: 20px;
  }
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    stroke: ${props => props.theme.colorText};
    height: 32px;
    svg {
      height: 100%;
    }
  }
  form {
    display: flex;
    align-items: center;
    margin-top: 2rem;
  }
`;
const Hero = ({streamer, updateStreamer}) => {
  return (
    <StyledWrapper>
      <StyledVideo/>
      <StyledContentContainer>
        <StyledContent>
          <h1>
            Micro Dan's<br/> Sweatshop
          </h1>
          <p>Enter a streamer's name to get started</p>
          <Formik
            initialValues={{
              'streamer': 'xqcow'
            }}
            onSubmit={values => updateStreamer(values.streamer)}
            render={() => (
              <Form>
                <Field name={`streamer`} autocomplete="off" />
                <button type="submit" inactive={streamer}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="15" y1="16" x2="19" y2="12" />
                    <line x1="15" y1="8" x2="19" y2="12" />
                  </svg>
                </button>
              </Form>
            )}
          />
        </StyledContent>
      </StyledContentContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Hero);