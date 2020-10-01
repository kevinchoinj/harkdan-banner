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

const Navbar = () => {
  return (
    <StyledWrapper>
      <StyledLink to={routes.home}>
        Home
      </StyledLink>
      <StyledLink to={routes.faq}>
        FAQ
      </StyledLink>
    </StyledWrapper>
  )
}

export default Navbar;