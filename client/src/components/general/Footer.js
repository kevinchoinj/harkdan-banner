import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {routes} from 'data/routes';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 0;
  background-color: ${props => props.theme.colorBackgroundElevated};
  position: relative;
  z-index: 2;
  font-size: ${props => props.theme.fontSizeNav};
  width: 100%;
  height: 80px;
  align-items: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colorTextElevated};
  margin: 0 1rem;
`;

const Footer = () => {
  return (
    <StyledWrapper>
      <StyledLink to={routes.contact}>
        Contact
      </StyledLink>
      <StyledLink to={routes.copyright}>
        Copyright Claims
      </StyledLink>
      <StyledLink to={routes.tos}>
        Terms of Use
      </StyledLink>
    </StyledWrapper>
  )
}

export default Footer;