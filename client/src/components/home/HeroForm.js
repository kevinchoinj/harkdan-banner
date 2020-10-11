import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import InputColor from 'components/home/InputColor';
import {StyledButton} from 'components/general/styling';
import Preview from 'components/home/Preview';

const StyledWrapper = styled.div`
  padding: 1rem 0 0 0;
  color: ${props => props.theme.colorTextElevated};
  position: absolute;
  width: 100%;
  height: 100%;
  padding-left: 38.2%;
  left: -61.8%;
  top: 0;
  transform: ${props => props.streamerSelected && 'translateX(61.8%)'};
  background-color: ${props => props.theme.colorBackgroundElevated};
  transition: .4s ease;
  padding-top: ${props => props.theme.heightNavbar};
`;
const StyledContainer = styled.div`
  padding: 2rem;
`;

const HeroForm = ({streamer}) => {
  return (
    <StyledWrapper streamerSelected={!!streamer}>
      <StyledContainer>
      <Preview/>
      <h2>Style your banner</h2>
      <InputColor
        keyValue="background"
        label="Background Color"
      />
      <InputColor
        keyValue="textColor"
        label="Text Color"
      />
      <StyledButton>
        Create Banner
      </StyledButton>
      </StyledContainer>
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    streamer: state.form.streamer,
  };
};

export default connect(mapStateToProps, null)(HeroForm);