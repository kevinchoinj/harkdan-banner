export const GET_MOUSE_POSITION = Symbol('GET_MOUSE_POSITION');

export const getMousePosition = (xValue, yValue) => {
  return{
    type: GET_MOUSE_POSITION,
    xValue: xValue,
    yValue: yValue,
  };
};