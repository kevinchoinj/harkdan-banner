import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 6px 0;
  background-color: ${props => props.theme.colorBackgroundElevated};
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colorTextElevated};
  margin: 0 1rem;
`;

const Navbar = () => {
  return (
    <StyledWrapper>
      <StyledLink to="/">
        Home
      </StyledLink>
      <StyledLink to="/faq">
        Faq
      </StyledLink>
    </StyledWrapper>
  )
}

export default Navbar;