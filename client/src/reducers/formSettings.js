import {
  TOGGLE_BORDERS,
  TOGGLE_GRID,
  TOGGLE_EXAMPLES,
} from 'actions/formSettings';

const DEFAULT_STATE={
  showBorders: true,
  showGrid: false,
  showExamples: true,
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case TOGGLE_BORDERS:
      return state = {
        ...state,
        showBorders: payload.value,
      };
    case TOGGLE_GRID:
      return state = {
        ...state,
        showGrid: payload.value,
      };
    case TOGGLE_EXAMPLES:
      return state = {
        ...state,
        showExamples: payload.value,
      };
    default:
      return state;
    }
};
