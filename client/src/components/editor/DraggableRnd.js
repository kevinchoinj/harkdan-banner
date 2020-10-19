import React from 'react';
import {connect} from 'react-redux';
import {Rnd} from 'react-rnd';
import {updateAdvancedField} from 'actions/form';
import styled from 'styled-components';
import {draggableItemHovered} from 'actions/mouse';
import {actionTaken} from 'actions/history';

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
  fontFamily,
  fontSize,
  hovered,
  hoverItem,
  keyValue,
  saveHistory,
  showBorders,
  updateField,
}) => {
  return data.visible ? (
    <Rnd
      size={{ width: data.width,  height: data.height }}
      position={{ x: data.x, y: data.y }}
      onDragStop={(e, d) => {
        updateField(keyValue, { x: d.x, y: d.y });
        saveHistory(`Moved ${keyValue}`);
      }}
      onResize={(e, direction, ref, delta, position) => {
        updateField(keyValue, {
          width: ref.style.width,
          height: ref.style.height,
        });
      }}
      onResizeStop={() => {
        saveHistory(`Resized ${keyValue}`);
      }}
      resizeHandleStyles = {
        showBorders ?
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
    >
      <StyledContent
        style={{
          fontFamily: fontFamily,
          fontSize: fontSize,
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
    showBorders: state.formSettings.showBorders,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveHistory: (actionName) => dispatch(actionTaken(actionName)),
    hoverItem: (keyValue) => dispatch(draggableItemHovered(keyValue)),
    updateField: (keyValue, obj) => dispatch(updateAdvancedField(keyValue, obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DraggableRnd);