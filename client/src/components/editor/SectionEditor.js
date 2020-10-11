import React, {useState} from 'react';
import {connect} from 'react-redux';
import {updateAdvancedField} from 'actions/form';
import {formSectionHovered} from 'actions/mouse';
import Toggle from 'react-toggle';
import {StyledWrapper, StyledHeader, StyledContent, StyledRow} from 'components/editor/styling';

const SectionEditor = ({
  draggableHovered,
  formData,
  hoverItem,
  updateField,
  value,
}) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (e, keyValue) => {
    if (e.target.checked) {
      updateField(keyValue, {x: 0, y: 0, visible: e.target.checked});
    }
    else {
      updateField(keyValue, {visible: e.target.checked});
    }
  }
  return (
    <StyledWrapper
      onMouseEnter={() => hoverItem(value.keyValue)}
      onMouseLeave={() => hoverItem(null)}
    >
      <StyledHeader
        onClick={() => setExpanded(prev => !prev)}
        draggableHovered={draggableHovered === value.keyValue}
      >
        {value.label}
        {expanded ?
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
          }
      </StyledHeader>
      {expanded &&
        <StyledContent>
        <StyledRow>
          <label>
            Show/Hide
          </label>
          <Toggle
            defaultChecked={formData[value.keyValue]?.visible}
            onChange={(e) => handleChange(e, value.keyValue)}
          />
        </StyledRow>
          {formData[value.keyValue]?.fontSize ? (
            <StyledRow>
              <label>
                Font Size
              </label>
              <select
                value={formData[value.keyValue]?.fontSize}
                onChange={(e) => updateField(value.keyValue, {fontSize: e.target.value})}
              >
                <option value="10px">10px</option>
                <option value="12px">12px</option>
                <option value="13px">13px</option>
                <option value="14px">14px</option>
                <option value="16px">16px</option>
                <option value="18px">18px</option>
                <option value="20px">20px</option>
                <option value="24px">24px</option>
                <option value="28px">28px</option>
                <option value="32px">32px</option>
                <option value="36px">36px</option>
                <option value="42px">42px</option>
                <option value="48px">48px</option>
                <option value="54px">54px</option>
              </select>
            </StyledRow>
          ) : null
        }
        </StyledContent>
      }
    </StyledWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    formData: state.form,
    draggableHovered: state.mouse.hoveredDraggable,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    hoverItem: (keyValue) => dispatch(formSectionHovered(keyValue)),
    updateField: (keyValue, obj) => dispatch(updateAdvancedField(keyValue, obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionEditor);
