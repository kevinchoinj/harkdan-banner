import {
  GET_MOUSE_POSITION,
  FORM_SECTION_HOVERED,
  DRAGGABLE_ITEM_HOVERED,
} from 'actions/mouse';

const DEFAULT_STATE={
  mousePosition: {xValue: 0, yValue: 0},
  hoveredItem: null,
  hoveredDraggable: null,
};

const mouseReducer = (state=DEFAULT_STATE, payload) => {
  switch(payload.type){
    case GET_MOUSE_POSITION:
      return state = {
        ...state,
        mousePosition: {
          xValue: payload.xValue,
          yValue: payload.yValue,
        },
      };
    case FORM_SECTION_HOVERED:
      return state = {
        ...state,
        hoveredItem: payload.keyValue,
      };
    case DRAGGABLE_ITEM_HOVERED:
      return state = {
        ...state,
        hoveredDraggable: payload.keyValue,
      };
    default:
      return state;
    }
};

export default mouseReducer;
