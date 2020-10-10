export const RESET_FORM = Symbol('RESET_FORM');
export const SET_STREAMER = Symbol('SET_STREAMER');
export const SET_STYLING_VALUE = Symbol('SET_STYLING_VALUE');

export const UPDATE_VALUE_VIEWERS = Symbol('UPDATE_VALUE_VIEWERS');

export const resetBrandingPreview = () => {
  return{
    type: RESET_FORM,
  };
};
export const setStreamer = (value) => {
  return{
    type: SET_STREAMER,
    streamer: value,
  };
};
export const setStylingValue = (keyValue, value) => {
  return{
    type: SET_STYLING_VALUE,
    keyValue: keyValue,
    value: value,
  };
};

export const updateValueViewers = (obj) => {
  return{
    type: UPDATE_VALUE_VIEWERS,
    obj: obj,
  };
};