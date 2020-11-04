import React, {useMemo} from 'react';
import {connect} from 'react-redux';
import {Rnd} from 'react-rnd';
import {updateAdvancedField} from 'actions/form';
import styled from 'styled-components';
import {draggableItemHovered} from 'actions/mouse';
import {actionTaken} from 'actions/history';
import {setFormKey} from 'actions/formSettings';

const StyledContent = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: ${props => props.hovered && '0px 0px 15px 5px rgba(221,221,221,0.5)'};
  transition: .2s ease;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    height: 50%;
  }
`;
const genericHandleStyling = {
  height: '10px',
  width: '10px',
  border: '1px solid rgba(255, 255, 255, .2)',
}

const DraggableRnd = ({
  children,
  data,
  formKey,
  hovered,
  hoverItem,
  keyValue,
  label,
  saveHistory,
  setRightSide,
  updateField,
}) => {
  const isSelected = useMemo(() => {
    return formKey.keyValue === keyValue;
  }, [formKey, keyValue]);
  return data.visible ? (
    <Rnd
      size={{ width: data.width,  height: data.height }}
      position={{ x: data.x, y: data.y }}
      onDragStop={(e, d) => {
        updateField(keyValue, { x: d.x, y: d.y });
        saveHistory(`Moved ${label}`);
      }}
      onResize={(e, direction, ref) => {
        updateField(keyValue, {
          width: ref.style.width,
          height: ref.style.height,
        });
      }}
      onResizeStop={() => {
        saveHistory(`Resized ${label}`);
      }}
      onClick={() => setRightSide({keyValue: keyValue, label: label})}
      resizeHandleStyles = {
        isSelected ?
        {
          bottomLeft: genericHandleStyling,
          bottomRight: genericHandleStyling,
          topLeft: genericHandleStyling,
          topRight: genericHandleStyling,
        }
        : {}
      }
      onMouseEnter={() => hoverItem(keyValue)}
      onMouseLeave={() => hoverItem(null)}
      style={{
        pointerEvents: !isSelected && 'none',
      }}
    >
      <StyledContent
        style={{
          color: data.color,
          fontFamily: data.fontFamily,
          fontSize: data.fontSize,
          fontWeight: data.fontWeight,
          textShadow: data.showTextShadow ? `2px 2px ${data.textShadowWeight} ${data.textShadowColor}` : 'none',
          border: isSelected ? '1px solid rgba(255, 255, 255, .2)' : '1px solid transparent',
        }}
        hovered={hovered}
      >
        {children}
      </StyledContent>
    </Rnd>
  ) : null;
}
const mapStateToProps = (state) => {
  return {
    formKey: state.formSettings.formKey,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    hoverItem: (keyValue) => dispatch(draggableItemHovered(keyValue)),
    setRightSide: (value) => dispatch(setFormKey(value)),
    saveHistory: (actionName) => dispatch(actionTaken(actionName)),
    updateField: (keyValue, obj) => dispatch(updateAdvancedField(keyValue, obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DraggableRnd);