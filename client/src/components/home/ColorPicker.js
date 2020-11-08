import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const StyledButton = styled.div`
  height: 25px;
  width: 25px;
  margin-left: 1rem;
  border: 1px solid ${props => props.theme.colorTextElevated};
  border-radius: 3px;
  cursor: pointer;
`;
const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  z-index: 2;
`;

const ColorPicker = ({color, onChangeComplete}) => {
  const [display, setDisplay] = useState(false);

  const inputRef = useRef(null);

  const closeMenu = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setDisplay(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", closeMenu, false);
    return () => {
      document.removeEventListener("click", closeMenu, false);
    };
  }, []);

  const toggleDisplay = (e) => {
    e.preventDefault();
    setDisplay(!display);
  };

  return (
    <StyledWrapper ref={inputRef}>
      {color}
      <StyledButton
        data-testid="color-picker-button"
        onClick={(e) => toggleDisplay(e)}
        style={{
          backgroundColor: color,
        }}
      />
      {display &&
        <StyledContainer data-testid="color-picker-overlay">
          <ChromePicker
            color={color}
            onChangeComplete={onChangeComplete}
          />
        </StyledContainer>
      }
    </StyledWrapper>
  )
}

export default ColorPicker;