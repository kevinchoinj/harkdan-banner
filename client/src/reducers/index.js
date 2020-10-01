import form from 'reducers/form';
import mouse from 'reducers/mouse';

const reducers={
  form,
  mouse,
};

export default reducers;

/*======================================
=               MOUSE                  =
======================================*/
export const selectCurrentMousePosition = (state) => state.mouse.mousePosition;
