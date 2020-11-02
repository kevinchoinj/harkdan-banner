import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {routes} from 'data/routes';

const StyledButton = styled(Link)`
  right: 1rem;
  bottom: 1rem;
  background-color: ${props => props.theme.colorPrimary};
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 3px;
  text-decoration: none;
  color: #fff;
  &:hover {
    background-color: ${props => props.theme.colorPrimaryHover};
  }
`;
const ButtonAdvanced = ({formData}) => {
  return (
    <StyledButton
      to={routes.checkout}
    >
      Advanced
    </StyledButton>
  )
}

const mapStateToProps = (state) => {
  return {
    formData: state.form,
  };
};

export default connect(mapStateToProps, null)(ButtonAdvanced);
