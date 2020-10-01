import React from 'react';
import {getMousePosition} from 'actions/mouse';
import {connect} from 'react-redux';

const TrackMouse = ({children, getMousePosition}) => {
  return(
    <div onMouseMove={(e) => getMousePosition(e)}>
      {children}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMousePosition: e => dispatch(getMousePosition(
      e.clientX,
      e.clientY,
    )),
  };
};

export default connect(null, mapDispatchToProps)(TrackMouse);