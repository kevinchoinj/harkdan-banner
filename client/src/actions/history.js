export const ACTION_TAKEN = Symbol('ACTION_TAKEN');
export const RESTORE_HISTORY = Symbol('RESTORE_HISTORY');


const storeAction = (type, data, actionName) => {
  return {
    type,
    data,
    actionName,
    timestamp: new Date().toString(),
  }
}
export const actionTaken = (actionName) => {
  return (dispatch, getState) => {
    dispatch(storeAction(ACTION_TAKEN, getState().form, actionName))
  }
};

const setForm = (type, form, index) => {
  return {
    type,
    form,
    index,
  }
}
export const restoreHistory = (index) => {
  return (dispatch, getState) => {
    dispatch(setForm(RESTORE_HISTORY, getState().history.history[index].form, index))
  }
}