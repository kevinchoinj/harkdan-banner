import React from 'react';
import styled from 'styled-components';
import DraggableRnd from 'components/editor/DraggableRnd';
import AdvancedEditor from 'components/editor/AdvancedEditor';
import {connect} from 'react-redux';

const StyledCanvasWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

`;
const StyledCanvas = styled.div`
  position: relative;
  border: 1px solid #ddd;
  width: 500px;
  height: 300px;
  background-color: #111;
  > div {
    border: 1px solid rgba(255, 255, 255, .5);
  }
`;

const StyledWrapper = styled.div`
  height: 100vh;predu
  display: flex;
  padding-top: 80px;
  background-color: #3b3b3b;
`;
const StyledOptions = styled.div`
  flex: 1;
`;
const Editor = ({formData}) => {
  return (
    <StyledWrapper>
      <StyledCanvasWrapper>
        <StyledCanvas>
          <DraggableRnd keyValue="valueViewers" data={formData.valueViewers}/>
          <DraggableRnd keyValue="valueAvatar" data={formData.valueAvatar}/>
        </StyledCanvas>
      </StyledCanvasWrapper>
      <StyledOptions>
        options
        <AdvancedEditor/>
      </StyledOptions>
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    formData: state.form,
  };
};

export default connect(mapStateToProps, null)(Editor);
