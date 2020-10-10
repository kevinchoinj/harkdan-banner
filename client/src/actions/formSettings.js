export const SHOW_BORDERS = Symbol('SHOW_BORDERS');

export const showBorders = (value) => {
  return{
    type: SHOW_BORDERS,
    value,
  };
};