import {history} from 'store';
import Cookies from 'js-cookie';

export const FETCH_NOTIFICATIONS_STARTED = Symbol('FETCH_NOTIFICATIONS_STARTED');
export const FETCH_NOTIFICATIONS_SUCCEEDED = Symbol('FETCH_NOTIFICATIONS_SUCCEEDED');
export const FETCH_NOTIFICATIONS_FAILURE = Symbol('FETCH_NOTIFICATIONS_FAILURE');

export const ADD_NOTIFICATIONS_STARTED = Symbol('ADD_NOTIFICATIONS_STARTED');
export const ADD_NOTIFICATIONS_SUCCEEDED = Symbol('ADD_NOTIFICATIONS_SUCCEEDED');
export const ADD_NOTIFICATIONS_FAILURE = Symbol('ADD_NOTIFICATIONS_FAILURE');

export const EDIT_NOTIFICATIONS_STARTED = Symbol('EDIT_NOTIFICATIONS_STARTED');
export const EDIT_NOTIFICATIONS_SUCCEEDED = Symbol('EDIT_NOTIFICATIONS_SUCCEEDED');
export const EDIT_NOTIFICATIONS_FAILURE = Symbol('EDIT_NOTIFICATIONS_FAILURE');

export const REMOVE_NOTIFICATIONS_STARTED = Symbol('REMOVE_NOTIFICATIONS_STARTED');
export const REMOVE_NOTIFICATIONS_SUCCEEDED = Symbol('REMOVE_NOTIFICATIONS_SUCCEEDED');
export const REMOVE_NOTIFICATIONS_FAILURE = Symbol('REMOVE_NOTIFICATIONS_FAILURE');

const fetchNotificationsStarted = request => ({type: FETCH_NOTIFICATIONS_STARTED, request});
const fetchNotificationsSucceeded = data => ({type: FETCH_NOTIFICATIONS_SUCCEEDED, data});
const fetchNotificationsFailure = (data, error) => ({type: FETCH_NOTIFICATIONS_FAILURE, data, error});

const addNotificationsStarted = request => ({type: ADD_NOTIFICATIONS_STARTED, request});
const addNotificationsSucceeded = data => ({type: ADD_NOTIFICATIONS_SUCCEEDED, data});
const addNotificationsFailure = (data, error) => ({type: ADD_NOTIFICATIONS_FAILURE, data, error});

const editNotificationsStarted = request => ({type: EDIT_NOTIFICATIONS_STARTED, request});
const editNotificationsSucceeded = data => ({type: EDIT_NOTIFICATIONS_SUCCEEDED, data});
const editNotificationsFailure = (data, error) => ({type: EDIT_NOTIFICATIONS_FAILURE, data, error});

const removeNotificationsStarted = request => ({type: REMOVE_NOTIFICATIONS_STARTED, request});
const removeNotificationsSucceeded = data => ({type: REMOVE_NOTIFICATIONS_SUCCEEDED, data});
const removeNotificationsFailure = (data, error) => ({type: REMOVE_NOTIFICATIONS_FAILURE, data, error});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}


function getNotifications() {
  return () => {
    return fetch('/api/v1/notifications');
  };
}
export function fetchNotifications() {
  return (dispatch) => {
    dispatch(fetchNotificationsStarted());
    return dispatch(getNotifications())
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchNotificationsSucceeded(json));
      })
      .catch(error => dispatch(fetchNotificationsFailure(error)));
  };
}

function postNotifications(values) {
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
export function addNotifications(values) {
  return (dispatch) => {
    dispatch(addNotificationsStarted());
    return dispatch(postNotifications(values))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(addNotificationsSucceeded(json));
      })
      .catch(error => dispatch(addNotificationsFailure(error)));
  };
}

export function addNotificationsThenUpdate(values) {
  return (dispatch) => {
    dispatch(addNotifications(values))
      .then(() => dispatch(fetchNotifications()));
  };
}
/*======================================
=             EDIT IMAGE               =
======================================*/
function putNotifications(values) {
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
export function editNotifications(values) {
  return (dispatch) => {
    dispatch(editNotificationsStarted());
    return dispatch(putNotifications(values))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(editNotificationsSucceeded(json));
      })
      .catch(error => dispatch(editNotificationsFailure(error)));
  };
}

export function editNotificationsThenUpdate(values, path) {
  return (dispatch) => {
    dispatch(editNotifications(values))
      .then(() => {
        history.push(path);
      });
  };
}

function deleteNotifications(id) {
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
export function removeNotifications(id, rev, awsKey) {
  return (dispatch) => {
    dispatch(removeNotificationsStarted());
    return dispatch(deleteNotifications(id, rev))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(removeNotificationsSucceeded(json));
      })
      .catch(error => dispatch(removeNotificationsFailure(error)));
  };
}
