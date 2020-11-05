import React from 'react';
import {connect} from 'react-redux';
import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';
import {routes} from 'data/routes';
import logo from 'data/edc.webp';
import {logout} from 'actions/auth';
const config = require('config.json');

const animationOpen = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0px);
  }
`;
const animationClose = keyframes`
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(100%);
  }
`;

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: ${props => props.theme.colorBackgroundElevated};
  width: 100%;
  font-size: ${props => props.theme.fontSizeNav};
  height: ${props => props.theme.heightNavbar};
  display: flex;
  align-items: center;
`;
const StyledContainer = styled.nav`
  display: flex;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  overflow: hidden;
  color: ${props => props.theme.colorTextElevated};
  margin: 0 1rem;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-color: ${props => props.theme.colorTextElevated};
    visibility: hidden;
    transition: .4s ease;
    animation: ${animationClose} .4s ease;
  }
  &:hover {
    &:before {
      transform: translateX(0);
      animation: ${animationOpen} .4 ease;
      transition: .4s ease;
      visibility: visible;
    }
  }
`;
const StyledOutLink = styled.a`
  text-decoration: none;
  overflow: hidden;
  color: ${props => props.theme.colorTextElevated};
  margin: 0 1rem;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-color: ${props => props.theme.colorTextElevated};
    visibility: hidden;
    transition: .4s ease;
    animation: ${animationClose} .4s ease;
  }
  &:hover {
    &:before {
      transform: translateX(0);
      animation: ${animationOpen} .4 ease;
      transition: .4s ease;
      visibility: visible;
    }
  }
`;
const StyledLogout = styled.div`
  overflow: hidden;
  color: ${props => props.theme.colorTextElevated};
  cursor: pointer;
  margin: 0 1rem;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-color: ${props => props.theme.colorTextElevated};
    visibility: hidden;
    transition: .4s ease;
    animation: ${animationClose} .4s ease;
  }
  &:hover {
    &:before {
      transform: translateX(0);
      animation: ${animationOpen} .4 ease;
      transition: .4s ease;
      visibility: visible;
    }
  }
`;
const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    max-width: 50%;
    height: 28px;
    object-fit: contain;
  }
`;

const Navbar = ({loggedIn, logOut}) => {
  return (
    <StyledWrapper>
      <Link to={routes.home}>
        <StyledLogo>
          <img src={logo} alt="microdan"/>
        </StyledLogo>
        </Link>
      <StyledContainer>
        <StyledLink to={routes.home}>
          Home
        </StyledLink>
        <StyledLink to={routes.faq}>
          FAQ
        </StyledLink>

        {loggedIn &&
          <StyledLink to={routes.editorBasic}>
            basEditor
          </StyledLink>
        }
        <StyledLink to={routes.editor}>
          Editor
        </StyledLink>

        {loggedIn ?
          <StyledLogout onClick={() => logOut()}>
            Log Out
          </StyledLogout>
          :
          <StyledOutLink
            href={`https://id.twitch.tv/oauth2/authorize?client_id=${config.TWITCH_AUTH_CLIENT_ID}&claims={"id_token":{"preferred_username":null}}&response_type=token+id_token&redirect_uri=${window.location.origin}/login&scope=openid`}
          >
            Login
          </StyledOutLink>
        }
        {loggedIn &&
          <StyledLink to={routes.checkout}>
            Checkout
          </StyledLink>
        }
      </StyledContainer>
    </StyledWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (values) => dispatch(logout(values)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
