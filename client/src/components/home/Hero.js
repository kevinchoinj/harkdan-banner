import React, {useState} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Formik, Form, Field} from 'formik';
import {setStreamer} from 'actions/form';
import {history} from 'store';
import {Rnd} from 'react-rnd';
import microImage from 'data/micro.jpg';

const StyledWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
`;
const StyledContentContainer = styled.div`
  flex: 1;
  position: relative;
  z-index: 2;
  background-color: ${props => props.theme.colorBackground};
`;
const StyledGridWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  border-bottom: 1px solid #555;
  img {
    height: 100%;
    width: 100%;
    pointer-events: none;
    object-fit: cover;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
const StyledGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10%, 1fr));
  margin-top: ${props => props.theme.heightNavbar};
  pointer-events: none;
  position: relative;
  z-index: 0;
  pointer-events: none;
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
  z-index: 3;
  width: 100%;
  padding: 4rem;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  pointer-events: none;
  h1 {
    margin: 0;
    font-size: 6rem;
    @media screen and (max-width: 992px) {
      font-size: 2rem;
    }
  }
  input {
    pointer-events: auto;
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
const genericHandleStyling = {
  height: '10px',
  width: '10px',
  border: '1px solid rgba(255, 255, 255, .2)',
}

const Hero = ({streamer, updateStreamer}) => {
  const [x, setX] = useState(50);
  const [y, setY] = useState(80);
  const [width, setWidth] = useState(225);
  const [height, setHeight] = useState(300);
  return (
    <StyledWrapper>
      <StyledContentContainer>
      </StyledContentContainer>

      <StyledGridWrapper>
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
        <Rnd
          size={{ width: width,  height: height }}
          position={{ x: x, y: y }}
          onDragStop={(e, d) => {
            setX(d.x);
            setY(d.y);
          }}
          onResize={(e, direction, ref) => {
            setWidth(ref.style.width);
            setHeight(ref.style.height);
          }}
          resizeHandleStyles = {
            {
              bottomLeft: genericHandleStyling,
              bottomRight: genericHandleStyling,
              topLeft: genericHandleStyling,
              topRight: genericHandleStyling,
          }}
        >
          <img src={microImage} alt="micro dan"/>
        </Rnd>
      </StyledGridWrapper>
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