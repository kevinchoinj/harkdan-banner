import React from 'react';
import {connect} from 'react-redux';
import {Rnd} from 'react-rnd';
import {updateAdvancedField} from 'actions/form';

const genericHandleStyling = {
  height: '10px',
  width: '10px',
  border: '1px solid rgba(255, 255, 255, .2)',
}
const DraggableRnd = ({children, data, keyValue, updateField}) => {
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
    >
      {children}
    </Rnd>
  ) : null;
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateField: (keyValue, obj) => dispatch(updateAdvancedField(keyValue, obj)),
  };
};

export default connect(null, mapDispatchToProps)(DraggableRnd);