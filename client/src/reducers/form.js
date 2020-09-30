import {
  SET_STREAMER,
  RESET_FORM,
  SET_STYLING_VALUE,
} from 'actions/form';

const DEFAULT_STATE={
  streamer: null,
  styling: {},
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
  default:
    return state;
  }
};
