import React, {useState} from 'react';
import {connect} from 'react-redux';
import Toggle from 'react-toggle';
import {updateAdvancedField} from 'actions/form';
import {StyledWrapper, StyledHeader, StyledContent, StyledRow} from 'components/editor/styling';

const AdvancedEditor = ({
  formData,
  keyValues,
  updateField,
}) => {
  const [expanded, setExpanded] = useState(true);
  const handleChange = (e, keyValue) => {
    if (e.target.checked) {
      updateField(keyValue, {x: 0, y: 0, visible: e.target.checked});
    }
    else {
      updateField(keyValue, {visible: e.target.checked});
    }
  }
  return (
    <StyledWrapper>
      <StyledHeader onClick={() => setExpanded(prev => !prev)}>
        Display/Hide Content
        {expanded ?
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
          }
      </StyledHeader>
      {expanded &&
        <StyledContent>
          {keyValues.map((value) => {
            return (
              <StyledRow key={value.label}>
                <label>
                  {value.label}
                </label>
                <Toggle
                  defaultChecked={formData[value.keyValue]?.visible}
                  onChange={(e) => handleChange(e, value.keyValue)}
                />
              </StyledRow>
            )
          })}
        </StyledContent>
      }
    </StyledWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    formData: state.form,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateField: (keyValue, obj) => dispatch(updateAdvancedField(keyValue, obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedEditor);
