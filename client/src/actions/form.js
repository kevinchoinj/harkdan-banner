export const RESET_FORM = Symbol('RESET_FORM');
export const SET_STREAMER = Symbol('SET_STREAMER');
export const SET_PLATFORM = Symbol('SET_PLATFORM');
export const SET_BACKGROUND = Symbol('SET_BACKGROUND');
export const SET_BORDER_RADIUS = Symbol('SET_BORDER_RADIUS');

export const UPDATE_ADVANCED_FIELD = Symbol('UPDATE_ADVANCED_FIELD');

export const resetBrandingPreview = () => {
  return{
    type: RESET_FORM,
  };
};
export const setStreamer = (streamer) => {
  return{
    type: SET_STREAMER,
    streamer,
  };
};
export const setPlatform = (platform) => {
  return{
    type: SET_PLATFORM,
    platform,
  };
};
export const setBackground = (background) => {
  return{
    type: SET_BACKGROUND,
    background,
  };
};
export const setBorderRadius = (borderRadius) => {
  return{
    type: SET_BORDER_RADIUS,
    borderRadius,
  };
};
export const updateAdvancedField = (keyValue, obj) => {
  return{
    type: UPDATE_ADVANCED_FIELD,
    keyValue,
    obj,
  };
};