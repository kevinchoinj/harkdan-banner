import {
  TOGGLE_BORDERS,
  TOGGLE_GRID,
  TOGGLE_EXAMPLES,
  SHOW_BACKGROUND_CHOOSER,
  SHOW_HISTORY,
  SET_FORM_KEY,
} from 'actions/formSettings';

const DEFAULT_STATE={
  showBorders: true,
  showGrid: false,
  showExamples: true,
  backgroundChooserVisible: false,
  historyVisible: true,
  formKey: {keyValue: 'valueUsername', label: 'Username'},
};

const formSettingsReducer = (state=DEFAULT_STATE, payload) => {
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
    case SHOW_HISTORY:
      return state = {
        ...state,
        historyVisible: payload.value,
      };
    case SET_FORM_KEY:
      return state = {
        ...state,
        formKey: payload.value,
      };
    default:
      return state;
    }
};

export default formSettingsReducer;
