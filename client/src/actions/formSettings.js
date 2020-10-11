export const TOGGLE_BORDERS = Symbol('TOGGLE_BORDERS');
export const TOGGLE_GRID = Symbol('TOGGLE_GRID');
export const TOGGLE_EXAMPLES = Symbol('TOGGLE_EXAMPLES');

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