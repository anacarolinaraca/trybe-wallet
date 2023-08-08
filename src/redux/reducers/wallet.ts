// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ADD_EXPENSES, CURRENCY } from '../actions';

export const INITIAL_WALLET = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_WALLET, action: any) => {
  switch (action.type) {
    case ADD_EXPENSES:
      return {
        ...state,
        expenses: [...state.expenses,
          { ...action.payload,
            id: state.expenses.length,
          }],
      };
    case CURRENCY:
      return {
        ...state,
        currencies: action.payload,
      };
    default:
      return state;
  }
};

export default wallet;
