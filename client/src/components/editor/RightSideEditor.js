import React, {useState} from 'react';
import {connect} from 'react-redux';
import {updateAdvancedField} from 'actions/form';
import {formSectionHovered} from 'actions/mouse';
import Toggle from 'react-toggle';
import {
  StyledWrapper,
  StyledContent,
  StyledRow,
} from 'components/editor/stylingRight';
import InputFont from 'components/editor/InputFont';
import {actionTaken} from 'actions/history';
import ColorPicker from 'components/home/ColorPicker';

const SectionEditor = ({
  formData,
  saveHistory,
  updateField,
  value,
}) => {
  const handleChange = (e, keyValue, label) => {
    if (e.target.checked) {
      updateField(keyValue, {visible: e.target.checked});
      saveHistory(`Show ${label}`);
    }
    else {
      updateField(keyValue, {visible: e.target.checked});
      saveHistory(`Hide ${label}`);
    }
  }

  const handleChangeLock = (e, keyValue, label) => {
    if (e.target.checked) {
      updateField(keyValue, {locked: e.target.checked});
      saveHistory(`Locked ${label}`);
    }
    else {
      updateField(keyValue, {locked: e.target.checked});
      saveHistory(`Unlocked ${label}`);
    }
  }
  return (
    <StyledWrapper>
        <StyledRow>
          <strong>{value.label}</strong>
        </StyledRow>
        <StyledContent>
        <StyledRow>
          <label>
            Show/Hide
          </label>
          <Toggle
            checked={formData[value.keyValue]?.visible}
            onChange={(e) => handleChange(e, value.keyValue, value.label)}
          />
        </StyledRow>
        <StyledRow>
          <label>
            Locked
          </label>
          <Toggle
            checked={formData[value.keyValue]?.locked}
            onChange={(e) => handleChangeLock(e, value.keyValue, value.label)}
          />
        </StyledRow>
        {formData[value.keyValue]?.fontSize ? (
          <StyledRow>
            <label>
              Font Size
            </label>
            <select
              value={formData[value.keyValue]?.fontSize}
              onChange={(e) => {
                updateField(value.keyValue, {fontSize: e.target.value});
                saveHistory(`Font Size ${value.label} to ${e.target.value}`);
              }}
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
              <option value="64px">64px</option>
              <option value="84px">84px</option>
            </select>
          </StyledRow>
        ) : null
      }
      {formData[value.keyValue]?.fontWeight ? (
        <StyledRow>
          <label>
            Font Weight
          </label>
          <select
            value={formData[value.keyValue]?.fontWeight}
            onChange={(e) => {
              updateField(value.keyValue, {fontWeight: e.target.value});
              saveHistory(`Font Weight ${value.label} to ${e.target.value}`);
            }}
          >
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
          </select>
        </StyledRow>) : null
      }
      {formData[value.keyValue]?.color ? (
        <StyledRow>
          <label>Color</label>
          <ColorPicker
            color={formData[value.keyValue]?.color}
            onChangeComplete={(e) => {
              updateField(value.keyValue, {color: e.hex})
              saveHistory(`Color of ${value.label} to ${e.hex}`);
            }}
          />
        </StyledRow>
      ) : null}

      {formData[value.keyValue]?.fontFamily ? (
        <InputFont value={value}/>
      ) : null}

      {formData[value.keyValue]?.showTextShadow !== undefined && formData[value.keyValue]?.showTextShadow !== null &&
        <StyledRow>
          <label>
            Text Shadow
          </label>
          <Toggle
            checked={formData[value.keyValue]?.showTextShadow}
            onChange={(e) => {
              updateField(value.keyValue, {showTextShadow: e.target.checked})
              saveHistory(`Toggled Text Shadow of ${value.label}`);
            }}
          />
        </StyledRow>
        }

        {formData[value.keyValue]?.showTextShadow &&
          <StyledRow>
            <label>
              Text Shadow Blur
            </label>
            <select
              value={formData[value.keyValue]?.textShadowWeight}
              onChange={(e) => {
                updateField(value.keyValue, {textShadowWeight: e.target.value});
                saveHistory(`Text Shadow Blur ${value.label} to ${e.target.value}`);
              }}
            >
              <option value="4px">4px</option>
              <option value="8px">8px</option>
              <option value="12px">12px</option>
              <option value="16px">16px</option>
              <option value="20px">20px</option>
              <option value="24px">24px</option>
              <option value="28px">28px</option>
              <option value="32px">32px</option>
            </select>
          </StyledRow>
          }
        {formData[value.keyValue]?.showTextShadow && (
          <StyledRow>
            <label>Color</label>
            <ColorPicker
              color={formData[value.keyValue]?.textShadowColor}
              onChangeComplete={(e) => {
                updateField(value.keyValue, {textShadowColor: e.hex})
                saveHistory(`Text Shadow Color of ${value.label} to ${e.hex}`);
              }}
            />
          </StyledRow>
        )}


        {formData[value.keyValue]?.opacity ? (
          <StyledRow>
            <label>
              Opacity
            </label>
            <select
              value={formData[value.keyValue]?.opacity}
              onChange={(e) => {
                updateField(value.keyValue, {opacity: e.target.value});
                saveHistory(`Opacity ${value.label} to ${e.target.value}`);
              }}
            >
              <option value=".2">.2</option>
              <option value=".3">.3</option>
              <option value=".4">.4</option>
              <option value=".5">.5</option>
              <option value=".6">.6</option>
              <option value=".7">.7</option>
              <option value=".8">.8</option>
              <option value=".9">.9</option>
              <option value="1">1</option>
            </select>
          </StyledRow>
        ) : null
      }

          <StyledRow>
            <label>X Coord</label>
            <input
              onChange={(e) => {
                updateField(value.keyValue, {x: e.target.value});
                saveHistory(`X Coord to ${e.target.value}`);
              }}
              value={formData[value.keyValue]?.x}
            />
          </StyledRow>

          <StyledRow>
            <label>Y Coord</label>
            <input
              onChange={(e) => {
                updateField(value.keyValue, {y: e.target.value});
                saveHistory(`Y Coord to ${e.target.value}`);
              }}
              value={formData[value.keyValue]?.y}
            />
          </StyledRow>

        </StyledContent>
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
    saveHistory: (actionName) => dispatch(actionTaken(actionName)),
    updateField: (keyValue, obj) => dispatch(updateAdvancedField(keyValue, obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionEditor);
