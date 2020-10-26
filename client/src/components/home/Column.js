import React from 'react';
import styled from 'styled-components';
import SvgIcon from 'components/general/SvgIcon';
import Button from 'components/general/Button';

const StyledObject = styled.div`
  width: 320px;
  margin: 0 1rem;
  max-width: 100%;
  svg {
    fill: ${props => props.theme.colorText};
  }
`;
const StyledObjectHeader = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colorText};
`;
const StyledObjectDetails = styled.div`
  background-color: ${props => props.theme.colorBackgroundElevated};
  padding: 2rem;
  font-size: ${props => props.theme.sizeMedium};
  box-sizing: border-box;
  ul {
    padding: 0;
    margin-bottom: 2rem;
  }
  li {
    list-style: none;
    margin-bottom: 10px;
  }
`;

const StyledHeader = styled.div`
  font-weight: 700;
  font-size: ${props => props.theme.sizeMedium};
`;
const StyledPrice = styled.div`
  font-size: ${props => props.theme.sizeMedium};
`;
const StyledButton = styled(Button)`
  background-color: ${props => props.buttonPrimary && props.theme.colorConfirm};
  width: 100%;
  justify-content: center;
  font-weight: 700;
`;

const Column = ({
  buttonLabel,
  buttonPrimary,
  details,
  price,
  title,
}) => {
  return (
    <StyledObject>
      <StyledObjectHeader>
        <div>
          <StyledHeader>
            {title}
          </StyledHeader>
          <StyledPrice>
            {price}
          </StyledPrice>
        </div>
        <SvgIcon name="facebook"/>
      </StyledObjectHeader>
      <StyledObjectDetails>
        <b>Everything you need…</b>
        <ul>
          {details?.map((value) => {
            return (
              <li key={value}>
                {value}
              </li>
            )
          })}
        </ul>
        <StyledButton
          to="/pricing"
          buttonPrimary={buttonPrimary}
        >
        {buttonLabel}
      </StyledButton>
      </StyledObjectDetails>
    </StyledObject>
  )
}

export default Column;