import React from 'react';
import {connect} from 'react-redux';
import {setStylingValue} from 'actions/form';
import ColorPicker from 'components/home/ColorPicker';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  label {
    margin-bottom: 1rem;
  }
`;

const InputColor = ({keyValue, label, styling, updateStyling}) => {
  return (
    <StyledWrapper>
      <label>
        {label}
      </label>
      <ColorPicker
        color={styling[keyValue]}
        onChangeComplete={(e) => updateStyling(keyValue, e.hex)}
      />
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    styling: state.form.styling,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateStyling: (keyValue, value) => dispatch(setStylingValue(keyValue, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputColor);