import React from 'react';
import styled from 'styled-components';
import Draggable from 'components/editor/Draggable';

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
`;

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  padding-top: 80px;
`;
const StyledOptions = styled.div`
  flex: 1;
`;
const Editor = () => {
  return (
    <StyledWrapper>
      <StyledCanvasWrapper>
        <StyledCanvas>
          <Draggable/>
        </StyledCanvas>
      </StyledCanvasWrapper>
      <StyledOptions>
        options
      </StyledOptions>
    </StyledWrapper>
  )
}

export default Editor;