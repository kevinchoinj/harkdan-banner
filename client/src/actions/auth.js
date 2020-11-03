import Cookies from 'js-cookie';

export const LOGIN_PASSPORT_STARTED = Symbol('LOGIN_PASSPORT_STARTED');
export const LOGIN_PASSPORT_SUCCEEDED = Symbol('LOGIN_PASSPORT_SUCCEEDED');
export const LOGIN_PASSPORT_FAILURE = Symbol('LOGIN_PASSPORT_FAILURE');

export const FIND_PASSPORT_STARTED = Symbol('FIND_PASSPORT_STARTED');
export const FIND_PASSPORT_SUCCEEDED = Symbol('FIND_PASSPORT_SUCCEEDED');
export const FIND_PASSPORT_FAILURE = Symbol('FIND_PASSPORT_FAILURE');

export const LOG_OUT = Symbol('LOG_OUT');

const loginPassportSucceeded = data => ({type: LOGIN_PASSPORT_SUCCEEDED, data});
const findPassportSucceeded = data => ({type: FIND_PASSPORT_SUCCEEDED, data});

export const withRequest = ({request}) => request;

export function findPassport() {
  const accessString = Cookies.get('JWT');
  console.log(accessString);
  return findPassportSucceeded(accessString);
}

export function loginPassport(values) {
  //Cookies.set('JWT', values, {expires: 7});
  return loginPassportSucceeded(values);
};

export const logout = () => {
  Cookies.remove('JWT');
  return{
    type: LOG_OUT,
  };
};