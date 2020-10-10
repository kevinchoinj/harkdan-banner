import React from 'react';
import {connect} from 'react-redux';
import {Rnd} from 'react-rnd';
import {updateAdvancedField} from 'actions/form';

const DraggableRnd = ({keyValue, data, updateAdvancedField}) => {
  return (
    <Rnd
      size={{ width: data.width,  height: data.height }}
      position={{ x: data.x, y: data.y }}
      onDragStop={(e, d) => {
        updateAdvancedField(keyValue, { x: d.x, y: d.y });
      }}
      onResize={(e, direction, ref, delta, position) => {
        updateAdvancedField(keyValue, {
          width: ref.style.width,
          height: ref.style.height,
        })
      }}
    >
      asdf
    </Rnd>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateAdvancedField: (keyValue, obj) => dispatch(updateAdvancedField(keyValue, obj)),
  };
};

export default connect(null, mapDispatchToProps)(DraggableRnd);