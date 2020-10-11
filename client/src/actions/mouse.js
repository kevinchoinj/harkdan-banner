export const GET_MOUSE_POSITION = Symbol('GET_MOUSE_POSITION');
export const FORM_SECTION_HOVERED = Symbol('FORM_SECTION_HOVERED');
export const DRAGGABLE_ITEM_HOVERED = Symbol('DRAGGABLE_ITEM_HOVERED');

export const getMousePosition = (xValue, yValue) => {
  return{
    type: GET_MOUSE_POSITION,
    xValue: xValue,
    yValue: yValue,
  };
};

export const formSectionHovered = (keyValue) => {
  return{
    type: FORM_SECTION_HOVERED,
    keyValue,
  };
};

export const draggableItemHovered = (keyValue) => {
  return{
    type: DRAGGABLE_ITEM_HOVERED,
    keyValue,
  };
};