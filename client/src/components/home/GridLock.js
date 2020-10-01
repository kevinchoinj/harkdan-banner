import React from 'react';
import styled from 'styled-components';
import placeholder from 'data/placeholder.png';
import GridLockItem from 'components/home/GridLockItem';

const StyledWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  width: 110%;
  height: 110%;
  top: -55%;
  left: -55%;
  display: grid;
  grid-template-columns: repeat(50,2%);
  grid-template-rows: repeat(50,2%);
  opacity: .5;
`;

const GridLock = () => {
  return (
    <StyledWrapper>
      <GridLockItem  gridArea="10 / 1 / 26 / 7" image={`url(${placeholder})`}/>
      <GridLockItem  gridArea="1 / 18 / 9 / 27" image={`url(${placeholder})`}/>
      <GridLockItem  gridArea="1 / 36 / 14 / 42" image={`url(${placeholder})`}/>
      <GridLockItem  gridArea="13 / 11 / 32 / 18" image={`url(${placeholder})`}/>
      <GridLockItem  gridArea="17 / 32 / 32 / 38" image={`url(${placeholder})`}/>
      <GridLockItem  gridArea="20 / 46 / 28 / 51" image={`url(${placeholder})`}/>
      <GridLockItem  gridArea="43 / 1 / 51 / 10" image={`url(${placeholder})`}/>
      <GridLockItem  gridArea="38 / 14 / 46 / 22" image={`url(${placeholder})`}/>
      <GridLockItem  gridArea="40 / 26 / 51 / 32" image={`url(${placeholder})`}/>
    </StyledWrapper>
  )
}

export default GridLock;