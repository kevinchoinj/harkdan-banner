import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Formik, Form, Field} from 'formik';
import {setStreamer} from 'actions/form';
import {history} from 'store';
import exampleImage from 'data/example.jpg';
import exampleMenu from 'data/menu.png';

const StyledWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 3;
  width: 100%;
  padding: 4rem;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  h1 {
    margin: 0;
    margin-bottom: 6rem;
    font-size: 5rem;
    @media screen and (max-width: 992px) {
      font-size: 3.5rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
  input {
    background-color: transparent;
    outline: none;
    border: none;
    background-color: ${props => props.theme.colorBackgroundEmphasized};
    padding: 12px;
    border-radius: 12px;
    color: ${props => props.theme.colorText};
    font-size: 16px;
    @media screen and (max-width: 992px) {
      background-color: ${props => props.theme.colorBackground};
      margin-bottom: .5rem;
    }
  }
  button {
    right: 1rem;
    bottom: 1rem;
    background-color: ${props => props.theme.colorConfirm};
    border-radius: 8px;
    padding: 12px 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 3px;
    color: #fff;
    border: none;
    font-size: 14px;
    transition: .2s ease;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    &:hover {
      background-color: ${props => props.theme.colorConfirmHover};
    }
  }
  form {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    @media screen and (max-width: 992px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media screen and (max-width: 992px) {
    padding: 0 2rem;
  }
`;
const StyledImage = styled.div`
  position: relative;
  right: 0;
  top: 0;
  margin-left: 60%;
  height: 100%;
  padding-right: 4rem;
  display: flex;
  align-items: center;
  > img {
    width: 100%;
    border-radius: 10px;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
const StyledMenuImage = styled.div`
  position: absolute;
  left: -5vw;
  bottom: 20%;
  height: 15vw;
  img {
    object-fit: contain;
    height: 100%;
  }
`;
const StyledCircle = styled.div`
  height: 200vh;
  width: 200vh;
  border-radius: 50%;
  position: absolute;
  right: -75vh;
  top: -100vh;
  background-color: ${props => props.theme.colorBackgroundElevated};
`;


const Hero = ({streamer, updateStreamer}) => {
  return (
    <StyledWrapper>
      <StyledCircle/>
      <StyledImage>
        <img src={exampleImage} alt="example" />
        <StyledMenuImage>
          <img src={exampleMenu} alt="example menu"/>
        </StyledMenuImage>
      </StyledImage>
      <StyledContent>
        <h1>
          Create dynamic<br/> banners with<br/> <span style={{color:"#09f"}}>live data</span>
        </h1>
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
              <Field name={`streamer`} autoComplete="off" />
              <button type="submit" inactive={streamer}>
                Get Started
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