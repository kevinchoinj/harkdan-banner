import {
  GET_MOUSE_POSITION,
} from 'actions/mouse';

const DEFAULT_STATE={
  mousePosition: {xValue: 0, yValue: 0},
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case GET_MOUSE_POSITION:
      return state = {
        ...state,
        mousePosition: {
          xValue: payload.xValue,
          yValue: payload.yValue,
        },
      };
    default:
      return state;
    }
};
