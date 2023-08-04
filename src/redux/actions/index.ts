import { LOGIN_EMAIL } from './actionTypes';

export const setEmailAction = (email: string) => ({
  type: LOGIN_EMAIL,
  payload: email,
});
