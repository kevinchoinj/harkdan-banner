import {
  SET_STREAMER,
  SET_PLATFORM,
  RESET_FORM,
  UPDATE_ADVANCED_FIELD
} from 'actions/form';

const DEFAULT_STATE={
  streamer: '',
  platform: 'twitch',
  valueViewers: {
    visible: true,
    x: 0,
    y: 0,
    width: 100,
    height: 50,
    fontSize: '12px',
  },
  valueAvatar: {
    visible: true,
    x: 0,
    y: 0,
    width: 50,
    height: 50,
  },
  valueSnapshot: {
    visible: false,
    x: 0,
    y: 0,
    width: 250,
    height: 150,
  },
  valueCategory: {
    visible: false,
    x: 0,
    y: 0,
    width: 100,
    height: 50,
    fontSize: '12px',
  },
  valueUsername: {
    visible: true,
    x: 0,
    y: 0,
    width: 100,
    height: 50,
    fontSize: '12px',
  },
  valueTimeOnline: {
    visible: false,
    x: 0,
    y: 0,
    width: 100,
    height: 50,
    fontSize: '12px',
  },
  valueStreamTitle: {
    visible: false,
    x: 0,
    y: 0,
    width: 100,
    height: 50,
    fontSize: '16px',
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
  case SET_PLATFORM:
    return state = {
      ...state,
      platform: payload.platform,
    }
  case RESET_FORM:
    return state = {
      ...state,
      DEFAULT_STATE,
    };
  case UPDATE_ADVANCED_FIELD:
    return state = {
      ...state,
      [payload.keyValue]: {
        ...state[payload.keyValue],
        ...payload.obj,
      }
    };
  default:
    return state;
  }
};
