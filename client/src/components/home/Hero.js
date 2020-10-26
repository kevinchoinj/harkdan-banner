import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import video from 'data/somegarbo.mp4';
import {Formik, Form, Field} from 'formik';
import {setStreamer} from 'actions/form';
import {history} from 'store';

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
const StyledWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
`;
const StyledContentContainer = styled.div`
  flex: 1;
  background-color: ${props => props.theme.colorBackground};
`;
const StyledGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10%, 1fr));
  border-bottom: 1px solid #555;
  margin-top: ${props => props.theme.heightNavbar};
  pointer-events: none;
  z-index: 0;
  > div {
    position: relative;
    padding-top: 100%;
    border-top: 1px solid #555;
    border-left: 1px solid #555;
  }
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  padding: 4rem;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  h1 {
    margin: 0;
    font-weight: 400;
    font-size: 6rem;
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
      <StyledContentContainer>
      </StyledContentContainer>
      <StyledGrid>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
        <div/><div/><div/><div/><div/>
      </StyledGrid>
      <StyledContent>
          <h1>
            Create dynamic<br/> banners with realtime data
          </h1>
          <p>Enter a streamer's name to get started</p>
          <Formik
            initialValues={{
              'streamer': 'xqcow'
            }}
            onSubmit={values => {
              updateStreamer(values.streamer);
              history.push('/editor')
            }}
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