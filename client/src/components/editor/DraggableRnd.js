import React from 'react';
import {connect} from 'react-redux';
import {Rnd} from 'react-rnd';
import {updateAdvancedField} from 'actions/form';
import styled from 'styled-components';
import {draggableItemHovered} from 'actions/mouse';

const StyledContent = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: ${props => props.hovered && '0px 0px 10px 5px rgba(255,255,255,0.75)'};
  transition: .2s ease;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const genericHandleStyling = {
  height: '10px',
  width: '10px',
  border: '1px solid rgba(255, 255, 255, .2)',
}

const DraggableRnd = ({
  children,
  data,
  fontSize,
  hovered,
  hoverItem,
  keyValue,
  updateField,
}) => {
  return data.visible ? (
    <Rnd
      size={{ width: data.width,  height: data.height }}
      position={{ x: data.x, y: data.y }}
      onDragStop={(e, d) => {
        updateField(keyValue, { x: d.x, y: d.y });
      }}
      onResize={(e, direction, ref, delta, position) => {
        updateField(keyValue, {
          width: ref.style.width,
          height: ref.style.height,
        })
      }}
      resizeHandleStyles = {
        {
          bottomLeft: genericHandleStyling,
          bottomRight: genericHandleStyling,
          topLeft: genericHandleStyling,
          topRight: genericHandleStyling,
        }
      }
      onMouseEnter={() => hoverItem(keyValue)}
      onMouseLeave={() => hoverItem(null)}
    >
      <StyledContent
        style={{
          fontSize: fontSize,
        }}
        hovered={hovered}
      >
        {children}
      </StyledContent>
    </Rnd>
  ) : null;
}
const mapDispatchToProps = (dispatch) => {
  return {
    hoverItem: (keyValue) => dispatch(draggableItemHovered(keyValue)),
    updateField: (keyValue, obj) => dispatch(updateAdvancedField(keyValue, obj)),
  };
};

export default connect(null, mapDispatchToProps)(DraggableRnd);