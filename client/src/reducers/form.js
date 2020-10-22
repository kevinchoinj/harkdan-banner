import {
  SET_STREAMER,
  SET_PLATFORM,
  RESET_FORM,
  UPDATE_ADVANCED_FIELD,
} from 'actions/form';
import {
  RESTORE_HISTORY
} from 'actions/history';

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
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#fff',
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
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#fff',
  },
  valueUsername: {
    visible: true,
    x: 0,
    y: 0,
    width: 200,
    height: 50,
    fontSize: '36px',
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#fff',
  },
  valueTimeOnline: {
    visible: false,
    x: 0,
    y: 0,
    width: 100,
    height: 50,
    fontSize: '12px',
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#fff',
  },
  valueStreamTitle: {
    visible: false,
    x: 0,
    y: 0,
    width: 100,
    height: 50,
    fontSize: '16px',
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#fff',
  },
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case RESTORE_HISTORY:
    return state = payload.form;
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
