import {
  TOGGLE_BORDERS,
  TOGGLE_GRID,
  TOGGLE_EXAMPLES,
  SHOW_BACKGROUND_CHOOSER,
} from 'actions/formSettings';

const DEFAULT_STATE={
  showBorders: true,
  showGrid: false,
  showExamples: true,
  backgroundChooserVisible: false,
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
    case SHOW_BACKGROUND_CHOOSER:
      return state = {
        ...state,
        backgroundChooserVisible: payload.value,
      };
    default:
      return state;
    }
};
