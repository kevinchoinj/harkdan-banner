import {history} from 'store';
import Cookies from 'js-cookie';

export const FETCH_BRANDING_STARTED = Symbol('FETCH_BRANDING_STARTED');
export const FETCH_BRANDING_SUCCEEDED = Symbol('FETCH_BRANDING_SUCCEEDED');
export const FETCH_BRANDING_FAILURE = Symbol('FETCH_BRANDING_FAILURE');

export const ADD_BRANDING_STARTED = Symbol('ADD_BRANDING_STARTED');
export const ADD_BRANDING_SUCCEEDED = Symbol('ADD_BRANDING_SUCCEEDED');
export const ADD_BRANDING_FAILURE = Symbol('ADD_BRANDING_FAILURE');

export const EDIT_BRANDING_STARTED = Symbol('EDIT_BRANDING_STARTED');
export const EDIT_BRANDING_SUCCEEDED = Symbol('EDIT_BRANDING_SUCCEEDED');
export const EDIT_BRANDING_FAILURE = Symbol('EDIT_BRANDING_FAILURE');

export const REMOVE_BRANDING_STARTED = Symbol('REMOVE_BRANDING_STARTED');
export const REMOVE_BRANDING_SUCCEEDED = Symbol('REMOVE_BRANDING_SUCCEEDED');
export const REMOVE_BRANDING_FAILURE = Symbol('REMOVE_BRANDING_FAILURE');

const fetchBrandingStarted = request => ({type: FETCH_BRANDING_STARTED, request});
const fetchBrandingSucceeded = data => ({type: FETCH_BRANDING_SUCCEEDED, data});
const fetchBrandingFailure = (data, error) => ({type: FETCH_BRANDING_FAILURE, data, error});

const addBrandingStarted = request => ({type: ADD_BRANDING_STARTED, request});
const addBrandingSucceeded = data => ({type: ADD_BRANDING_SUCCEEDED, data});
const addBrandingFailure = (data, error) => ({type: ADD_BRANDING_FAILURE, data, error});

const editBrandingStarted = request => ({type: EDIT_BRANDING_STARTED, request});
const editBrandingSucceeded = data => ({type: EDIT_BRANDING_SUCCEEDED, data});
const editBrandingFailure = (data, error) => ({type: EDIT_BRANDING_FAILURE, data, error});

const removeBrandingStarted = request => ({type: REMOVE_BRANDING_STARTED, request});
const removeBrandingSucceeded = data => ({type: REMOVE_BRANDING_SUCCEEDED, data});
const removeBrandingFailure = (data, error) => ({type: REMOVE_BRANDING_FAILURE, data, error});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}


function getBranding() {
  return () => {
    return fetch('/api/v1/notifications');
  };
}
export function fetchBranding() {
  return (dispatch) => {
    dispatch(fetchBrandingStarted());
    return dispatch(getBranding())
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchBrandingSucceeded(json));
      })
      .catch(error => dispatch(fetchBrandingFailure(error)));
  };
}

function postBranding(values) {
  return () => {
    return fetch('/api/v1/notifications',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `JWT ${Cookies.get('JWT')}`
        },
        body: JSON.stringify({id: values.id, values: values})
      });
  };
}
export function addBranding(values) {
  return (dispatch) => {
    dispatch(addBrandingStarted());
    return dispatch(postBranding(values))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(addBrandingSucceeded(json));
      })
      .catch(error => dispatch(addBrandingFailure(error)));
  };
}

export function addBrandingThenUpdate(values) {
  return (dispatch) => {
    dispatch(addBranding(values))
      .then(() => dispatch(fetchBranding()));
  };
}
/*======================================
=             EDIT IMAGE               =
======================================*/
function putBranding(values) {
  return () => {
    return fetch('/api/v1/notifications',
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `JWT ${Cookies.get('JWT')}`
        },
        body: JSON.stringify({id: values.id, values: values})
      });
  };
}
export function editBranding(values) {
  return (dispatch) => {
    dispatch(editBrandingStarted());
    return dispatch(putBranding(values))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(editBrandingSucceeded(json));
      })
      .catch(error => dispatch(editBrandingFailure(error)));
  };
}

export function editBrandingThenUpdate(values, path) {
  return (dispatch) => {
    dispatch(editBranding(values))
      .then(() => {
        history.push(path);
      });
  };
}

function deleteBranding(id) {
  return () => {
    return fetch('/api/v1/notifications',
      {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `JWT ${Cookies.get('JWT')}`
        },
        body: JSON.stringify({
          id: id,
        })
      });
  };
}
export function removeBranding(id, rev, awsKey) {
  return (dispatch) => {
    dispatch(removeBrandingStarted());
    return dispatch(deleteBranding(id, rev))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(removeBrandingSucceeded(json));
      })
      .catch(error => dispatch(removeBrandingFailure(error)));
  };
}
