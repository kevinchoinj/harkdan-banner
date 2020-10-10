import {
  SET_STREAMER,
  RESET_FORM,
  SET_STYLING_VALUE,
  UPDATE_VALUE_VIEWERS
} from 'actions/form';

const DEFAULT_STATE={
  streamer: null,
  styling: {},
  valueViewers: {
    visible: false,
    x: 0,
    y: 0,
    width: 100,
    height: 50,
  },
  valueAvatar: {
    visible: false,
    x: 0,
    y: 0,
    width: 50,
    height: 50,
  },
  valueSnapshot: {
    visible: false,
    x: 0,
    y: 0,
    width: 100,
    height: 50,
  },
  valueCategory: {
    visible: false,
    x: 0,
    y: 0,
    width: 100,
    height: 50,
  },
  valueUsername: {
    visible: false,
    x: 0,
    y: 0,
    width: 100,
    height: 50,
  },
  valueGame: {
    visible: false,
    x: 0,
    y: 0,
    width: 100,
    height: 50,
  },
  valueTimeOnline: {
    visible: false,
    x: 0,
    y: 0,
    width: 100,
    height: 50,
  },
  valueStreamTitle: {
    visible: false,
    x: 0,
    y: 0,
    width: 100,
    height: 50,
  },
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case SET_STREAMER:
    return state = {
      ...state,
      streamer: payload.streamer,
    }
  case RESET_FORM:
    return state = {
      ...state,
      DEFAULT_STATE,
    };
  case SET_STYLING_VALUE:
    return state = {
      ...state,
      styling: {
        ...state.styling,
        [payload.keyValue]: payload.value,
      }
    };
  case UPDATE_VALUE_VIEWERS:
    return state = {
      ...state,
      valueViewers: {
        ...state.valueViewers,
        ...payload.obj,
      }
    };
  default:
    return state;
  }
};
