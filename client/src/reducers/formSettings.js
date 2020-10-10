import {
  SHOW_BORDERS,
} from 'actions/formSettings';

const DEFAULT_STATE={
  showBorders: true,
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case SHOW_BORDERS:
      return state = {
        ...state,
        showBorders: payload.value,
      };
    default:
      return state;
    }
};
