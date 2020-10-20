import {
  ACTION_TAKEN,
  RESTORE_HISTORY,
} from 'actions/history';
import produce from 'immer';

const DEFAULT_STATE = {
  history: [],
  historyIndex: -1,
}

export default (state = DEFAULT_STATE, action) =>
  produce(state, draft => {
    switch(action.type){
      case ACTION_TAKEN:
        if ((draft.historyIndex + 1) < draft.history.length) {
          draft.history = draft.history.slice(0, draft.historyIndex + 1);
          draft.history.push({form: action.data, label: action.actionName});
          draft.historyIndex++;
        }
        else if (draft.history.length < 10) {
          draft.history.push({form: action.data, label: action.actionName});
          draft.historyIndex++;
        }
        else {
          draft.history.push({form: action.data, label: action.actionName});
          draft.history.shift();
        }
        break;
      case RESTORE_HISTORY:
        draft.historyIndex = action.index;
        break;
      default:
        break;
    }
  }
);
