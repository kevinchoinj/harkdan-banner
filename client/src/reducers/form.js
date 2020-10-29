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
import {
  FETCH_BRANDING_SUCCEEDED,
} from 'actions/api';

const DEFAULT_STATE={
  streamer: '',
  platform: 'twitch',
  background: 11,
  borderRadius: '0px',
  valueViewers: {
    visible: true,
    locked: false,
    x: 225,
    y: 71,
    width: 163,
    height: 33,
    fontSize: '12px',
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#fff',
    showTextShadow: false,
    textShadowWeight: '8px',
    textShadowColor: '#dddddd',
  },
  valueAvatar: {
    visible: false,
    locked: false,
    x: 0,
    y: 0,
    width: 50,
    height: 50,
  },
  valueSnapshot: {
    visible: true,
    locked: false,
    x: 216,
    y: 118,
    width: 257,
    height: 145,
  },
  valueCategory: {
    visible: true,
    locked: false,
    x: 225,
    y: 20,
    width: 232,
    height: 52,
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
    locked: false,
    x: 6,
    y: 188,
    width: 350,
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
    visible: true,
    locked: false,
    x: 225,
    y: 48,
    width: 100,
    height: 39,
    fontSize: '12px',
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#fff',
    showTextShadow: false,
    textShadowWeight: '8px',
    textShadowColor: '#dddddd',
  },
  valueStreamTitle: {
    visible: true,
    locked: false,
    x: 225,
    y: 9,
    width: 227,
    height: 33,
    fontSize: '12px',
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#fff',
    showTextShadow: false,
    textShadowWeight: '8px',
    textShadowColor: '#dddddd',
  },
  valueBackgroundShape: {
    visible: true,
    locked: false,
    x: 217,
    y: 8,
    width: 257,
    height: 97,
    color: '#111111',
    opacity: ".8",
  },
  valueOfflineMessage: {
    visible: true,
    locked: false,
    x: 6,
    y: 188,
    width: 350,
    height: 100,
    fontSize: '64px',
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#fff',
    showTextShadow: true,
    textShadowWeight: '16px',
    textShadowColor: '#666666',
  },
  valueOfflineLastOnline: {
    visible: true,
    locked: false,
    x: 225,
    y: 9,
    width: 227,
    height: 33,
    fontSize: '12px',
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#fff',
    showTextShadow: false,
    textShadowWeight: '8px',
    textShadowColor: '#dddddd',
  },
  valueOfflineBackgroundShape: {
    visible: true,
    locked: false,
    x: -1,
    y: -1,
    width: 483,
    height: 272,
    color: '#111111',
    opacity: ".8",
  },
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case FETCH_BRANDING_SUCCEEDED:
    return state = payload.data;
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
