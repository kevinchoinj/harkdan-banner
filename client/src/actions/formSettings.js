export const TOGGLE_BORDERS = Symbol('TOGGLE_BORDERS');
export const TOGGLE_GRID = Symbol('TOGGLE_GRID');
export const TOGGLE_EXAMPLES = Symbol('TOGGLE_EXAMPLES');
export const SHOW_BACKGROUND_CHOOSER = Symbol('SHOW_BACKGROUND_CHOOSER');
export const SHOW_HISTORY = Symbol('SHOW_HISTORY');
export const SET_FORM_KEY = Symbol('SET_FORM_KEY');

export const toggleBorders = (value) => {
  return{
    type: TOGGLE_BORDERS,
    value,
  };
};
export const toggleGrid = (value) => {
  return{
    type: TOGGLE_GRID,
    value,
  };
};
export const toggleExamples = (value) => {
  return{
    type: TOGGLE_EXAMPLES,
    value,
  };
};
export const showBackgroundChooser = (value) => {
  return{
    type: SHOW_BACKGROUND_CHOOSER,
    value,
  };
};
export const showHistory = (value) => {
  return{
    type: SHOW_HISTORY,
    value,
  };
};
export const setFormKey = (value) => {
  return{
    type: SET_FORM_KEY,
    value,
  };
};