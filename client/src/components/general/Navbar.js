import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';
import {routes} from 'data/routes';
import logo from 'data/edc.webp';

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
  justify-content: space-between;
  padding: 0 2rem;
  background-color: ${props => props.theme.colorBackgroundElevated};
  z-index: 2;
  width: 100%;
  font-size: ${props => props.theme.fontSizeNav};
  height: 80px;
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
const StyledLogo = styled.div`
  img {
    max-width: 50%;
    height: 32px;
    object-fit: contain;
  }
`;

const Navbar = () => {
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
        <StyledLink to={routes.editor}>
          AdvEditor
        </StyledLink>
        <StyledLink to={routes.privacy}>
          Privacy
        </StyledLink>
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Navbar;