export const RESET_FORM = Symbol('RESET_FORM');
export const SET_STREAMER = Symbol('SET_STREAMER');
export const SET_STYLING_VALUE = Symbol('SET_STYLING_VALUE');

export const UPDATE_ADVANCED_FIELD = Symbol('UPDATE_ADVANCED_FIELD');

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
    keyValue,
    value,
  };
};

export const updateAdvancedField = (keyValue, obj) => {
  return{
    type: UPDATE_ADVANCED_FIELD,
    keyValue,
    obj,
  };
};