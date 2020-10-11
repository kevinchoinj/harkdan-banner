export const RESET_FORM = Symbol('RESET_FORM');
export const SET_STREAMER = Symbol('SET_STREAMER');
export const SET_PLATFORM = Symbol('SET_PLATFORM');

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
export const updateAdvancedField = (keyValue, obj) => {
  return{
    type: UPDATE_ADVANCED_FIELD,
    keyValue,
    obj,
  };
};