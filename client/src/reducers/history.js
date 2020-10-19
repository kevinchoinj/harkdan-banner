import {
  ACTION_TAKEN,
} from 'actions/history';
import produce from 'immer';

const DEFAULT_STATE = {
  history: [],
}

export default (state = DEFAULT_STATE, action) =>
  produce(state, draft => {
    switch(action.type){
      case ACTION_TAKEN:
        if (draft.history.length < 10) {
          draft.history.push({form: action.data, label: action.actionName});
        }
        else {
          draft.history.push({form: action.data, label: action.actionName});
          draft.history.shift();
        }
        break;
      default:
        break;
    }
  }
);
