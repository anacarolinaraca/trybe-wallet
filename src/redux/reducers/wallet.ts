// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ExpensesType } from '../../types';
import { ADD_EXPENSES, CURRENCY, DELETE_EXPENSES } from '../actions';

export const INITIAL_WALLET = {
  currencies: [],
  expenses: [],
  id: 0,
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
    case DELETE_EXPENSES:
      return {
        ...state,
        expenses: state.expenses
          .filter((expense: ExpensesType) => expense.id !== action.payload),
      };
    default:
      return state;
  }
};

export default wallet;
