import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {routes} from 'data/routes';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 6px 0;
  background-color: ${props => props.theme.colorBackgroundElevated};
  position: relative;
  z-index: 2;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colorTextElevated};
  margin: 0 1rem;
`;
const StyledOption = styled.div`
  color: ${props => props.theme.colorTextElevated};
  margin: 0 1rem;
  cursor: pointer;
`;

const Navbar = ({darkMode, setDarkMode}) => {
  return (
    <StyledWrapper>
      <StyledLink to={routes.home}>
        Home
      </StyledLink>
      <StyledLink to={routes.faq}>
        FAQ
      </StyledLink>
      <StyledOption onClick={() => setDarkMode(prev => !prev)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </StyledOption>
    </StyledWrapper>
  )
}

export default Navbar;