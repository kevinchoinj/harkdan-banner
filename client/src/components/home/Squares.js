import React from 'react';
import {StyledWrapper, StyledContainer} from 'components/general/styling';
import styled from 'styled-components';
import SvgIcon from 'components/general/SvgIcon';

const StyledObject = styled.div`
  flex: 0 0 33%;
  display: flex;
  justify-content: flex-start;
  margin: 2rem 0;
  align-items: center;
  @media screen and (max-width: 992px) {
    flex: 0 0 50%;
  }
  @media screen and (max-width: 768px) {
    flex: 1 1 auto;
  }
`;
const StyledSquaresContainer = styled(StyledContainer)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 4rem;
  @media screen and (max-width: 992px) {
    margin-top: 0;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const StyledIconContainer = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 12px;
  background-color: ${props => props.theme.colorBackgroundElevated};
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: ${props => props.color};
    height: 62.8%;
    width: 62.8%;
  }
`;
const StyledLabel = styled.div`
  font-weight: 700;
  font-size: 2rem;
`;

const objectsArray = [
  {label: 'Micro', subLabel: 'Dan', color: '#85f', icon: 'time'},
  {label: 'No', subLabel: 'Japan', color: '#09f', icon: 'check'},
  {label: 'Slumlord', subLabel: 'Man', color: '#0cf', icon: 'checkbox'},
  {label: 'Test4', subLabel: 'Test', color: '#0c8', icon: 'chat'},
  {label: 'Test5', subLabel: 'Test', color: '#fc0', icon: 'thumbsup'},
  {label: 'Test6', subLabel: 'Test', color: '#f36', icon: 'flag'},
]
const Squares = () => {
  return (
    <StyledWrapper>
      <StyledSquaresContainer>
        {objectsArray.map((value) => {
          return (
            <StyledObject key={value.label}>
              <StyledIconContainer color={value.color}>
                <SvgIcon name={value.icon}/>
              </StyledIconContainer>
              <StyledLabel>
                {value.label}
                <div style={{color: value.color}}>
                  {value.subLabel}
                </div>
              </StyledLabel>
            </StyledObject>
          )
        })}
      </StyledSquaresContainer>
    </StyledWrapper>
  )
}

export default Squares;