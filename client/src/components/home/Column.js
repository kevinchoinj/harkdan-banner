import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Button from 'components/general/Button';
import {routes} from 'data/routes';

const config = require('config.json');

const StyledWrapper = styled.div`
  width: 320px;
  margin: 0 1rem;
  max-width: 100%;
  margin-bottom: 1rem;
  svg {
    fill: ${props => props.theme.colorText};
  }
`;
const StyledObjectHeader = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colorText};
  margin-bottom: 1rem;
`;
const StyledObjectDetails = styled.div`
  background-color: ${props => props.theme.colorBackgroundElevated};
  border-radius: 12px;
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
  font-size: 2rem;
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
  loggedIn,
  price,
  title,
}) => {
  return (
    <StyledWrapper>
      <StyledObjectDetails>
      <StyledObjectHeader>
        <div>
          <StyledPrice>
            {price}
          </StyledPrice>
          <StyledHeader>
            {title}
          </StyledHeader>
        </div>
      </StyledObjectHeader>
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
        {loggedIn ?
          <StyledButton
            to={routes.checkout}
            buttonPrimary={buttonPrimary}
          >
            {buttonLabel}
          </StyledButton>
          :
          <StyledButton
            href={`https://id.twitch.tv/oauth2/authorize?client_id=${config.TWITCH_AUTH_CLIENT_ID}&claims={"id_token":{"preferred_username":null}}&response_type=token+id_token&redirect_uri=${window.location.origin}/login&scope=openid`}
            buttonPrimary={buttonPrimary}
          >
            {buttonLabel}
          </StyledButton>
        }
      </StyledObjectDetails>
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};
export default connect(mapStateToProps, null)(Column);