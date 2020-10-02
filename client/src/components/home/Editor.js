import React from 'react';
import styled from 'styled-components';
import InputColor from 'components/home/InputColor';
import {StyledButton} from 'components/general/styling';
import Preview from 'components/home/Preview';

const StyledWrapper = styled.div`
  padding: 1rem 0 0 0;
  color: ${props => props.theme.colorTextElevated};
  h2 {
    font-weight: 500;
  }
`;

const Editor = () => {
  return (
    <StyledWrapper>
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

    </StyledWrapper>
  )
}

export default Editor;