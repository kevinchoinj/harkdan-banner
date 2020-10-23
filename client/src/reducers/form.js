import {
  SET_BACKGROUND,
  SET_BORDER_RADIUS,
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
  background: 1,
  borderRadius: '0px',
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
    showTextShadow: false,
    textShadowWeight: '8px',
    textShadowColor: '#dddddd',
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
    showTextShadow: false,
    textShadowWeight: '8px',
    textShadowColor: '#dddddd',
  },
  valueUsername: {
    visible: true,
    x: 0,
    y: 0,
    width: 480,
    height: 100,
    fontSize: '64px',
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#fff',
    showTextShadow: true,
    textShadowWeight: '16px',
    textShadowColor: '#666666',
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
    showTextShadow: false,
    textShadowWeight: '8px',
    textShadowColor: '#dddddd',
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
    showTextShadow: false,
    textShadowWeight: '8px',
    textShadowColor: '#dddddd',
  },
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case RESTORE_HISTORY:
    return state = payload.form;
  case SET_BACKGROUND:
    return state = {
      ...state,
      background: payload.background,
    }
  case SET_BORDER_RADIUS:
    return state = {
      ...state,
      borderRadius: payload.borderRadius,
    }
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
