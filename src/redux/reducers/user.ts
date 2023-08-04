import { LOGIN_EMAIL } from '../actions/actionTypes';

export const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOGIN_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default user;
