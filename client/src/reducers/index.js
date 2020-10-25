import form from 'reducers/form';
import mouse from 'reducers/mouse';
import formSettings from 'reducers/formSettings';
import history from 'reducers/history';
import auth from 'reducers/auth';


const reducers={
  auth,
  form,
  formSettings,
  history,
  mouse,
};

export default reducers;

/*======================================
=               MOUSE                  =
======================================*/
export const selectCurrentMousePosition = (state) => state.mouse.mousePosition;
