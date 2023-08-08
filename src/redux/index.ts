import { legacy_createStore as createStore } from 'redux';

import { ReducersCombine } from './reducers';

export const store = createStore(ReducersCombine);

if (window.Cypress) {
  window.store = store;
}
