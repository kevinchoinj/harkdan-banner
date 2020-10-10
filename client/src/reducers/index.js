import form from 'reducers/form';
import mouse from 'reducers/mouse';
import formSettings from 'reducers/formSettings';


const reducers={
  form,
  formSettings,
  mouse,
};

export default reducers;

/*======================================
=               MOUSE                  =
======================================*/
export const selectCurrentMousePosition = (state) => state.mouse.mousePosition;
