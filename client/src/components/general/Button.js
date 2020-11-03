import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledButton = styled.button`
  display: inline-flex;
  padding: 14px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  font-size: ${props => props.theme.sizeMedium};
  background-color: ${props => props['data-primary'] ? props.theme.colorConfirm : props.theme.colorPrimary};
  position:relative;
  &:hover {
    background-color: ${props => props['data-primary'] ? props.theme.colorConfirmHover : props.theme.colorPrimaryHover};
  }
`;
const StyledWrapper = styled.div`
  position: relative;
  align-self: flex-start;
  transition: transform .2s ease;
`;
const StyledShadow = styled.div`
  background-color: ${props => props.theme.colorPrimaryLight};
  position: absolute;
  left: 5px;
  top: 5px;
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;
const StyledLink = styled(Link)`
  display: inline-flex;
  padding: 14px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-size: ${props => props.theme.sizeMedium};
  background-color: ${props => props['data-primary'] ? props.theme.colorConfirm : props.theme.colorPrimary};
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  position:relative;
  &:hover {
    text-decoration: none;
    background-color: ${props => props['data-primary'] ? props.theme.colorConfirmHover : props.theme.colorPrimaryHover};
  }
`;
const StyledOutLink = styled.a`
  display: inline-flex;
  padding: 14px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-size: ${props => props.theme.sizeMedium};
  background-color: ${props => props['data-primary'] ? props.theme.colorConfirm : props.theme.colorPrimary};
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  position:relative;
  &:hover {
    text-decoration: none;
    background-color: ${props => props['data-primary'] ? props.theme.colorConfirmHover : props.theme.colorPrimaryHover};
  }
`;
const Button = ({
  buttonPrimary,
  children,
  className,
  href,
  onClick,
  to,
}) => {
  if (onClick) {
    return (
      <StyledWrapper>
        <StyledShadow/>
        <StyledButton
          data-primary={buttonPrimary}
          className={className}
          onClick={() => onClick()}
        >
          {children}
        </StyledButton>
      </StyledWrapper>
    );
  }
  else if (to) {
    return (
      <StyledWrapper>
        <StyledShadow/>
        <StyledLink
          to={to}
          data-primary={buttonPrimary}
          className={className}
        >
          {children}
        </StyledLink>
      </StyledWrapper>
    );
  }
  else if (href) {
    return (
    <StyledWrapper>
      <StyledShadow/>
      <StyledOutLink
        href={href}
        data-primary={buttonPrimary}
        className={className}
      >
        {children}
      </StyledOutLink>
    </StyledWrapper>
    )
  }
  return (
    <StyledWrapper>
    <StyledShadow/>
      <StyledButton
        className={className}
      >
        {children}
      </StyledButton>
    </StyledWrapper>
  );
}

export default Button;
