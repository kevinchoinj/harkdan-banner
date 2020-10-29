import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  z-index: -1;
  > div {
    flex: 1;
    border-right: 1px solid #555;
    &:last-child {
      border-right: none;
    }
  }

`;
const StyledItem = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Grid = () => {
  return (
    <StyledWrapper>
      <div/>
      <StyledItem/>
      <StyledItem/>
      <StyledItem/>
    </StyledWrapper>
  );
};

export default Grid;