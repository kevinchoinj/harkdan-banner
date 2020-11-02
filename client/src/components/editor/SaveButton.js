import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const StyledButton = styled.div`
  right: 1rem;
  bottom: 1rem;
  background-color: ${props => props.theme.colorConfirm};
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 3px;
  &:hover {
    background-color: ${props => props.theme.colorConfirmHover};
  }
`;
const SaveButton = ({formData}) => {
  return (
    <StyledButton
      onClick={() => {
        alert(JSON.stringify(formData));
        console.log(formData)
      }}
    >
      Save
    </StyledButton>
  )
}

const mapStateToProps = (state) => {
  return {
    formData: state.form,
  };
};

export default connect(mapStateToProps, null)(SaveButton);
