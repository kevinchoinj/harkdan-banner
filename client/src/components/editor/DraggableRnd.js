import React from 'react';
import {connect} from 'react-redux';
import {Rnd} from 'react-rnd';
import {updateValueViewers} from 'actions/form';

const DraggableRnd = ({viewers, updateValueViewers}) => {
  return (
    <Rnd
      size={{ width: viewers.width,  height: viewers.height }}
      position={{ x: viewers.x, y: viewers.y }}
      onDragStop={(e, d) => { updateValueViewers({ x: d.x, y: d.y }) }}
      onResize={(e, direction, ref, delta, position) => {
        updateValueViewers({
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
    updateValueViewers: (obj) => dispatch(updateValueViewers(obj)),
  };
};

const mapStateToProps = (state) => {
  return {
    viewers: state.form.valueViewers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DraggableRnd);