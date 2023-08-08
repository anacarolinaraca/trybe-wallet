import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

export const ReducersCombine = combineReducers({
  user,
  wallet,
});
