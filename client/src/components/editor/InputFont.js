import React from 'react';
import {connect} from 'react-redux';
import {fontOptions} from 'data/fontOptions';
import WebFont from 'webfontloader';
import {updateAdvancedField} from 'actions/form';
import {actionTaken} from 'actions/history';
import {
  StyledRow,
} from 'components/editor/styling';

const InputFont = ({formData, value, saveHistory, updateField}) => {

  const handleFontChange = (val) => {
    updateField(value.keyValue, {fontFamily: val});
    saveHistory(`Font ${val} for ${value.keyValue}`)
    WebFont.load({
      google: {
        families: [val],
      },
    });
  }

  return (
    <StyledRow>
      <label>
        {value.label}
      </label>
      <select
        onChange={(e) => handleFontChange(e.target.value)}
        value={formData[value.keyValue].fontFamily}
      >
        {fontOptions.map(value => (
          <option
            value={value}
            key={value}
          >
            {value}
          </option>
        ))}
      </select>
    </StyledRow>
  )
}

const mapStateToProps = (state) => {
  return {
    formData: state.form,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveHistory: (actionName) => dispatch(actionTaken(actionName)),
    updateField: (keyValue, obj) => dispatch(updateAdvancedField(keyValue, obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputFont);