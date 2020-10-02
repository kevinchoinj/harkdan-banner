import React from 'react';
import preview from 'data/placeholder.png';
import styled from 'styled-components';
import {connect} from 'react-redux';

const StyledWrapper = styled.div`
  margin-top: 1rem;
  img {
    max-width: 600px;
    height: 140px;
    object-fit: contain;
  }
`;
const Preview = ({streamer, styling}) => {
  return (
    <StyledWrapper>
      <img src={preview} alt="microdan"/>
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    streamer: state.form.streamer,
    styling: state.form.styling,
  };
};

export default connect(mapStateToProps, null)(Preview);